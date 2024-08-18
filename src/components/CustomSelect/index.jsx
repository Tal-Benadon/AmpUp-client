import React, { useState } from 'react'
import styles from './style.module.scss'
export default function CustomSelect({ placeHolder = 'select', selectList, onChange }) {
    const [selectInput, setSelectInput] = useState('')
    const [isOpen, setIsOpen] = useState(false)
    const handleDropdownClick = (e) => {
        setIsOpen(!isOpen)
    }



    const handleOptionClick = (option) => {
        setSelectInput(option)
        setIsOpen(false)
        onChange({ target: { name: 'select', value: option } })
    }
    return (
        <>
            <input type="text" name='select' style={{ display: "none" }} value={selectInput} readOnly />

            <div className={styles.dropdown}>
                <button type='button' className={styles.dropdownBtn} onClick={handleDropdownClick}>

                    {selectInput ? selectInput : placeHolder}

                    <i>{arrowIcon}</i>
                </button>
                <div className={`${styles.dropdownContent} ${isOpen ? styles.open : ''}`}>
                    {selectList.map(option => {
                        return <button key={option} type='button' className={styles.optionStyle} onClick={() => handleOptionClick(option)}>{option}</button>
                    })}
                </div>
            </div>
        </>
    )
}

const arrowIcon = <svg width="16" height="9" viewBox="0 0 16 9" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M8.4516 8.27488L15.0891 1.30862C15.1999 1.19239 15.2617 1.03796 15.2617 0.877374C15.2617 0.716786 15.1999 0.56236 15.0891 0.446125L15.0816 0.438624C15.0279 0.382081 14.9632 0.337056 14.8916 0.306289C14.8199 0.275522 14.7427 0.259656 14.6647 0.259656C14.5867 0.259656 14.5096 0.275522 14.4379 0.306289C14.3662 0.337056 14.3016 0.382081 14.2478 0.438624L7.99785 6.99863L1.75035 0.438626C1.69663 0.382082 1.63197 0.337057 1.56031 0.30629C1.48864 0.275523 1.41147 0.259657 1.33347 0.259657C1.25548 0.259657 1.17831 0.275523 1.10664 0.30629C1.03497 0.337057 0.970315 0.382082 0.916599 0.438626L0.909099 0.446126C0.798292 0.562362 0.736478 0.716787 0.736478 0.877375C0.736478 1.03796 0.798292 1.19239 0.909099 1.30863L7.5466 8.27488C7.60497 8.33614 7.67518 8.38491 7.75296 8.41824C7.83074 8.45157 7.91448 8.46875 7.9991 8.46875C8.08372 8.46875 8.16746 8.45157 8.24524 8.41824C8.32302 8.38491 8.39323 8.33614 8.4516 8.27488Z" fill="white" />
</svg>


