import styles from './menu-card.module.css'
import Icon from '@/components/icon/icon.jsx'

export default function MenuCard({ menu, list, setMenu }) {
    return (
        <div className={styles['menu-card']} onClick={() => setMenu(list)}>
            <Icon menu={menu} />
            <p>{menu}</p>
        </div>
    )
}
