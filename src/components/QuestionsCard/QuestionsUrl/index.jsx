import { useState } from "react";
import Button from "../../Button";
import Input from "../../Input";
import Textarea from "../../Textarea";
import styles from "./style.module.scss";
import { Value } from "sass";


export default function QuestionsUrl({ func }) {
  const [url, setUrl] = useState('')

  const handleOnChange = (e) => {
    const { value } = e.target
    setUrl(value)
  }

  const handleOnSubmit = (e) => {
    e.preventDefault()
    if (url) {
      func(url)
    }
  }

  console.log(url);
  return (
    <form className={styles.inputAndButton} onSubmit={handleOnSubmit}>
      <div>
        <Input type='text' name='url' placeholder='paste URL' borderRadius="15px" onChange={handleOnChange} />
      </div>
      <Button type={'submit'} classname={`${url ? styles.button : styles.inactiveBtn}`}>
        Send
      </Button>
    </form>

  )
}
