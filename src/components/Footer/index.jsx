import React from 'react'
import { NavLink } from 'react-router-dom'
import styles from "./style.module.scss"
import IconFooter from '../IconFooter';

export default function Footer() {

    const pathAndIcons = [
        {
            path: "/profile",
            icon: "user"
        },
        {
            path: "/archive",
            icon: "folder"
        },
        {
            path: "/challenge",
            icon: "home" 
        },
        {
            path: "/store",
            icon: "store"
        },
        {
            path: "/goal",
            icon: "goal"
        }
    ];

    return (
        <div className={styles.footer}>
            {pathAndIcons.map((item, index) => (
                <NavLink
                    key={index}
                    to={item.path}
                    className={({ isActive }) => isActive ? styles.active : ''}
                >
                    <IconFooter iconName={item.icon} />
                </NavLink>
            ))}
        </div>
    );
}
