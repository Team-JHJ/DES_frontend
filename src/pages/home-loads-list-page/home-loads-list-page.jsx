import styles from './home-loads-list-page.module.css'

import house1img from '@/assets/img/house1.png'
import house2img from '@/assets/img/house2.png'
import house3img from '@/assets/img/house3.png'
import { useNavigate, useParams } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { setHeader } from '@/store/header-slice.js'
import { MdLight, MdOutlineHvac } from 'react-icons/md'
import { CgSmartHomeRefrigerator, CgSmartHomeWashMachine } from 'react-icons/cg'
import { TbChargingPile, TbWashMachine } from 'react-icons/tb'

export default function HomeLoadsListPage() {
    const param = useParams()
    const houseId = param.houseId

    const navigate = useNavigate()
    const dispatch = useDispatch()

    // 페이지에 해당하는 헤더 제목과 설명 설정
    useEffect(() => {
        dispatch(
            setHeader({
                title: 'HomeLoad',
                description:
                    '가정 부하는 가정에서 사용하는 전력 소비량을 의미하며, 이는 조명, 가전 제품, 난방 및 냉방 시스템 등 다양한 전력 사용 장치를 포함한다. 가정 부하는 에너지 효율성을 평가하고, 전력 소비 패턴을 분석하는 데 중요한 역할을 한다. 효율적인 부하 관리는 전기 요금 절감 및 에너지 절약에 기여할 수 있다.',
            }),
        )
    }, [])

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
                    <MdOutlineHvac className={styles['icon']} />
                    <div className={styles['description']}>
                        <p>HVAC</p>
                    </div>
                </div>
                <div
                    className={styles['choice']}
                    onClick={() => navigateDetails('Refrigerator')}
                >
                    <CgSmartHomeRefrigerator className={styles['icon']} />
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
                    <MdLight className={styles['icon']} />
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
                    <TbWashMachine className={styles['icon']} />
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
                    <TbChargingPile className={styles['icon']} />
                    <div className={styles['description']}>
                        <p>EV Charger</p>
                    </div>
                </div>

                <div
                    className={styles['choice']}
                    onClick={() => navigateDetails('Dishwasher')}
                >
                    <CgSmartHomeWashMachine className={styles['icon']} />
                    <div className={styles['description']}>
                        <p>Dishwasher</p>
                    </div>
                </div>
            </div>
        </main>
    )
}
