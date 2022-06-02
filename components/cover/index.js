import styles from "./Cover.module.css";
import Heading from "../shared/heading/";
import { useTranslations } from 'next-intl';

export default function Cover() {
    const t = useTranslations();

    return <div className={styles.cover}>
        <div className={styles.cover__content}>
            <div className={`${styles.cover__content__text}`}>
                <Heading Tag="h1" color="white">{t('shared.siteName')}</Heading>
                <p>{t('Cover.message')}</p>
            </div>
        </div>
    </div>
}