import React from 'react'
import styles from './style.module.scss'
import Button from '../Button'
export default function DailyButton({ deckState }) {

    return (
        <Button children={deckState} />
    )
}
