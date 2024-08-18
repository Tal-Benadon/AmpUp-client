// This is a Button component. 
// It takes three props:
// 1. 'classname' to add custom styles,
// 2. 'children' for button content,
// 3. 'onClick' for click actions.

import React from 'react';
import styles from "./style.module.scss";

export default function Button({ classname, children, onClick, style, disabled, type ='button' }) {
  return (
    <button disabled={disabled} type={type} onClick={onClick} className={`${styles.button} ${classname || ""}`} style={style}>
      {/* <span className={styles.borderAnimation}></span> */}
      {children}
    </button>
  );
}
