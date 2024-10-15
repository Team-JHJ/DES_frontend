import styles from './left-sidebar.module.css'
import deslogo from '../../assets/img/deslogo.png'
import { Link, useNavigate } from 'react-router-dom'

export default function LeftSidebar() {
    const navigate = useNavigate()

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
                        <Link to="/">main</Link>
                    </div>
                    <div
                        className={`${styles['menu-item']} ${styles['menu-vpp']}`}
                    >
                        <Link to="/vpp">vpp</Link>
                    </div>
                    <div className={`${styles['menu-item']} ${styles['']}`}>
                        <Link to="">House1</Link>
                        <div className={styles['items']}>
                            <span>
                                <Link to="">Distribution Energy Resource</Link>
                            </span>
                            <span>
                                <Link to="">Home Loads</Link>
                            </span>
                            <span>
                                <Link to="">Energy Management Device</Link>
                            </span>
                            <span>
                                <Link to="">Sustainability Metrics</Link>
                            </span>
                        </div>
                    </div>
                    <div
                        className={`${styles['menu-item']} ${styles['menu-home2']}`}
                    >
                        <Link to="">House2</Link>
                        <div className={styles['items']}>
                            <span>
                                <Link to="">DER</Link>
                            </span>
                            <span>
                                <Link to="">Home Loads</Link>
                            </span>
                            <span>
                                <Link to="">Energy Management Device</Link>
                            </span>
                            <span>
                                <Link to="">Sustainability Metrics</Link>
                            </span>
                        </div>
                    </div>
                    <div
                        className={`${styles['menu-item']} ${styles['menu-home3']}`}
                    >
                        <Link to="">House3</Link>
                        <div className={styles['items']}>
                            <span>
                                <Link to="">DER</Link>
                            </span>
                            <span>
                                <Link to="">Home Loads</Link>
                            </span>
                            <span>
                                <Link to="">Energy Management Device</Link>
                            </span>
                            <span>
                                <Link to="">Sustainability Metrics</Link>
                            </span>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}
