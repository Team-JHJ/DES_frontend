import styles from './left-sidebar.module.css'
import deslogo from '../../assets/img/deslogo.png'
import { Link } from 'react-router-dom'

export default function LeftSidebar() {
    return (
        <div className={styles['leftsidebar-container']}>
            <nav>
                <div className={styles['logo']}>
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
                <div className={styles['menu']}>
                    <div
                        className={`${styles['menu-item']} ${styles['menu-main']}`}
                    >
                        <Link to="/home1">main</Link>
                    </div>
                    <div
                        className={`${styles['menu-item']} ${styles['menu-vpp']}`}
                    >
                        <Link to="">vpp</Link>
                    </div>
                    <div className={`${styles['menu-item']} ${styles['']}`}>
                        <Link to="">home1</Link>
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
                        className={`${styles['menu-item']} ${styles['menu-home2']}`}
                    >
                        <Link to="">home2</Link>
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
                        <Link to="">home3</Link>
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
