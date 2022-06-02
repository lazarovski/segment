import styles from "./Footer.module.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookSquare, faInstagramSquare } from '@fortawesome/free-brands-svg-icons';
import { useTranslations } from 'next-intl';

export default function Footer() {
    const year = new Date().getFullYear();
    const t = useTranslations('shared');

    return <div className={styles.footer}>
        <div className={styles.footer__icons}>
            <a href="https://www.facebook.com/" target="_blank">
                <FontAwesomeIcon icon={faFacebookSquare} size="2x" />
            </a>
            <a href="https://www.instagram.com/" target="_blank">
                <FontAwesomeIcon icon={faInstagramSquare} size="2x" />
            </a>
        </div>
        <p>© {year} {t('siteName')}</p>
    </div>
}