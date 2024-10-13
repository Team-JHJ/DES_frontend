import styles from './left-sidebar.module.css'
import deslogo from '../../assets/img/deslogo.png'

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
                        <a href="/home1">main</a>
                    </div>
                    <div
                        className={`${styles['menu-item']} ${styles['menu-vpp']}`}
                    >
                        <a href="">vpp</a>
                    </div>
                    <div className={`${styles['menu-item']} ${styles['']}`}>
                        <a href="">home1</a>
                        <div className={styles['items']}>
                            <span>
                                <a href="">DER</a>
                            </span>
                            <span>
                                <a href="">Home Loads</a>
                            </span>
                            <span>
                                <a href="">Energy Management Device</a>
                            </span>
                            <span>
                                <a href="">Sustainability Metrics</a>
                            </span>
                        </div>
                    </div>
                    <div
                        className={`${styles['menu-item']} ${styles['menu-home2']}`}
                    >
                        <a href="">home2</a>
                        <div className={styles['items']}>
                            <span>
                                <a href="">DER</a>
                            </span>
                            <span>
                                <a href="">Home Loads</a>
                            </span>
                            <span>
                                <a href="">Energy Management Device</a>
                            </span>
                            <span>
                                <a href="">Sustainability Metrics</a>
                            </span>
                        </div>
                    </div>
                    <div
                        className={`${styles['menu-item']} ${styles['menu-home3']}`}
                    >
                        <a href="">home3</a>
                        <div className={styles['items']}>
                            <span>
                                <a href="">DER</a>
                            </span>
                            <span>
                                <a href="">Home Loads</a>
                            </span>
                            <span>
                                <a href="">Energy Management Device</a>
                            </span>
                            <span>
                                <a href="">Sustainability Metrics</a>
                            </span>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}
