import { useNavigate, useParams } from 'react-router-dom';
import { apiRequest } from '../../api/apiRequest';
import Button from '../../components/Button';
import ChallengeCard from '../../components/ChallengeCard';
import Header from '../../components/Header';
import QuestionsCard from '../../components/QuestionsCard';
import TextCard from '../../components/TextCard';
import VideoCard from '../../components/VideoCard';
import { createBg } from '../../functions/createBg';
import SlotMachine from '../../pages/SlotMachine';
import { useUserStore } from '../../store';
import styles from "./style.module.scss";

export default function Deck() {
  let { cardId, activeChallengeId } = useParams()
  let nav = useNavigate()
  const currentChallenge = useUserStore(state => state.currentChallenge)
  const setDone = useUserStore(state => state.setDone)

  console.log({currentChallenge});
  if (!currentChallenge?.cardsOfToday) return 'loading...'
  

  let title = currentChallenge.challengeName
  let card = currentChallenge.cardsOfToday.find(c => c._id == cardId)
  let typeCard = card?.cardType
  let cardNumber = card?.cardOrder
  // 'question' | 'task' | 'media' | 'study'  | 'support' | 'share' | 'lottery';

  const sendAnswer = (answer) => {
    console.log(answer);
    apiRequest({ method: 'post', path: `activeChallenge/${activeChallengeId}/card/${cardId}`, body: { value: answer } })
      .then(data => {
        setDone(cardId)
        if (cardNumber == currentChallenge.cardsOfToday.length) {
          console.log('🐮🐮');
          return nav(`/challenge/${activeChallengeId}/reward`)
        }
        let nextCard = currentChallenge.cardsOfToday.find(c => c.cardOrder == (Number(cardNumber) + 1));
        // if (nextCard.typeCard == "lottery") nav(`/challenge/${activeChallengeId}`)
        // TODO - בקשה לשרת אם מגיע לאיש לוטו היום - אם לא, הוא עובר לבית. אם כן כלום.
        nav(`/challenge/${activeChallengeId}/${nextCard?._id}`)
      })
  }

  const renderCard = () => {
    switch (typeCard) {
      case 'task':
        return <ChallengeCard data={card} title={title} func={sendAnswer} />;
      case 'question':
        return <QuestionsCard data={card} title={title} func={sendAnswer} />;
      case 'media':
        return <VideoCard data={card} title={title} func={sendAnswer} />;
      case 'study':
        return <TextCard data={card} title={title} func={sendAnswer} />;
      case 'support':
        return <Button onClick={()=> sendAnswer('work in progress')}>Work in progress</Button>;
      case 'lottery':
        return <SlotMachine func={sendAnswer} />;
      default:
        return <Button onClick={()=> sendAnswer('work in progress')}>Work in progress</Button>;

    }
  };

  return (
    <>
      <main className={styles.Deck} style={createBg('/back.jpg')}>
        <div className={styles.top}>
          <div className={styles.logoAndProfile}>
            <Header progress={cardNumber} />
          </div>
        </div>
        <div className={styles.middle} />

        <div className={styles.bottom}>
          {renderCard(cardNumber)}
        </div>
      </main>
    </>
  );
}
