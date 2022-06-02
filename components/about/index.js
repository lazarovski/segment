import styles from "./About.module.css";
import Heading from '../shared/heading/';
import FlexContainer from '../shared/flex/FlexContainer.js';
import FlexItem from '../shared/flex/FlexItem.js';
import { useTranslations } from 'next-intl';

export default function About() {
    const t = useTranslations('About');

    return <div id="about" className={styles.about}>
        <FlexContainer center>
            <FlexItem xs-12 md-10 lg-8>
                <Heading Tag="h2">{t('title')}</Heading>
                <p>{t('message')}</p>
            </FlexItem>
        </FlexContainer>
    </div>
}