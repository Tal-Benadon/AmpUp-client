// This is a Button component. 
// It takes three props:
// 1. 'classname' to add custom styles,
// 2. 'children' for button content,
// 3. 'onClick' for click actions.

import React from 'react'
import styles from "./style.module.scss"

export default function Element({ classname,children }) {
    return (
        <div className={`${styles.element} ${classname || ""}`}>
            {children}
        </div>
    )
}
