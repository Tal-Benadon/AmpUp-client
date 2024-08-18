import React from "react";
import styles from "./style.module.scss";


export default function Eliraz2({ challenge, type, title, content, time, isRead, sender, senderImg }) {
    const handlSendThanks = () => {
        console.log("לשלוח בסוקט משהו שעדיין לא יודעים מה");
    };
    const handleDelete = () => {
        console.log("למחוק דרך הסרבר");
    };
    return (
        <div className={styles.storeItem}>
            {/* <img className={styles.itemImg} src={props.img} alt={props.name} /> */}
            <div className={styles.StoreItemInfo}>
                <img src={senderImg} alt={sender} />

                <div className={styles.infoUp}>
                    <div className={styles.title}>{sender}</div>
                    <div>
                        {title}

                    </div>

                    <div className={styles.infoDown}>
                        <div className={styles.infoFriend}>
                            <div>{content}</div>
                            <div className={styles.infoTime}>
                                <div>
                                    {new Date(time).toLocaleTimeString().slice(0, 5)}
                                </div>
                                <div className={styles.thanks}>
                                    {!isRead && type == "support" &&
                                        <button onClick={handlSendThanks}>send thanks</button>}
                                </div>
                            </div>
                        </div>

                    </div>

                </div>

            </div>
            <button onClick={handleDelete}>x</button>
        </div>
    );
}
