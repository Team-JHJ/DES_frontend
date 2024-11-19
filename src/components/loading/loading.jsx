import styles from './loading.module.css'

import spinner from '@/assets/img/spinners.svg'

export default function Loading() {
    return (
        <div className={styles['loading-container']}>
            <img
                className={styles['spinner']}
                src={spinner}
                alt="loading spinner"
            />
        </div>
    )
}
