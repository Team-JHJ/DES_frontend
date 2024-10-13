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
                        main
                    </div>
                    <div
                        className={`${styles['menu-item']} ${styles['menu-vpp']}`}
                    >
                        vpp
                    </div>
                    <div
                        className={`${styles['menu-item']} ${styles['menu-home1']}`}
                    >
                        home1
                    </div>
                    <div
                        className={`${styles['menu-item']} ${styles['menu-home2']}`}
                    >
                        home2
                    </div>
                    <div
                        className={`${styles['menu-item']} ${styles['menu-home3']}`}
                    >
                        home3
                    </div>
                </div>
            </nav>
        </div>
    )
}
