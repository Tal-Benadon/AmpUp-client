import axios from 'axios'
import React, { useEffect, useState } from 'react'
import DailyButton from '../../components/DailyButton'

export default function Tal() {
    const contactSubjectList = ['Bug Report', 'Account Support', 'Feedback']

    return (
        <>
            <main>
                <DailyButton />

            </main>
        </>
    )
}
