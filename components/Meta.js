import Head from 'next/head';
import { useTranslations } from 'next-intl';
import config from "../config";

export default function Meta() {
    const t = useTranslations("shared");

    return <Head>
        <title>{t('siteName')}</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="description" content={t('slogan')} key="description" />
        <meta name="keywords" content="Lekovi, Suplementi, Cink, Kurkuma, Vitamini, Zdravje" key="keywords" />
        <meta name="author" content="Atanas Lazarovski" key="author" />
        <meta property="og:title" content={t('siteName')} key="og:title" />
        <meta name="og:description" content={t('slogan')} key="og:description" />
        <meta property="og:type" content="website" key="og:type" />
        <meta property="og:url" content={config.domain} key="og:url" />
        <meta property="og:image" content={`${config.domain}/products.jpg`} key="og:image" />
    </Head>
}