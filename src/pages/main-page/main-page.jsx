import styles from './main-page.module.css'

import kepcologo from '../../assets/img/kepco-logo.png'
import vppimg from '../../assets/img/vpp.png'
import vpptext from '../../assets/img/vpp-text.png'
import arrow from '../../assets/img/arrow.png'
import house1img from '../../assets/img/house1.png'
import house2img from '../../assets/img/house2.png'
import house3img from '../../assets/img/house3.png'
import { Link, useNavigate } from 'react-router-dom'

export default function MainPage() {
    const navigate = useNavigate()

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
                <div
                    className={styles['house']}
                    onClick={() => navigateHouse('house1')}
                >
                    <img src={arrow} className={styles.arrow1} alt="" />
                    <img
                        src={house1img}
                        className={styles.houseimg}
                        alt="house1 img"
                    />
                    <p>house 1</p>
                </div>
                <div
                    className={styles['house']}
                    onClick={() => navigateHouse('house2')}
                >
                    <img src={arrow} className={styles.arrow2} alt="" />
                    <img
                        src={house2img}
                        className={styles.houseimg}
                        alt="house2 img"
                    />
                    <p>house 2</p>
                </div>
                <div
                    className={styles['house']}
                    onClick={() => navigateHouse('house3')}
                >
                    <img src={arrow} className={styles.arrow3} alt="" />
                    <img
                        src={house3img}
                        className={styles.houseimg}
                        alt="house3 img"
                    />
                    <p>house 3</p>
                </div>
            </div>
        </main>
    )
}
