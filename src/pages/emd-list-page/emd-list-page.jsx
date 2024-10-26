import styles from './emd-list-page.module.css'
import house1img from '@/assets/img/house1.png'
import house2img from '@/assets/img/house2.png'
import house3img from '@/assets/img/house3.png'
import dericon from '@/assets/img/der_icon.png'
import { useNavigate, useParams } from 'react-router-dom'

export default function EmdListPage() {
    const param = useParams()
    console.log(param)
    const houseId = param.houseId
    // console.log(houseId)
    const navigate = useNavigate()

    const navigateDetails = (emd) => {
        navigate(`/house/${houseId}/emd/details`, { state: emd })
    }

    return (
        <main className={styles['emd-list-page']}>
            <div className={styles['container']}>
                <div
                    className={styles['choice']}
                    onClick={() => navigateDetails('emd')}
                >
                    <img src={dericon} alt="der icon" />
                    <div className={styles['description']}>
                        <p>Distribution Energy Resource</p>
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
                    onClick={() => navigateDetails('emd')}
                >
                    <img src={dericon} alt="der icon" />
                    <div className={styles['description']}>
                        <p>Energy Management Device</p>
                    </div>
                </div>
            </div>
        </main>
    )
}
