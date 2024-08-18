import React from 'react'
import styles from './style.module.scss'

import { FaWifi } from "react-icons/fa";
import { BsReception4 } from "react-icons/bs";
import { CiBatteryFull } from "react-icons/ci";
import { Outlet } from 'react-router-dom';




export default function HeaderPhone() {

    const date = new Date()
    return (
        <>
            <div className={styles.container}>

                <div className={styles.clock}>
                    <p>{date.getHours()}</p>
                    <p>:</p>
                    <p>{date.getMinutes()}</p>
                </div>

                <div className={styles.black}>
                </div>
                <div className={styles.toolbar}>
                    <FaWifi />
                    <BsReception4 />
                    <CiBatteryFull className={styles.battery} />
                </div>
            </div>
        </>
    )
}
