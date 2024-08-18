import React from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { useApi } from '../../api/useApi';
import TextCard from '../../components/TextCard';
import styles from './style.module.scss';


export default function ArchiveSingleCard() {

  const nav = useNavigate()
  const { cards } = useLocation().state || {};
  let { cardId, challengId } = useParams()
  const { data: card, loading, error } = useApi({ method: "GET", path: `/archive/${challengId}/${cardId}`, dep: cardId })
  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  if (!card || !card.media || !card.content) {
    return <div>Error: Invalid card data</div>;
  }


  const handleBack = () => {
    nav('/archive')
  }

  const handleNextCard = () => {
    let nextIndex = currentIndex + 1;
    if (nextIndex >= cards.length) {
      return
    }
    let nextIndexId = cards[nextIndex]._id;
    nav(`/archive/${challengId}/${nextIndexId}`, { state: { cards } })
  }

  const handleLastCard = () => {
    let lastIndex = currentIndex - 1;
    if (lastIndex < 0) {
      return
    }
    let lastIndexId = cards[lastIndex]._id
    nav(`/archive/${challengId}/${lastIndexId}`, { state: { cards } })
  }

  let currentIndex = cards.findIndex(c => c._id === cardId);
  let updatedIndex = currentIndex + 1

  return (
    <>
      <main className={styles.cardContainer}>
        <div className={styles.buttonsContainer}>
          <img className={styles.backIcon} src={'/arrowSide.svg'} onClick={handleBack} />
          <div className={styles.arrowsContainer}>
            <img className={`${styles.left} ${updatedIndex === 1 ? styles.NotClick : ''}`} onClick={handleLastCard} src={'/arrowLeft.svg'} />
            <div>{updatedIndex}/<span className={` ${updatedIndex === cards.length ? styles.fullColor : styles.fullCards}`}>{cards.length}</span></div>
            <img src={'/Open book.svg'} />
            <img className={`${styles.right} ${currentIndex === cards.length - 1 ? styles.NotClick : ''}`} onClick={handleNextCard} src={'/arrowRight.svg'} />
          </div>
        </div>
        <TextCard className={styles.textCard} data={card} title={card.title} isArchive={true}/>
      </main>
    </>
  )
}
