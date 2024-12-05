import styles from './introduction-page.module.css'

import { Link } from 'react-router-dom'

import erd from '@/assets/img/erd.png'
import reactlogo from '@/assets/img/react-logo.png'
import sblogo from '@/assets/img/spring-boot-logo.png'
import mysqllogo from '@/assets/img/my-sql-logo.png'
import { useDispatch } from 'react-redux'
import { useEffect, useState } from 'react'
import { setHeader } from '@/store/header-slice.js'
import pdf from '@/assets/EDS_Thesis.pdf'
import info from '@/api/info.js'
import Loading from '@/components/loading/loading.jsx'

export default function IntroductionPage() {
    const dispatch = useDispatch()
    const [file, setFile] = useState(pdf)
    const [description, setDescription] = useState([])
    const [isLoading, setIsLoading] = useState(false)

    const embedUrl = `https://www.youtube-nocookie.com/embed/aNxaRB-wAy8`

    const getIntroduction = async () => {
        try {
            setIsLoading(true)
            const response = await info.getIntro()
            setFile(
                `${import.meta.env.VITE_BACKEND_URL}/${response.data[0].imagePath[0].split('/').pop()}`,
            )
            setDescription(response.data.slice(1))
            setIsLoading(false)
        } catch (error) {
            console.error('Request Error:', error.message)
            alert(error.message)
        }
    }

    // 페이지에 해당하는 헤더 제목과 설명 설정
    useEffect(() => {
        dispatch(
            setHeader({
                title: '분산에너지 소개',
                description: '분산에너지를 소개합니다.',
            }),
        )
        getIntroduction()
    }, [dispatch])

    return (
        <div className={styles['introduction-page']}>
            {!isLoading ? (
                <>
                    <div className={styles['container']}>
                        <h1>분산에너지</h1>
                        <iframe
                            src={file}
                            className={styles['pdf-viewer']}
                            title="PDF viewer"
                            allow="fullscreen"
                            loading="lazy"
                            referrerPolicy="strict-origin-when-cross-origin"
                        />
                    </div>
                    <div className={styles['container']}>
                        <h1>분산에너지란?</h1>
                        <iframe
                            src={embedUrl}
                            className={styles['video']}
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            loading="lazy"
                            referrerPolicy="strict-origin-when-cross-origin"
                        />
                    </div>
                    <div className={styles['container']}>
                        <h1>에너지 모니터링 시스템 사례</h1>
                        {description.map((item, index) => (
                            <div key={index} className={styles['divide']}>
                                <h3>{`${index + 1}. ${item.title}`}</h3>
                                <Link
                                    to={item.linkUrl}
                                    target={'_blank'}
                                    className={styles['link']}
                                >
                                    바로가기
                                </Link>
                                <div className={`${styles['case-content']}`}>
                                    <ul>
                                        {item.descriptions.map(
                                            (item, index) => (
                                                <li
                                                    key={index}
                                                    className={`${styles['level1']} ${styles['black']}`}
                                                >
                                                    {item.descriptionTitle}
                                                    <ul key={index}>
                                                        {Array.isArray(
                                                            item.descriptionContent,
                                                        ) ? (
                                                            item.descriptionContent.map(
                                                                (level2, i) => (
                                                                    <li
                                                                        key={i}
                                                                        className={`${styles['level2']} ${styles['black']}`}
                                                                    >
                                                                        {level2}{' '}
                                                                    </li>
                                                                ),
                                                            )
                                                        ) : (
                                                            <></>
                                                        )}
                                                    </ul>
                                                </li>
                                            ),
                                        )}
                                    </ul>
                                    {item.imagePath.map((item, index) => (
                                        <img
                                            key={index}
                                            src={`${import.meta.env.VITE_BACKEND_URL}/${item.split('/').pop()}`}
                                            alt="사례 이미지"
                                        />
                                    ))}
                                </div>
                            </div>
                        ))}
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
                        <img
                            src={erd}
                            alt="ERD"
                            className={styles['erd-img']}
                        />
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
                </>
            ) : (
                <Loading />
            )}
        </div>
    )
}
