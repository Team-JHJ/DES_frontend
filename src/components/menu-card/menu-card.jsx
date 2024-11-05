import styles from './menu-card.module.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClock } from '@fortawesome/free-regular-svg-icons'

export default function MenuCard({ menu, list, setMenu }) {
    return (
        <div className={styles['menu-card']} onClick={() => setMenu(list)}>
            <FontAwesomeIcon icon={faClock} />
            <p>{menu}</p>
        </div>
    )
}
