import React, { useState } from 'react'
import styles from './style.module.scss'
import TextCard from '../../components/TextCard'
import Logo from '../../components/Logo'
import Input from '../../components/Input'
import Select from '../../components/Select'
import Button from '../../components/Button'
import { apiRequest } from '../../api/apiRequest'
import CustomSelect from '../../components/CustomSelect'
export default function ContactUs() {
    const [contactForm, setContactForm] = useState({ select: '', name: '', email: '', message: '' })

    const handleOnChange = (e) => {
        const { name, value } = e.target
        console.log(name, value);
        setContactForm(prev => ({ ...prev, [name]: value }))
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const userContactForm = { ...contactForm }
        // apiRequest({ method: "POST", path: "/feedback", body: userContactForm })
        console.log(userContactForm);
    }

    const contactSubjectList = ['Bug Report', 'Account Support', 'Feedback']
    return (
        <main className={styles.main}>
            <header className={styles.header}>
                <Logo />
            </header>

            <form className={styles.contactForm} onSubmit={handleSubmit}>
                <p className={styles.contactTitle}>
                    Please leave your details here and we'll be in touch shortly
                </p>
                <div className={styles.excludeButton}>
                    <CustomSelect selectList={contactSubjectList} onChange={handleOnChange} />
                    <Input type={'text'} name={'name'} placeholder={'name'} onChange={handleOnChange} />
                    <Input type={'text'} name={'email'} placeholder={'email'} onChange={handleOnChange} />
                    <textarea name="message" placeholder='Message' onChange={handleOnChange}/>
                </div>
                <Button type={'submit'} children={'Send'} />
            </form>

        </main>
    )
}
