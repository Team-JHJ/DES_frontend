import styles from './menu-card.module.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClock } from '@fortawesome/free-regular-svg-icons'

export default function MenuCard({ menu }) {
    return (
        <div className={styles['menu-card']}>
            <FontAwesomeIcon icon={faClock} />
            <p>{menu}</p>
        </div>
    )
}
