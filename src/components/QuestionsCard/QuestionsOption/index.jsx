import { useState } from "react";
import Button from "../../Button";
import Textarea from "../../Textarea";
import styles from "./style.module.scss";


export default function QuestionsOption({ data, func }) {
  const [selectedAnswer, setselectedAnswer] = useState(null)
  return (
    <>
      <div className={styles.answers}>
        {data.answers && data.answers.map((ans, index) => (
          <Button
            key={index}
            classname={`${styles.answer} ${selectedAnswer === index ? styles.selected : ''}`}
            onClick={() => setselectedAnswer(index)}>
            {ans}
          </Button>
        ))}
      </div>
      <Button onClick={() => func(selectedAnswer)} classname={`${selectedAnswer === 0 || selectedAnswer ? '' : styles.inactiveBtn}`} >

        Send

      </Button>
    </>
  )
}
