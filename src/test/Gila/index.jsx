import styles from './style.module.scss'
import IconProgressBar from '../../components/IconProgressBar'
import ProgressBar from '../../components/ProgressBar'
import Button from '../../components/Button'
import IconFooter from '../../components/IconFooter'
import Input from '../../components/Input'
import Logo from '../../components/Logo'
import Header from '../../components/Header'
import Title from '../../components/Title'
import LoginSocialPage from '../../pages/WelcomeScreen'
import Select from '../../components/Select'
import SelectItem from '../../components/Select'
import TeamScreen from '../../pages/TeamScreen'
import Members from '../../components/Members'
import Dots from '../../components/Dots'
import ChallengeCard from '../../components/ChallengeCard'
import TextCard from '../../components/TextCard'
import IconCard from '../../components/IconCard'
import VideoCard from '../../components/VideoCard'
import QuestionsCard from '../../components/QuestionsCard'
import SupportCard from '../../components/SupportCard'
import Home from '../../pages/Home'
import ShareCard from '../../components/ShareCard'
import Reward from '../../pages/Reward'

export default function Gila() {
  const arrSelect = ["aaa", "bbb", "ccc", "ddd", "eee", "fff", "ggg", "hhh"]
  // const arrDate = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "30"]
  //   const arrDone = ["2", "4", "5", "6", "10", "11", "12", "13", "14", "18", "19"]
  //   const today = "10"
  return (
    <div className={styles.gila}>
      {/* <div className={styles.Header}>
        <Header progress={3}/>
      </div> */}
      {/* <Logo />
      <Title content={"Learn in a New \n and Easier Way"} />
      <div className={styles.input}>
        <Input />
      </div>
      <div className={styles.IconFooter}>
        <IconFooter />
      </div>
    <Select arrSelect={arrSelect}/>
      <Dots />
      <Members members={15}/> */}
      {/* arrDate={arrDate} arrDone={arrDone} today={today}  */}
      {/* <TeamScreen/> */}
      {/* <LoginSocialPage/> */}
      {/* <div className={styles.ChallengeCard}> */}
      {/* </div> */}
      {/* <ChallengeCard/> */}
      {/* <TextCard/> */}
      <QuestionsCard/>
      {/* <SupportCard/> */}
      {/* <ShareCard/> */}
      {/* <Reward/> */}
    </div>
  )
}
