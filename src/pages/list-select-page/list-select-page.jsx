import styles from './list-select-page.module.css'

import house1img from '@/assets/img/house1.png'
import house2img from '@/assets/img/house2.png'
import house3img from '@/assets/img/house3.png'
import dericon from '@/assets/img/der_icon.png'
import { useNavigate, useParams } from 'react-router-dom'
import MainPage from '@/pages/main-page/main-page.jsx'
import { useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { setHeader } from '@/store/header-slice.js'

export default function ListSelectPage() {
    const navigate = useNavigate()
    const param = useParams()
    const dispatch = useDispatch()
    // console.log(param)
    const houseId = param.houseId
    console.log(houseId)
    // const parameter = useLocation()
    // console.log(parameter)

    // 페이지에 해당하는 헤더 제목과 설명 설정
    useEffect(() => {
        dispatch(
            setHeader({
                title: '카테고리 선택',
                description:
                    '원하는 카테고리를 선택하여 해당 집별 상세 정보를 확인할 수 있습니다.',
            }),
        )
    }, [])

    const validHouseIds = ['1', '2', '3'] // 유효한 houseId 목록
    if (!validHouseIds.includes(houseId)) {
        return <MainPage />
    }

    return (
        <main className={styles['list-select-page']}>
            <div className={styles['container']}>
                <div
                    className={styles['choice']}
                    onClick={() => navigate(`/house/${houseId}/der`)}
                >
                    <img src={dericon} alt="der icon" />
                    <div className={styles['description']}>
                        <p>Distribution Energy Resource</p>
                    </div>
                </div>
                <div className={styles['blank']}></div>
                <div
                    className={styles['choice']}
                    onClick={() => navigate(`/house/${houseId}/home-loads`)}
                >
                    <img src={dericon} alt="der icon" />
                    <div className={styles['description']}>
                        <p>Home Loads</p>
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
                    onClick={() => navigate(`/house/${houseId}/emd`)}
                >
                    <img src={dericon} alt="der icon" />
                    <div className={styles['description']}>
                        <p>Energy Management Device</p>
                    </div>
                </div>
                <div className={styles['blank']}></div>
                <div
                    className={styles['choice']}
                    onClick={() => navigate(`/house/${houseId}/sust-metrics`)}
                >
                    <img src={dericon} alt="der icon" />
                    <div className={styles['description']}>
                        <p>Sustainability Metrics</p>
                    </div>
                </div>
            </div>
        </main>
    )
}
