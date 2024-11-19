import styles from './introduction-page.module.css'

import { Link } from 'react-router-dom'

import erd from '@/assets/img/erd.png'
import reactlogo from '@/assets/img/react-logo.png'
import sblogo from '@/assets/img/spring-boot-logo.png'
import mysqllogo from '@/assets/img/my-sql-logo.png'
import rems1 from '@/assets/img/rems1.png'
import rems2 from '@/assets/img/rems2.png'
import rems3 from '@/assets/img/rems3.png'
import vortex1 from '@/assets/img/VORTEX1.png'
import lasee1 from '@/assets/img/lasee1.png'
import lasee2 from '@/assets/img/lasee2.png'
import lasee3 from '@/assets/img/lasee3.png'
import lasee4 from '@/assets/img/lasee4.png'
import { useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { setHeader } from '@/store/header-slice.js'

export default function IntroductionPage() {
    const dispatch = useDispatch()

    // 페이지에 해당하는 헤더 제목과 설명 설정
    useEffect(() => {
        dispatch(
            setHeader({
                title: '분산에너지 소개',
                description: '분산에너지를 소개합니다.',
            }),
        )
    }, [])

    return (
        <div className={styles['introduction-page']}>
            {/*<div className={styles['container']}>*/}
            {/*    <h1>분산에너지</h1>*/}
            {/*    <p>추가예정</p>*/}
            {/*</div>*/}
            <div className={styles['container']}>
                <h1>에너지 모니터링 시스템 사례</h1>
                <h3>
                    1. 한국에너지공단 신재생에너지 통합모니터링시스템
                    REMS(Renewable Energy Monitoring Service)
                </h3>
                <Link
                    to="https://rems.energy.or.kr/admin/monitor/view/monitorCmb"
                    target={'_blank'}
                    className={styles['link']}
                >
                    바로가기
                </Link>
                <p className={`${styles['case-content']}`}>
                    <ul>
                        <li
                            className={`${styles['level1']} ${styles['black']}`}
                        >
                            정부에서 운영하는 유일한 신재생설비 모니터링 사업
                        </li>
                        <li
                            className={`${styles['level1']} ${styles['black']}`}
                        >
                            태양광, 풍력, 연료전지 등 신재생발전 설비와 함께
                            태양열, 지열 설비를 실시간 모니터링하여사업자,
                            지자체, 정부에 설비 가동상태와 발전량 정보를 함께
                            제공
                        </li>
                        <li
                            className={`${styles['level1']} ${styles['black']}`}
                        >
                            신재생에너지 설비들의 발전현황, 고장여부 등을
                            실시간으로 파악
                        </li>
                        <li
                            className={`${styles['level1']} ${styles['black']}`}
                        >
                            개인, 소규모, 대규모 발전 시설을 막론하고 자유롭게
                            사용할 수 있는 플랫폼. 구축 시 공단 마스터 계정과
                            지자체 계정, 개인 계정 등이 생기게 되고 계정별로
                            현황을 모니터링 가능
                        </li>
                        <li
                            className={`${styles['level1']} ${styles['black']}`}
                        >
                            설치자별 모니터링 가능(로그인 시 사용 가능)
                        </li>
                        <li
                            className={`${styles['level1']} ${styles['black']}`}
                        >
                            카카오톡 및 SMS 알림 기능 : 설치자 설비상태 경고 및
                            고장 시 상태정보 및 안내 등
                        </li>
                    </ul>
                    <img src={rems1} alt="" />
                    <img src={rems2} alt="" />
                    <img src={rems3} alt="" />
                </p>
                <h3>
                    2. 대건소프트 태양광 발전소 통합 모니터링 시스템
                    볼텍스(VORTEX)
                </h3>
                <Link
                    to="http://daegunsoft.com/?page_id=7450"
                    target={'_blank'}
                    className={styles['link']}
                >
                    바로가기
                </Link>
                <p className={`${styles['case-content']}`}>
                    <ul>
                        <li
                            className={`${styles['level1']} ${styles['black']}`}
                        >
                            통합 모니터링 운영, 관리
                            <ul>
                                <li
                                    className={`${styles['level2']} ${styles['black']}`}
                                >
                                    대규모 개별 태양광 발전소 통합 모니터링
                                </li>
                                <li
                                    className={`${styles['level2']} ${styles['black']}`}
                                >
                                    발전량 예측 알고리즘으로 수익 극대화
                                </li>
                                <li
                                    className={`${styles['level2']} ${styles['black']}`}
                                >
                                    빅데이터 기반 고장 및 운영 데이터 분석
                                </li>
                            </ul>
                        </li>
                        <li
                            className={`${styles['level1']} ${styles['black']}`}
                        >
                            Fault 스냅샷 - 장비별 Fault 발생 시, Falut 발생 전
                            5분 동안 1초 단위 데이터 저장
                            <ul>
                                <li
                                    className={`${styles['level2']} ${styles['black']}`}
                                >
                                    발전소별 필요 조건에 맞춰 화면 구성
                                </li>
                                <li
                                    className={`${styles['level2']} ${styles['black']}`}
                                >
                                    사용자 맞춤 솔루션
                                </li>
                                <li
                                    className={`${styles['level2']} ${styles['black']}`}
                                >
                                    원격 모니터링(Web) 서비스로 편의성 향상
                                </li>
                            </ul>
                        </li>
                    </ul>
                    <img src={vortex1} alt="" />
                </p>
                <h3>3. 라씨 태양광 발전소 모니터링 LASEE</h3>
                <Link
                    to="https://www.lasee.io/plant/5"
                    target={'_blank'}
                    className={`${styles['link']}`}
                >
                    바로가기 (게스트 체험 - 아이디 guest / 비밀번호 0000)
                </Link>
                <p className={styles['case-content']}>
                    <ul>
                        <li
                            className={`${styles['level1']} ${styles['black']}`}
                        >
                            모바일 앱 지원
                            <ul>
                                <li
                                    className={`${styles['level2']} ${styles['black']}`}
                                >
                                    Android 및 iOS 지원
                                </li>
                            </ul>
                        </li>
                        <li
                            className={`${styles['level1']} ${styles['black']}`}
                        >
                            실시간 위치기반ﾠ날씨 서비스
                            <ul>
                                <li
                                    className={`${styles['level2']} ${styles['black']}`}
                                >
                                    발전소의 위치를 기반으로 한 날씨 정보에 따라
                                    스마트한 알림 제공
                                </li>
                            </ul>
                        </li>
                        <li
                            className={`${styles['level1']} ${styles['black']}`}
                        >
                            알림 서비스
                            <ul>
                                <li
                                    className={`${styles['level2']} ${styles['black']}`}
                                >
                                    정전이나 발전상태를 알림으로 받음
                                </li>
                                <li
                                    className={`${styles['level2']} ${styles['black']}`}
                                >
                                    사용자, 안전관리자, 시공사 등 멀티 푸시 제공
                                </li>
                            </ul>
                        </li>
                    </ul>
                    <img src={lasee1} alt="" />
                    <img src={lasee4} alt="" />
                    <img src={lasee3} alt="" />
                    <img src={lasee2} alt="" />
                </p>
            </div>
            <div className={styles['container']}>
                <h1>사이트맵</h1>
                <div className={styles['sitemap-container']}>
                    <p className={styles['main-link']}>
                        <Link to="/">DES Main</Link>
                    </p>
                    <ul>
                        <li className={styles['level1']}>
                            <Link to="/vpp">VPP</Link>
                        </li>
                        <li className={styles['level1']}>
                            <Link to="/house/1">House 1</Link>
                            <ul>
                                <li className={styles['level2']}>
                                    <Link to="/house/1/der">
                                        Distribution Energy Resource
                                    </Link>
                                </li>
                                <li className={styles['level2']}>
                                    <Link to="/house/1/home-loads">
                                        Home Loads
                                    </Link>
                                </li>
                                <li className={styles['level2']}>
                                    <Link to="/house/1/emd">
                                        Energy Management Device
                                    </Link>
                                </li>
                                <li className={styles['level2']}>
                                    <Link to="/house/1/sust-metrics">
                                        Sustainability Metrics
                                    </Link>
                                </li>
                            </ul>
                        </li>
                        <li className={styles['level1']}>
                            <Link to="/house/2">House 2</Link>
                            <ul>
                                <li className={styles['level2']}>
                                    <Link to="/house/2/der">
                                        Distribution Energy Resource
                                    </Link>
                                </li>
                                <li className={styles['level2']}>
                                    <Link to="/house/2/home-loads">
                                        Home Loads
                                    </Link>
                                </li>
                                <li className={styles['level2']}>
                                    <Link to="/house/2/emd">
                                        Energy Management Device
                                    </Link>
                                </li>
                                <li className={styles['level2']}>
                                    <Link to="/house/2/sust-metrics">
                                        Sustainability Metrics
                                    </Link>
                                </li>
                            </ul>
                        </li>
                        <li className={styles['level1']}>
                            <Link to="/house/3">House 3</Link>
                            <ul>
                                <li className={styles['level2']}>
                                    <Link to="/house/3/der">
                                        Distribution Energy Resource
                                    </Link>
                                </li>
                                <li className={styles['level2']}>
                                    <Link to="/house/3/home-loads">
                                        Home Loads
                                    </Link>
                                </li>
                                <li className={styles['level2']}>
                                    <Link to="/house/3/emd">
                                        Energy Management Device
                                    </Link>
                                </li>
                                <li className={styles['level2']}>
                                    <Link to="/house/3/sust-metrics">
                                        Sustainability Metrics
                                    </Link>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
            <div className={styles['container']}>
                <h1>ER 다이어그램</h1>
                <img src={erd} alt="ERD" className={styles['erd-img']} />
            </div>
            <div className={styles['container']}>
                <h1>개발 환경</h1>
                <div className={styles['env-container']}>
                    <div className={styles['content']}>
                        <p className={styles['title']}>Frontend</p>
                        <img src={reactlogo} alt="react logo" />
                    </div>
                    <div className={styles['content']}>
                        <p className={styles['title']}>Backend</p>
                        <img src={sblogo} alt="spring boot logo" />
                    </div>
                    <div className={styles['content']}>
                        <p className={styles['title']}>DataBase</p>
                        <img src={mysqllogo} alt="mysql logo" />
                    </div>
                </div>
            </div>
        </div>
    )
}
