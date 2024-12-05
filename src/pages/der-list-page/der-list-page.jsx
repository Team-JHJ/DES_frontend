import styles from './der-list-page.module.css'

import house1img from '@/assets/img/house1.png'
import house2img from '@/assets/img/house2.png'
import house3img from '@/assets/img/house3.png'
import { useNavigate, useParams } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { setHeader } from '@/store/header-slice.js'
import { TbSolarPanel2 } from 'react-icons/tb'
import { MdOutlineWindPower } from 'react-icons/md'
import { LuContainer } from 'react-icons/lu'
import { PiBatteryFullBold } from 'react-icons/pi'

export default function DerListPage() {
    const navigate = useNavigate()
    const param = useParams()
    const houseId = param.houseId

    const dispatch = useDispatch()

    // 페이지에 해당하는 헤더 제목과 설명 설정
    useEffect(() => {
        dispatch(
            setHeader({
                title: 'DER',
                description:
                    '분산형 에너지 자원(DER, Distributed Energy Resources)은 전력망에 직접 연결되거나 근접하여 운영되는 소규모 전력 생성, 저장, 소비 장치를 말한다. DER에는 태양광 패널, 풍력 터빈, 에너지 저장 시스템(ESS) 등이 포함되며, 이러한 자원은 전력을 생성하고 소비하는 위치에서 효율적으로 에너지를 활용하도록 설계되었다. DER는 전력망의 탄력성을 강화하고, 에너지 비용 절감, 탄소 배출 감소, 에너지 자립도를 높이는 데 기여한다. 이러한 시스템은 중앙집중형 발전소와는 달리, 분산형으로 운영되며, 지역 커뮤니티의 에너지 요구에 맞춰 최적화될 수 있다.',
            }),
        )
    }, [])

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
