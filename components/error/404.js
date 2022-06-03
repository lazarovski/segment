import styles from "./404.module.css";
import { useTranslations } from 'next-intl';

export default function Component404() {
    const t = useTranslations('ERROR');

    return <div className={styles.error_404}>
        <div className={styles.error_404__code}>404</div>
        <p>{t('message')}</p>
    </div>
}