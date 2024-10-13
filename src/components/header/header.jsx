import styles from './header.module.css'
import { useLocation } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClock } from '@fortawesome/free-regular-svg-icons'

export default function Header() {
    const pathName = useLocation()
    console.log(pathName)
    const date = new Date()
    console.log(date)

    return (
        <div className={styles['header']}>
            <div className={styles['inner']}>
                <div className={styles['title']}>제목</div>
                <div className={styles['description']}>설명</div>
                <div className={styles['time']}>
                    <FontAwesomeIcon icon={faClock} />
                    {`시간`}
                </div>
            </div>
        </div>
    )
}
