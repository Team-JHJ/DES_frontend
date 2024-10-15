import styles from './header.module.css'
import { useLocation } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClock } from '@fortawesome/free-regular-svg-icons'
import { useEffect, useRef, useState } from 'react'

export default function Header() {
    const pathName = useLocation()
    const path = useRef(useLocation())
    // console.log(path)
    // console.log(pathName)

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
        <div className={styles['header']}>
            <div className={styles['inner']}>
                <div className={styles['title']}>제목</div>
                <div className={styles['description']}>설명</div>
                <div className={styles['time']}>
                    <FontAwesomeIcon icon={faClock} />
                    {` ${year}년 ${month}월 ${day}일 ${hour}:${minute}:${second}`}
                </div>
            </div>
        </div>
    )
}
