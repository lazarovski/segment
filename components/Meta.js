import Head from 'next/head';
import { useTranslations } from 'next-intl';

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
        <meta property="og:url" content="https://2acd-77-28-135-144.ngrok.io" key="og:url" />
        <meta property="og:image" content="https://2acd-77-28-135-144.ngrok.io/products.jpg" key="og:image" />
    </Head>
}