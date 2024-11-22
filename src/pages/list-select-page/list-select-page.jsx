import styles from './list-select-page.module.css'

import house1img from '@/assets/img/house1.png'
import house2img from '@/assets/img/house2.png'
import house3img from '@/assets/img/house3.png'
import { useNavigate, useParams } from 'react-router-dom'
import MainPage from '@/pages/main-page/main-page.jsx'
import { useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { setHeader } from '@/store/header-slice.js'
import { FaHouseDamage } from 'react-icons/fa'
import { FaChartColumn } from 'react-icons/fa6'
import { MdOutlineFeaturedPlayList } from 'react-icons/md'
import { SlEnergy } from 'react-icons/sl'

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
                    '원하는 카테고리를 선택하여 각 가구별로 보유한 에너지 자원들의 정보를 확인할 수 있습니다.',
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
                    <MdOutlineFeaturedPlayList className={styles['icon']} />
                    <div className={styles['description']}>
                        <p>Distribution Energy Resource</p>
                    </div>
                </div>
                <div className={styles['blank']}></div>
                <div
                    className={styles['choice']}
                    onClick={() => navigate(`/house/${houseId}/home-loads`)}
                >
                    <FaHouseDamage className={styles['icon']} />
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
                    <SlEnergy className={styles['icon']} />
                    <div className={styles['description']}>
                        <p>Energy Management Device</p>
                    </div>
                </div>
                <div className={styles['blank']}></div>
                <div
                    className={styles['choice']}
                    onClick={() => navigate(`/house/${houseId}/sust-metrics`)}
                >
                    <FaChartColumn className={styles['icon']} />
                    <div className={styles['description']}>
                        <p>Sustainability Metrics</p>
                    </div>
                </div>
            </div>
        </main>
    )
}
