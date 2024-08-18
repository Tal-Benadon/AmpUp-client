import Button from "../../Button";
import Input from "../../Input";
import Textarea from "../../Textarea";
import styles from "./style.module.scss";


export default function QuestionsImgFile() {
  return (
    <div className={styles.all}>
      <div className={styles.Input}>
        <input type="image" name="image" className={styles.Input2} id="file" />
        <label htmlFor="file" className={styles.inputLabel}>
          <div><svg width="23" height="22" viewBox="0 0 23 22" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M16.5 8.00195C18.675 8.01395 19.853 8.11095 20.621 8.87895C21.5 9.75795 21.5 11.172 21.5 14V15C21.5 17.829 21.5 19.243 20.621 20.122C19.743 21 18.328 21 15.5 21H7.5C4.672 21 3.257 21 2.379 20.122C1.5 19.242 1.5 17.829 1.5 15V14C1.5 11.172 1.5 9.75795 2.379 8.87895C3.147 8.11095 4.325 8.01395 6.5 8.00195" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
            <path d="M11.5 14V1M11.5 1L14.5 4.5M11.5 1L8.5 4.5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          </div>
          <div className={styles.title1}>Upload Photo</div>
        </label>
      </div>
      <div className={styles.Input}>
        <input type="image" name="camera" className={styles.Input2} id="file" />
        <label htmlFor="file" className={styles.inputLabel}>
          <div>
            <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g clip-path="url(#clip0_554_3308)">
                <path d="M21.7696 4.41667H18.5237L16.9216 2.04667C16.8597 1.95526 16.7758 1.88035 16.6775 1.82859C16.5791 1.77684 16.4693 1.74984 16.3578 1.75H9.14216C9.03066 1.74984 8.92086 1.77684 8.82251 1.82859C8.72416 1.88035 8.64031 1.95526 8.57843 2.04667L6.9752 4.41667H3.73039C3.07255 4.41667 2.44165 4.67421 1.97649 5.13263C1.51133 5.59105 1.25 6.21281 1.25 6.86111V19.3056C1.25 19.9539 1.51133 20.5756 1.97649 21.034C2.44165 21.4925 3.07255 21.75 3.73039 21.75H21.7696C22.4274 21.75 23.0583 21.4925 23.5235 21.034C23.9887 20.5756 24.25 19.9539 24.25 19.3056V6.86111C24.25 6.21281 23.9887 5.59105 23.5235 5.13263C23.0583 4.67421 22.4274 4.41667 21.7696 4.41667ZM22.8971 19.3056C22.8971 19.6002 22.7783 19.8829 22.5668 20.0912C22.3554 20.2996 22.0686 20.4167 21.7696 20.4167H3.73039C3.43137 20.4167 3.1446 20.2996 2.93316 20.0912C2.72173 19.8829 2.60294 19.6002 2.60294 19.3056V6.86111C2.60294 6.56643 2.72173 6.28381 2.93316 6.07544C3.1446 5.86706 3.43137 5.75 3.73039 5.75H7.33824C7.44973 5.75016 7.55954 5.72317 7.65789 5.67141C7.75624 5.61965 7.84008 5.54474 7.90196 5.45333L9.50407 3.08333H15.9948L17.598 5.45333C17.6599 5.54474 17.7438 5.61965 17.8421 5.67141C17.9405 5.72317 18.0503 5.75016 18.1618 5.75H21.7696C22.0686 5.75 22.3554 5.86706 22.5668 6.07544C22.7783 6.28381 22.8971 6.56643 22.8971 6.86111V19.3056ZM12.75 7.97222C11.8134 7.97222 10.8979 8.24592 10.1192 8.7587C9.3405 9.27148 8.73356 10.0003 8.37516 10.853C8.01676 11.7058 7.92298 12.6441 8.10569 13.5493C8.28841 14.4546 8.7394 15.2861 9.40164 15.9387C10.0639 16.5914 10.9076 17.0358 11.8262 17.2159C12.7447 17.396 13.6969 17.3035 14.5621 16.9503C15.4274 16.5971 16.1669 15.999 16.6873 15.2316C17.2076 14.4641 17.4853 13.5619 17.4853 12.6389C17.4853 11.4012 16.9864 10.2142 16.0984 9.33906C15.2103 8.46389 14.0059 7.97222 12.75 7.97222ZM12.75 15.9722C12.081 15.9722 11.4271 15.7767 10.8709 15.4105C10.3146 15.0442 9.88112 14.5236 9.62511 13.9145C9.36911 13.3054 9.30213 12.6352 9.43264 11.9886C9.56315 11.342 9.88528 10.748 10.3583 10.2819C10.8313 9.81569 11.434 9.49822 12.0901 9.36961C12.7462 9.24099 13.4263 9.307 14.0444 9.55929C14.6624 9.81158 15.1907 10.2388 15.5623 10.787C15.934 11.3352 16.1324 11.9796 16.1324 12.6389C16.1324 13.5229 15.776 14.3708 15.1417 14.9959C14.5074 15.621 13.6471 15.9722 12.75 15.9722Z" fill="white" />
              </g>
              <defs>
                <clipPath id="clip0_554_3308">
                  <rect width="24" height="24" fill="white" transform="translate(0.75)" />
                </clipPath>
              </defs>
            </svg>
          </div>
          <div className={styles.title1}>Use camera</div>
        </label>
      </div>
    </div>
  )
}