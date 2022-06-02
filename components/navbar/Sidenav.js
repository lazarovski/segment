import styles from './Sidenav.module.css'
import { useTranslations } from 'next-intl';

export default function Sidenav({ toggleMenu }) {
    const t = useTranslations();

    return (
        <div className={styles.sidenav}>
            <a className={styles.sidenav__close_btn} onClick={toggleMenu}>&times;</a>
            <div className={styles.sidenav__content}>
                <a href="#products" onClick={toggleMenu}>{t('Products.title')}</a>
                <a href="#about" onClick={toggleMenu}>{t('About.title')}</a>
                <a href="#contact" onClick={toggleMenu}>{t('Contact.title')}</a>
            </div>
        </div>
    )
}