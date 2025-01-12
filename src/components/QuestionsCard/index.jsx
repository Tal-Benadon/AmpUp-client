import { useState } from 'react';
import styles from "./style.module.scss";
import ChallengeName from '../ChallengeName';
import Button from '../Button';
import IconCard from '../IconCard';
import { useNavigate, useParams } from 'react-router-dom';
import { useApi } from '../../api/useApi';
import { apiRequest } from '../../api/apiRequest';
import Textarea from '../Textarea';
import QuestionsText from './QuestionsText';
import QuestionsUrl from './QuestionsUrl';
import QuestionsFile from './QuestionsFile';
import QuestionsImgFile from './QuestionsImgFile';
import QuestionsOption from './QuestionsOption';

export default function QuestionsCard({ data, title, func }) {

  return (
    <div className={styles.QuestionsCard}>
      <ChallengeName text={title} />
      <div className={styles.questions}>
        <IconCard>
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M8 0C3.57841 0 0 3.578 0 8C0 12.4215 3.578 16 8 16C12.4216 16 16 12.422 16 8C16 3.57841 12.422 0 8 0ZM7.76328 11.7443C7.31047 11.7443 6.96297 11.3652 6.96297 10.9335C6.96297 10.4912 7.321 10.1227 7.76328 10.1227C8.20559 10.1227 8.57409 10.4912 8.57409 10.9335C8.57409 11.3652 8.21606 11.7443 7.76328 11.7443ZM8.96372 7.648C8.38456 8.10081 8.374 8.41672 8.374 8.96428C8.374 9.16441 8.26869 9.39606 7.75272 9.39606C7.32094 9.39606 7.17356 9.23809 7.17356 8.69053C7.17356 7.78491 7.57372 7.35316 7.87909 7.08991C8.22659 6.79503 8.81631 6.46863 8.81631 5.9C8.81631 5.41556 8.39509 5.18391 7.86856 5.18391C6.79447 5.18391 7.02616 5.99478 6.45747 5.99478C6.17316 5.99478 5.82566 5.80519 5.82566 5.39453C5.82566 4.82591 6.47853 3.98344 7.90016 3.98344C9.24803 3.98344 10.1431 4.73112 10.1431 5.72097C10.1431 6.71081 9.24803 7.42687 8.96372 7.648Z" fill="black" />
          </svg>
        </IconCard>
        {data.content && data.content}
      </div>

      {/* enum: ['multipleChoice', 'url', 'freeText', 'upload', 'multipleChoice+freeText'] */}

      {/* <QuestionsOption data={data} func={func} /> */}
      <QuestionsText func={func} />
      {/* <QuestionsUrl func={func} /> */}
      {/* <QuestionsFile /> */}
      {/* <QuestionsImgFile /> */}
      {/* <Button onClick={() => func('')}>זה רק לבינתיים</Button> */}

    </div>
  );
}