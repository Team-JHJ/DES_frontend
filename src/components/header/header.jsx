import styles from './header.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClock } from '@fortawesome/free-regular-svg-icons'
import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'

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
    const headerTitle = useSelector((state) => state.headerSlice.title)
    const headerDescription = useSelector(
        (state) => state.headerSlice.description,
    )
    const [title, setTitle] = useState(headerTitle)
    const [description, setDescription] = useState(headerDescription)

    // 헤더의 제목과 설명이 변경되면 제목과 설명 재설정
    useEffect(() => {
        setTitle(headerTitle)
        setDescription(headerDescription)
    }, [headerTitle, headerDescription])

    return (
        <div className={styles['header']}>
            <div className={styles['inner']}>
                <div className={styles['title']}>{title}</div>
                <div className={styles['description']}>{description}</div>
                <TimeDisplay />
            </div>
        </div>
    )
}
