import { NextIntlProvider } from 'next-intl';
import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
import Layout from '../components/Layout.js';
import '../styles/globals.css';

config.autoAddCss = false;

function MyApp({ Component, pageProps }) {
  return (
    <NextIntlProvider messages={pageProps.messages}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </NextIntlProvider>
  )
}

export default MyApp
