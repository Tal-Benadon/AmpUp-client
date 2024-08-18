import { useEffect, useState } from 'react';
import styles from './style.module.scss';
import { socket } from '../../socket';
import Popup from '../../components/Popup';
import { useUserStore } from '../../store';



export default function Orna() {
  const user = useUserStore(state => state.user);
  const currentChallenge = useUserStore(state => state.currentChallenge);
  console.log({ currentChallenge });

  const [message, setMessage] = useState('עדיין לא הגיע כלום');
  const [coachMessage, setCoachMessage] = useState(null);
  const [popups, setPopups] = useState([]);
  const [pendingPopups, setPendingPopups] = useState([]);

  const [challengeId, setChallengeId] = useState('6656df1b8437151db0cce584');
  const [userId, setUserId] = useState(Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15));

  useEffect(() => {
    if (user._id == null)
      return;

    console.log(user);


    const handleReceivedMessage = (data) => {
      console.log({data})
      const newPopup = {
        id: Date.now(),
        title: data.type === "love" ? 'Love Message' : 'Coach Message',
        content: data.content.message
      };

      if (data.type === "love" && data.userId === userId) {
        console.log(data.userId)
        setMessage(data.content.message);
      } else if (data.type === "coach") {
        setCoachMessage(data.content.message);
      }

      setPendingPopups((prevPendingPopups) => [...prevPendingPopups, newPopup]);
    };

    socket.connect()


    socket.on('connect', () => {
      console.log('connect')

    });
    
    socket.emit('challenge:join-room', user._id, challengeId);


    socket.on('notification', handleReceivedMessage);

    return () => {
      socket.off('notification', handleReceivedMessage);
    };
  }, [user._id]);

  useEffect(() => {
    if (pendingPopups.length > 0) {
      const showPopup = () => {
        setPopups((prevPopups) => [...prevPopups, pendingPopups[0]]);
        setPendingPopups((prevPendingPopups) => prevPendingPopups.slice(1));
      };

      const timeoutId = setTimeout(showPopup, 500);

      return () => clearTimeout(timeoutId);
    }
  }, [pendingPopups]);

  const handleConnect = () => {

  };

  const handleSend = () => {
    socket.emit('cardLove', { challengeId, userId, content: { title: "Message from user", message: "I send you love" } });
  };

  const handleCoachSend = () => {
    socket.emit('coachMessage', { challengeId, content: { title: "Message from coach", message: "Pay me a lot of money" } });
  };

  const handleClosePopup = (id) => {
    setPopups((prevPopups) =>
      prevPopups.map((popup) =>
        popup.id === id ? { ...popup, isClosing: true } : popup
      )
    );
    setPendingPopups((prevPendingPopups) =>
      prevPendingPopups.filter((popup) => popup.id !== id)
    );
    delayAndReturn(id).then((id) =>
      setPopups((prevPopups) =>
        prevPopups.filter((popup) => popup.id !== id)
      )
    );
  };

  async function delayAndReturn(id) {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(id);
      }, 600);
    });
  }

  const changeUser = () => {
    setUserId('6656df1b8437151db0cce4e6');
  };

  return (
    <div className={styles.orna}>
      {/* <button onClick={handleConnect}>Connect to room</button> */}
      {/* <button onClick={handleSend}>Send love</button>
      <button onClick={handleCoachSend}>Send coach message</button> */}
      {/* <button onClick={changeUser}>Different user</button> */}
      {popups.map(popup => (
        <div className={`${styles.popup} ${popup.isClosing ? styles.slideOutToRight : ""}`} key={popup.id}>
          <Popup
            key={popup.id}
            title={popup.title}
            content={popup.content}
            type="message"
            handleClosePopup={() => handleClosePopup(popup.id)}
            footer={
              <>
                <button onClick={handleSend}>Send thanks</button>
                <button onClick={() => handleClosePopup(popup.id)}>Mark as read</button>
              </>
            }
          />
        </div>
      ))}
    </div>
  );
}
