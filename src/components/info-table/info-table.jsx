import styles from './info-table.module.css'

export default function InfoTable({ name, description, value }) {
    // const name = name
    // const description = description
    // const value = value

    return (
        <div className={styles['info-table']}>
            <div className={styles['info-title']}>
                <p className={styles['name']}>{name}</p>
                <p className={styles['description']}>{description}</p>
            </div>
            <div className={styles['info-value']}>
                <p className={styles['value']}>{value}</p>
            </div>
        </div>
    )
}
