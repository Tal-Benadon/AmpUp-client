import React from 'react';
import styles from "./style.module.scss";

export default function Profile({ width = '40px', height = "40px", name, role, includeName = true, img = '/Member1.png'}) {
  return (
    <div className={styles.profileContainer}>

      <div className={styles.imgContainer} >
        <img src={img} alt={`${name}'s profile`} className={styles.img} style={{ width: width, height: height }}/>
      </div>
      {includeName ? <div className={styles.textContainer}>
        <h2 className={styles.name}>{name}</h2>
        <p className={styles.role}>{role}</p>
      </div> : ""
      }

    </div>
  );
}
