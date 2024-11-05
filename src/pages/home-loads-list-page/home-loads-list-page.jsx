import styles from './home-loads-list-page.module.css'

import house1img from '@/assets/img/house1.png'
import house2img from '@/assets/img/house2.png'
import house3img from '@/assets/img/house3.png'
import dericon from '@/assets/img/der_icon.png'
import { useNavigate, useParams } from 'react-router-dom'

export default function HomeLoadsListPage() {
    const param = useParams()
    console.log(param)
    const houseId = param.houseId
    // console.log(houseId)

    const navigate = useNavigate()

    const navigateDetails = (homeloads) => {
        navigate(`/house/${houseId}/home-loads/details`, { state: homeloads })
    }

    return (
        <main className={styles['home-loads-list-page']}>
            <div className={styles['container']}>
                <div
                    className={styles['choice']}
                    onClick={() => navigateDetails('HVAC')}
                >
                    <img src={dericon} alt="der icon" />
                    <div className={styles['description']}>
                        <p>HVAC</p>
                    </div>
                </div>
                <div
                    className={styles['choice']}
                    onClick={() => navigateDetails('Refrigerator')}
                >
                    <img src={dericon} alt="der icon" />
                    <div className={styles['description']}>
                        <p>Refrigerator</p>
                    </div>
                </div>
            </div>
            <div className={styles['container']}>
                <div
                    className={styles['choice']}
                    onClick={() => navigateDetails('Lighting')}
                >
                    <img src={dericon} alt="der icon" />
                    <div className={styles['description']}>
                        <p>Lighting</p>
                    </div>
                </div>
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
                <div
                    className={styles['choice']}
                    onClick={() => navigateDetails('Washing Machine')}
                >
                    <img src={dericon} alt="der icon" />
                    <div className={styles['description']}>
                        <p>Washing Machine</p>
                    </div>
                </div>
            </div>
            <div className={styles['container']}>
                <div
                    className={styles['choice']}
                    onClick={() => navigateDetails('EV Charger')}
                >
                    <img src={dericon} alt="der icon" />
                    <div className={styles['description']}>
                        <p>EV Charger</p>
                    </div>
                </div>

                <div
                    className={styles['choice']}
                    onClick={() => navigateDetails('Dishwasher')}
                >
                    <img src={dericon} alt="der icon" />
                    <div className={styles['description']}>
                        <p>Dishwasher</p>
                    </div>
                </div>
            </div>
        </main>
    )
}
