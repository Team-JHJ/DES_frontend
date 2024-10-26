import styles from './left-sidebar.module.css'
import deslogo from '../../assets/img/deslogo.png'
import { Link, useLocation, useNavigate, useParams } from 'react-router-dom'

export default function LeftSidebar() {
    const navigate = useNavigate()
    const pathname = useLocation().pathname
    const params = useParams()
    // console.log(pathname.pathname)
    console.log(params)

    return (
        <div className={styles['leftsidebar-container']}>
            <nav>
                <div className={styles['logo-container']}>
                    <div
                        className={styles['logo']}
                        onClick={() => navigate('/')}
                    >
                        <img
                            src={deslogo}
                            alt="DES 로고 이미지"
                            className={styles['logo-img']}
                        />
                        <div>
                            <p className={styles['name']}>DES</p>
                            <p className={styles['for']}>for Jeju Univ</p>
                        </div>
                    </div>
                </div>
                <div className={styles['menu']}>
                    <div
                        className={`${styles['menu-item']} ${styles['menu-main']}`}
                    >
                        <Link
                            to="/introduction"
                            className={`${pathname === '/introduction' ? styles['active'] : ''}`}
                        >
                            introduction
                        </Link>
                    </div>
                    <div
                        className={`${styles['menu-item']} ${styles['menu-main']}`}
                    >
                        <Link
                            to="/"
                            className={`${pathname === '/' ? styles['active'] : ''}`}
                        >
                            main
                        </Link>
                    </div>
                    <div
                        className={`${styles['menu-item']} ${styles['menu-vpp']}`}
                    >
                        <Link
                            to="/vpp"
                            className={`${pathname === '/vpp' ? styles['active'] : ''}`}
                        >
                            vpp
                        </Link>
                    </div>
                    <div className={`${styles['menu-item']} ${styles['']}`}>
                        <Link
                            to="/house/1"
                            className={`${pathname === '/house/1' ? styles['active'] : ''}`}
                        >
                            House1
                        </Link>
                        <div className={styles['items']}>
                            <span>
                                <Link
                                    to="/house/1/der"
                                    className={`${pathname === '/house/1/der' ? styles['active'] : ''}`}
                                >
                                    Distribution Energy Resource
                                </Link>
                            </span>
                            <span>
                                <Link
                                    to="/house/1/home-loads"
                                    className={`${pathname === '/house/1/home-loads' ? styles['active'] : ''}`}
                                >
                                    Home Loads
                                </Link>
                            </span>
                            <span>
                                <Link
                                    to="/house/1/emd"
                                    className={`${pathname === '/house/1/emd' ? styles['active'] : ''}`}
                                >
                                    Energy Management Device
                                </Link>
                            </span>
                            <span>
                                <Link
                                    to="/house/1/sust-metrics"
                                    className={`${pathname === '/house/1/sust-metrics' ? styles['active'] : ''}`}
                                >
                                    Sustainability Metrics
                                </Link>
                            </span>
                        </div>
                    </div>
                    <div
                        className={`${styles['menu-item']} ${styles['menu-home2']}`}
                    >
                        <Link
                            to="/house/2"
                            className={`${pathname === '/house/2' ? styles['active'] : ''}`}
                        >
                            House2
                        </Link>
                        <div className={styles['items']}>
                            <span>
                                <Link
                                    to="/house/2/der"
                                    className={`${pathname === '/house/2/der' ? styles['active'] : ''}`}
                                >
                                    Distribution Energy Resource
                                </Link>
                            </span>
                            <span>
                                <Link
                                    to="/house/2/home-loads"
                                    className={`${pathname === '/house/2/home-loads' ? styles['active'] : ''}`}
                                >
                                    Home Loads
                                </Link>
                            </span>
                            <span>
                                <Link
                                    to="/house/2/emd"
                                    className={`${pathname === '/house/2/emd' ? styles['active'] : ''}`}
                                >
                                    Energy Management Device
                                </Link>
                            </span>
                            <span>
                                <Link
                                    to="/house/2/sust-metrics"
                                    className={`${pathname === '/house/2/sust-metrics' ? styles['active'] : ''}`}
                                >
                                    Sustainability Metrics
                                </Link>
                            </span>
                        </div>
                    </div>
                    <div
                        className={`${styles['menu-item']} ${styles['menu-home3']}`}
                    >
                        <Link
                            to="/house/3"
                            className={`${pathname === '/house/3' ? styles['active'] : ''}`}
                        >
                            House3
                        </Link>
                        <div className={styles['items']}>
                            <span>
                                <Link
                                    to="/house/3/der"
                                    className={`${pathname === '/house/3/der' ? styles['active'] : ''}`}
                                >
                                    Distribution Energy Resource
                                </Link>
                            </span>
                            <span>
                                <Link
                                    to="/house/3/home-loads"
                                    className={`${pathname === '/house/3/home-loads' ? styles['active'] : ''}`}
                                >
                                    Home Loads
                                </Link>
                            </span>
                            <span>
                                <Link
                                    to="/house/3/emd"
                                    className={`${pathname === '/house/3/emd' ? styles['active'] : ''}`}
                                >
                                    Energy Management Device
                                </Link>
                            </span>
                            <span>
                                <Link
                                    to="/house/3/sust-metrics"
                                    className={`${pathname === '/house/3/sust-metrics' ? styles['active'] : ''}`}
                                >
                                    Sustainability Metrics
                                </Link>
                            </span>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}
