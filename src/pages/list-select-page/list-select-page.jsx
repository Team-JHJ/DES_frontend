import styles from './list-select-page.module.css'

import house1img from '../../assets/img/house1.png'
import house2img from '../../assets/img/house2.png'
import house3img from '../../assets/img/house3.png'
import { useLocation, useParams } from 'react-router-dom'

export default function ListSelectPage() {
    const param = useParams()
    // console.log(param)
    const houseId = param.houseId
    console.log(houseId)
    // const parameter = useLocation()
    // console.log(parameter)

    return (
        <main className={styles['list-select-page']}>
            <div className={styles['container']}>1</div>
            <div className={styles['container']}>
                <img
                    src={`${houseId === 'house1'} ? 'house1img' : ${houseId === 'house2'} ? 'house2img' : ${houseId === 'house2'} ? 'house3img': ''}`}
                    className={styles.houseimg}
                    alt="house1 img"
                />
            </div>
            <div className={styles['container']}>3</div>
        </main>
    )
}
