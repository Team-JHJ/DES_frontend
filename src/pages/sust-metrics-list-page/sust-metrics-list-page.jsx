import styles from './sust-metrics-list-page.module.css'

import house1img from '@/assets/img/house1.png'
import house2img from '@/assets/img/house2.png'
import house3img from '@/assets/img/house3.png'
import { useNavigate, useParams } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { setHeader } from '@/store/header-slice.js'
import { LuContainer } from 'react-icons/lu'
import { MdOutlineWindPower } from 'react-icons/md'
import { PiBatteryFullBold } from 'react-icons/pi'
import { TbSolarPanel2 } from 'react-icons/tb'

export default function SustMetricsListPage() {
    const navigate = useNavigate()
    const param = useParams()
    const houseId = param.houseId
    const dispatch = useDispatch()

    // 페이지에 해당하는 헤더 제목과 설명 설정
    useEffect(() => {
        dispatch(
            setHeader({
                title: 'Metrics',
                description:
                    '지속 가능성 지표(Sustainability Metrics)는 환경, 사회 및 경제적 지속 가능성을 평가하고 측정하기 위해 사용되는 다양한 지표와 수치들을 의미한다. 이러한 지표는 기업이나 조직이 지속 가능한 발전 목표를 달성하고 있는지를 확인하는 데 중요한 역할을 한다. ',
            }),
        )
    }, [])

    const navigateDetails = (sust) => {
        navigate(`/house/${houseId}/sust-metrics/details`, { state: sust })
    }

    return (
        <main className={styles['sust-metrics-list-page']}>
            <div className={styles['container']}>
                <div
                    className={styles['choice']}
                    onClick={() => navigateDetails('Solar')}
                >
                    <TbSolarPanel2 className={styles['icon']} />
                    <div className={styles['description']}>
                        <p>Solar</p>
                    </div>
                </div>
                <div className={styles['blank']}></div>
                <div
                    className={styles['choice']}
                    onClick={() => navigateDetails('EV Battery')}
                >
                    <PiBatteryFullBold className={styles['icon']} />
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
                    <MdOutlineWindPower className={styles['icon']} />
                    <div className={styles['description']}>
                        <p>Wind</p>
                    </div>
                </div>
                <div className={styles['blank']}></div>
                <div
                    className={styles['choice']}
                    onClick={() => navigateDetails('ESS')}
                >
                    <LuContainer className={styles['icon']} />
                    <div className={styles['description']}>
                        <p>ESS</p>
                    </div>
                </div>
            </div>
        </main>
    )
}
