import styles from './emd-list-page.module.css'
import house1img from '@/assets/img/house1.png'
import house2img from '@/assets/img/house2.png'
import house3img from '@/assets/img/house3.png'
import dericon from '@/assets/img/der_icon.png'
import { useNavigate, useParams } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { setHeader } from '@/store/header-slice.js'

export default function EmdListPage() {
    const param = useParams()
    console.log(param)
    const houseId = param.houseId
    // console.log(houseId)
    const navigate = useNavigate()
    const dispatch = useDispatch()

    // 페이지에 해당하는 헤더 제목과 설명 설정
    useEffect(() => {
        dispatch(
            setHeader({
                title: 'EMD',
                description:
                    '에너지 관리 장치(Energy Management Device, EMD)는 에너지 사용 및 생산을 효율적으로 관리하기 위해 설계된 장비나 시스템을 의미한다. 이 장치는 에너지를 실시간으로 모니터링하고 제어함으로써 에너지 소비의 최적화를 도모하고, 에너지 비용 절감 및 환경 영향을 최소화하는 데 기여한다.',
            }),
        )
    }, [])

    const navigateDetails = (emd) => {
        navigate(`/house/${houseId}/emd/details`, { state: emd })
    }

    return (
        <main className={styles['emd-list-page']}>
            <div className={styles['container']}>
                <div
                    className={styles['choice']}
                    onClick={() => navigateDetails('inverter')}
                >
                    <img src={dericon} alt="der icon" />
                    <div className={styles['description']}>
                        <p>Inverter</p>
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
                    onClick={() => navigateDetails('smartmeter')}
                >
                    <img src={dericon} alt="der icon" />
                    <div className={styles['description']}>
                        <p>Smartmeter</p>
                    </div>
                </div>
            </div>
        </main>
    )
}
