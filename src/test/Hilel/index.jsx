import styles from './style.module.scss'
import Textarea from '../../components/Textarea'
import QuestionsText from '../../components/QuestionsCard/QuestionsText'
import Deck from '../../pages/Deck'

export default function Hilel() {
  return (
    <div>
      <Deck />
      <QuestionsText />
    </div>
  )
}
