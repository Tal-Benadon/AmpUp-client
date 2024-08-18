import { useState } from "react";
import Button from "../../Button";
import Input from "../../Input";
import Textarea from "../../Textarea";
import styles from "./style.module.scss";
import { FaXmark } from "react-icons/fa6";
import axios from 'axios';
const isProduction = import.meta.env.VITE_PRODUCTION
const prodUrl = import.meta.env.PRODURL

export default function QuestionsFile() {

  const [files, setFiles] = useState([]);
  const [uploadProgress, setUploadProgress] = useState({});
  const [isSend, setIsSend] = useState(false);

  const handleFileChange = (e) => {
    setFiles([...files, ...e.target.files]);
  };

  const handleRemoveFile = (fileName) => {
    setFiles(files.filter((file) => file.name !== fileName));
    setUploadProgress((prevProgress) => {
      const newProgress = { ...prevProgress };
      delete newProgress[fileName];
      return newProgress;
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (files.length > 0) {
      setIsSend(true);
      // simulateFileUpload(files[0], 0);

      const totalSize = files.reduce((total, file) => total + file.size, 0);
      let uploadedSize = 0;

      const formData = new FormData();

      files.forEach((file) => {
        formData.append('media', file);
      });

      const axiosInstance = axios.create({
        onUploadProgress: (progressEvent) => {
          uploadedSize += progressEvent.loaded;
          const totalProgress = Math.round((uploadedSize * 100) / totalSize * 2);

          files.forEach((file, index) => {
            const fileProgress = Math.round((progressEvent.loaded * 100) / file.size);
            const fileUploadTime = (file.size / 1024) * 2; // Assuming 2 seconds per 1KB
            const adjustedFileProgress = (fileProgress / totalSize) * file.size;

            console.log(`File ${index + 1}: Progress ${adjustedFileProgress.toFixed(2)}%, Upload Time: ${fileUploadTime.toFixed(2)}s`);
            // Update the UI with the adjusted file progress and upload time
            setUploadProgress((prevProgress) => ({
              ...prevProgress,
              [file.name]: fileProgress,
            }));
          });

          console.log(`Total Progress: ${totalProgress}%`);
          // Update the UI with the total progress
        },
      });

      let finalPath = 'media/media'
      let baseUrl = isProduction === "true" ? prodUrl : 'http://localhost:3030/'
      const url = `${baseUrl}${finalPath}`

      axiosInstance.post(url, formData)
        .then((response) => {
          console.log('Upload complete');
          // Handle the response
        })
        .catch((error) => {
          console.error('Upload failed', error);
          // Handle the error
        });
    }
  };

  const simulateFileUpload = (file, index) => {
    setUploadProgress((prevProgress) => ({
      ...prevProgress,
      [file.name]: 0,
    }));

    const totalSizeKB = file.size / 1024;
    const durationPer500KB = 1000; // 1 second per 500KB
    const stepsPerSecond = 20; // Number of progress updates per second
    const stepDuration = 1000 / stepsPerSecond; // Time between each step in ms
    const progressIncrement = (500 / totalSizeKB) * 100 / stepsPerSecond; // Increment per step

    const interval = setInterval(() => {
      setUploadProgress((prevProgress) => {
        const newProgress = prevProgress[file.name] + progressIncrement;
        if (newProgress >= 100) {
          clearInterval(interval);
          if (index + 1 < files.length) {
            simulateFileUpload(files[index + 1], index + 1);
          }
          return {
            ...prevProgress,
            [file.name]: 100,
          };
        } else {
          return {
            ...prevProgress,
            [file.name]: newProgress,
          };
        }
      });
    }, stepDuration);
  };


  const formatFileSize = (sizeInBytes) => {
    const sizeInKB = sizeInBytes / 1024;
    if (sizeInKB < 1000) {
      return `${sizeInKB.toFixed(2)}KB`;
    } else {
      const sizeInMB = sizeInKB / 1024;
      return `${sizeInMB.toFixed(2)}MB`;
    }
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      {files.length > 0 && (
        <ul className={styles.fileList}>
          {files.map((file, index) => (
            <li key={index}>
              <div className={styles.icon}>
                <svg viewBox="0 0 11 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g clipPath="url(#clip0_554_3023)">
                    <path d="M0 2.55015C0 1.64007 0.822135 0.900146 1.83333 0.900146H6.41667V4.20015C6.41667 4.65647 6.8263 5.02515 7.33333 5.02515H11V12.4501C11 13.3602 10.1779 14.1001 9.16667 14.1001H1.83333C0.822135 14.1001 0 13.3602 0 12.4501V2.55015ZM11 4.20015H7.33333V0.900146L11 4.20015Z" fill="white" />
                  </g>
                </svg>
              </div>
              <div className={styles.detailsAndLoader}>
                <div className={styles.details}>
                  <p>{file.name}</p>
                  <h5>{formatFileSize(file.size)}</h5>
                </div>
                <div className={styles.loader}>
                  <div
                    className={styles.progressBar}
                    style={{ width: `${uploadProgress[file.name] || 0}%` }} />
                </div>
              </div>
              {!isSend && <button
                type="button"
                className={styles.removeButton}
                onClick={() => handleRemoveFile(file.name)}>
                <FaXmark />
              </button>}
            </li>
          ))}
        </ul>
      )}
      <div className={styles.Input}>
        <input
          type="file"
          name="file"
          className={styles.Input2}
          id="file"
          onChange={handleFileChange}
          multiple
        />
        <label htmlFor="file" className={styles.inputLabel}>
          <div><svg width="23" height="22" viewBox="0 0 23 22" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M16.5 8.00195C18.675 8.01395 19.853 8.11095 20.621 8.87895C21.5 9.75795 21.5 11.172 21.5 14V15C21.5 17.829 21.5 19.243 20.621 20.122C19.743 21 18.328 21 15.5 21H7.5C4.672 21 3.257 21 2.379 20.122C1.5 19.242 1.5 17.829 1.5 15V14C1.5 11.172 1.5 9.75795 2.379 8.87895C3.147 8.11095 4.325 8.01395 6.5 8.00195" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
            <path d="M11.5 14V1M11.5 1L14.5 4.5M11.5 1L8.5 4.5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          </div>
          <div className={styles.title1}>Upload File</div>
          <div className={styles.title2}>We support  PDF,  JPG,  PNG,  SVG</div>
          <div className={styles.title2}>All files must be  no larger than 5.0 GB</div>
        </label>
      </div>
      <Button type="submit" classname={styles.send}>Send</Button>
    </form>
  )
}
