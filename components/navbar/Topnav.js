import Image from 'next/image';
import Link from 'next/link'
import styles from './Topnav.module.css';
import logo from '../../images/logo.png';
import { useRouter } from 'next/router';

export default function Topnav({ toggleMenu }) {
    const { locale, locales, route } = useRouter();
    const otherLocale = locales?.find((cur) => cur !== locale);

    return (
        <div className={styles.topnav}>
            <div className={`${styles.topnav__content}`}>
                <Image
                    alt="Segment Logo"
                    src={logo}
                />
                <div>
                    <Link href={route} locale={otherLocale}>
                        <a>{otherLocale}</a>
                    </Link>
                    <a onClick={toggleMenu}>&#9776;</a>
                </div>
            </div>
        </div>
    )
}