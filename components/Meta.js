import Head from 'next/head';
import config from "../config";

export default function Meta({ title, description }) {
    return <Head>
        <title>{title}</title>
        <meta property="og:title" content={title} key="og:title" />
        <meta name="description" content={description} key="description" />
        <meta name="og:description" content={description} key="og:description" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="keywords" content="Lekovi, Suplementi, Cink, Kurkuma, Vitamini, Zdravje" key="keywords" />
        <meta name="author" content="Atanas Lazarovski" key="author" />
        <meta property="og:locale" content="mk" key="og:locale" />
        <meta property="og:type" content="website" key="og:type" />
        <meta property="og:site_name" content="Segment" key="og:site_name" />
        <meta property="og:url" content={config.domain} key="og:url" />
        <meta property="og:image" content={`${config.domain}/products.jpg`} key="og:image" />
    </Head>
}