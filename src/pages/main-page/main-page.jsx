import styles from './main-page.module.css'

import kepcologo from '../../assets/img/kepco-logo.png'
import vppimg from '../../assets/img/vpp.png'
import vpptext from '../../assets/img/vpp-text.png'
import arrow from '../../assets/img/arrow.png'
import house1img from '../../assets/img/house1.png'
import house2img from '../../assets/img/house2.png'
import house3img from '../../assets/img/house3.png'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { setHeader } from '@/store/header-slice.js'

export default function MainPage() {
    const navigate = useNavigate()
    const dispatch = useDispatch()

    // 페이지에 해당하는 헤더 제목과 설명 설정
    useEffect(() => {
        dispatch(
            setHeader({
                title: '메인페이지',
                description:
                    'DES는 3개 가구의 에너지 생산과 소비를 한눈에 파악할 수 있는 에너지 모니터링 플랫폼입니다. 각 가구별로 보유한 에너지 자원들의 정보를 모니터링할 수 있습니다.',
            }),
        )
    }, [])

    const navigateHouse = (houseNum) => {
        navigate(`/house/${houseNum}`)
    }

    return (
        <main className={styles['main-page']}>
            <img
                src={kepcologo}
                alt="kepco img"
                className={styles['kepco-img']}
            />
            <img src={arrow} className={styles.arrow} alt="" />
            <div className={styles['vpp-container']}>
                <Link to="/vpp">
                    <img
                        src={vppimg}
                        alt="vpp img"
                        className={styles['vpp-img']}
                    />
                    <img
                        src={vpptext}
                        alt="vpp img"
                        className={styles['vpp-img']}
                    />
                </Link>
            </div>
            <div className={styles['house-container']}>
                <div className={styles['house']}>
                    <img src={arrow} className={styles.arrow1} alt="" />
                    <div
                        className={styles['house-click']}
                        onClick={() => navigateHouse('1')}
                    >
                        <img
                            src={house1img}
                            className={styles.houseimg}
                            alt="house1 img"
                        />
                        <p>house 1</p>
                    </div>
                </div>
                <div className={styles['house']}>
                    <img src={arrow} className={styles.arrow2} alt="" />
                    <div
                        className={styles['house-click']}
                        onClick={() => navigateHouse('2')}
                    >
                        <img
                            src={house2img}
                            className={styles.houseimg}
                            alt="house2 img"
                        />
                        <p>house 2</p>
                    </div>
                </div>
                <div className={styles['house']}>
                    <img src={arrow} className={styles.arrow3} alt="" />
                    <div
                        className={styles['house-click']}
                        onClick={() => navigateHouse('3')}
                    >
                        <img
                            src={house3img}
                            className={styles.houseimg}
                            alt="house3 img"
                        />
                        <p>house 3</p>
                    </div>
                </div>
            </div>
        </main>
    )
}
