import React, { useEffect, useState } from 'react'
import styles from './style.module.scss';
import { useUserStore } from '../../store';
import { apiRequest } from '../../api/apiRequest';
import { socket } from '../../socket';
import { useNavigate } from "react-router-dom";



export default function Orna2() {
    const nav = useNavigate()
    const user = useUserStore(state => state.user);
    console.log(user);
    const [shkoyechAbout, setShkoyechAbout] = useState("Has done 5 days streak");
    const [shkoyech, setShkoyech] = useState("");

    const [sendTo, setSendTo] = useState({
        _id:"6656df1b8437151db0cce4e6",
        fullName: "eliraz",
        img: "https://chanystern.com/wp-content/uploads/2015/11/C__S6713-1.jpg",
    });
    useEffect(() => {
        apiRequest({
            method: 'GET',
            path: 'activeChallenge/cardLove/6656df1b8437151db0cce584',
        }).then(data => {
            setSendTo(data.user)
            setShkoyechAbout(data.res)
        })
    },[])

    function handleSendSupport(message) {
        console.log(message)
        socket.connect()
        socket.emit('cardLove', {
            challengeId: "6656df1b8437151db0cce584",
            userId: sendTo._id,
            content: { title: "Message from user", message: message },
        })
        //update DB

    }

    return (
        <>
            <div> Send support</div>
            <div className={styles.container}>
                <div className={styles.card}>
                    <img src={sendTo.img} alt={sendTo.fullName} />
                    <div className={styles.name}>{sendTo.fullName}</div>
                    <div className={styles.about}>{shkoyechAbout}</div>
                </div>
                <div className={styles.buttons}>
                    <button onClick={() => handleSendSupport("👍 Amazing!")}>👍 Amazing!</button>
                    <button onClick={() => handleSendSupport("💪 Dont give up!")}>💪 Dont give up!</button>
                    <button onClick={() => handleSendSupport("🤘 Rock on!")}>🤘 Rock on!</button>
                    <form onSubmit={(e) => {
                        e.preventDefault();
                        handleSendSupport(shkoyech);
                    }}>
                        <input
                            onChange={(e) => setShkoyech(e.target.value)}
                            type="text"
                            placeholder="Write something..."
                        />
                        <button type="submit" hidden></button>
                    </form>

                </div>
                <div onClick={()=>nav("/")} className={styles.skip}>Skip for today</div>
            </div>
        </>
    )
}
