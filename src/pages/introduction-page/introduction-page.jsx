import styles from './introduction-page.module.css'

import { Link } from 'react-router-dom'

import erd from '@/assets/img/erd.png'
import reactlogo from '@/assets/img/react-logo.png'
import sblogo from '@/assets/img/spring-boot-logo.png'
import mysqllogo from '@/assets/img/my-sql-logo.png'

export default function IntroductionPage() {
    return (
        <div className={styles['introduction-page']}>
            <div className={styles['container']}>
                <h1>분산에너지</h1>
                <p>추가예정</p>
            </div>
            <div className={styles['container']}>
                <h1>사례 조사</h1>
                <p>추가예정</p>
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
