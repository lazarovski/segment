import styles from "./Contact.module.css";
import Heading from '../shared/heading';
import FlexContainer from '../shared/flex/FlexContainer.js';
import FlexItem from '../shared/flex/FlexItem.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faLocationDot, faPhone } from '@fortawesome/free-solid-svg-icons';
import { useTranslations } from 'next-intl';

export default function Contact() {
    const t = useTranslations('Contact');

    return <div id="contact" className={styles.contact}>
        <FlexContainer center>
            <FlexItem xs-12 md-10 lg-8>
                <Heading Tag="h2" color="black">{t('title')}</Heading>
                <p><FontAwesomeIcon icon={faEnvelope} /> email@gmail.com</p>
                <p><FontAwesomeIcon icon={faLocationDot} /> ul. Tasko Karadza br. 20 1/15, 1000 Skopje</p>
                <p><FontAwesomeIcon icon={faPhone} /> 071/264-665, 070/552-369</p>
            </FlexItem>
        </FlexContainer>
    </div>
}