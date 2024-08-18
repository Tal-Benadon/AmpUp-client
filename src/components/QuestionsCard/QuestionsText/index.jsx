import { useState } from "react";
import Button from "../../Button";
import Textarea from "../../Textarea";
import styles from "./style.module.scss";


export default function QuestionsText({ func }) {

  const [answerText, setAnswerText] = useState('')

  const handleTypeing = (e) => {
    const isText = e.target.value
    setAnswerText(isText)
  }

  return (
    <>
      <Textarea placeholder="type here..." onChange={handleTypeing} style={{ color: 'inherit' }} />
      <Button classname={answerText ? '' : styles.noText} onClick={() => func(answerText)}>Send</Button >
    </>
  )
}
