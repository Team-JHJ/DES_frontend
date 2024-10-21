import styles from './menu-card.module.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClock } from '@fortawesome/free-regular-svg-icons'

export default function MenuCard({ menu, list, setList }) {
    return (
        <div className={styles['menu-card']} onClick={() => setList(list)}>
            <FontAwesomeIcon icon={faClock} />
            <p>{menu}</p>
        </div>
    )
}
