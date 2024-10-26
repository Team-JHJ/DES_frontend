import styles from './footer.module.css'

export default function Footer() {
    console.log('푸터')
    return (
        <footer className={styles.footer}>
            <div className={styles.inner}>푸터</div>
        </footer>
    )
}
