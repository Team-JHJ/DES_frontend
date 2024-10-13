import styles from './base-page.module.css'
import LeftSidebar from '../../components/left-sidebar/left-sidebar.jsx'
import Header from '../../components/header/header.jsx'
import Footer from '../../components/footer/footer.jsx'
import { Outlet } from 'react-router-dom'

export default function BasePage() {
    return (
        <div className={styles.root}>
            <LeftSidebar />
            <div className={styles.content}>
                <Header />
                <section className={styles.inner}>
                    <div className={styles.container}>
                        <Outlet />
                    </div>
                </section>
                <Footer />
            </div>
        </div>
    )
}
