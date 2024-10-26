import styles from './header.module.css'
import { useLocation } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClock } from '@fortawesome/free-regular-svg-icons'
import { useEffect, useState } from 'react'

const TimeDisplay = () => {
    const [date, setDate] = useState(new Date())

    useEffect(() => {
        const interval = setInterval(() => {
            setDate(new Date())
        }, 1000)

        return () => clearInterval(interval)
    }, [])

    const year = date.getFullYear()
    const month = date.getMonth() + 1
    const day = date.getDate()
    const hour = date.getHours()
    const minute = String(date.getMinutes()).padStart(2, '0')
    const second = String(date.getSeconds()).padStart(2, '0')

    return (
        <div className={styles['time']}>
            <FontAwesomeIcon icon={faClock} />
            {` ${year}년 ${month}월 ${day}일 ${hour}:${minute}:${second}`}
        </div>
    )
}

export default function Header() {
    console.log('헤더')
    return (
        <div className={styles['header']}>
            <div className={styles['inner']}>
                <div className={styles['title']}>제목</div>
                <div className={styles['description']}>설명</div>
                <TimeDisplay />
            </div>
        </div>
    )
}
