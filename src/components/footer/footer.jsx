import styles from './footer.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { Link } from 'react-router-dom'

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.inner}>
                <span>
                    <span>
                        Backend{' '}
                        <Link to="https://github.com/kjeok00" target="_blank">
                            kjeok00 <FontAwesomeIcon icon={faGithub} />
                        </Link>
                    </span>
                    <span> • </span>
                    <span>
                        Frontend{' '}
                        <a href="https://github.com/khanna01" target="_blank">
                            khanna01 <FontAwesomeIcon icon={faGithub} />
                        </a>
                    </span>
                </span>
                <p>© 2024 Jeju Univ, Inc. All rights reserved.</p>
            </div>
        </footer>
    )
}
