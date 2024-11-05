import styles from './der-list-page.module.css'

import house1img from '@/assets/img/house1.png'
import house2img from '@/assets/img/house2.png'
import house3img from '@/assets/img/house3.png'
import dericon from '@/assets/img/der_icon.png'
import { useNavigate, useParams } from 'react-router-dom'

export default function DerListPage() {
    const navigate = useNavigate()
    const param = useParams()
    console.log(param)
    const houseId = param.houseId
    // console.log(houseId)

    const navigateDetails = (der) => {
        navigate(`/house/${houseId}/der/details`, { state: der })
    }

    return (
        <main className={styles['der-list-page']}>
            <div className={styles['container']}>
                <div
                    className={styles['choice']}
                    onClick={() => navigateDetails('Solar')}
                >
                    <img src={dericon} alt="der icon" />
                    <div className={styles['description']}>
                        <p>Solar</p>
                    </div>
                </div>
                <div className={styles['blank']}></div>
                <div
                    className={styles['choice']}
                    onClick={() => navigateDetails('EV Battery')}
                >
                    <img src={dericon} alt="der icon" />
                    <div className={styles['description']}>
                        <p>EV Battery</p>
                    </div>
                </div>
            </div>
            <div className={styles['container']}>
                <img
                    src={
                        houseId === '1'
                            ? house1img
                            : houseId === '2'
                              ? house2img
                              : houseId === '3'
                                ? house3img
                                : house1img // 기본 이미지
                    }
                    className={styles.houseimg}
                    alt="house1 img"
                />
            </div>
            <div className={styles['container']}>
                <div
                    className={styles['choice']}
                    onClick={() => navigateDetails('Wind')}
                >
                    <img src={dericon} alt="der icon" />
                    <div className={styles['description']}>
                        <p>Wind</p>
                    </div>
                </div>
                <div className={styles['blank']}></div>
                <div
                    className={styles['choice']}
                    onClick={() => navigateDetails('ESS')}
                >
                    <img src={dericon} alt="der icon" />
                    <div className={styles['description']}>
                        <p>ESS</p>
                    </div>
                </div>
            </div>
        </main>
    )
}
