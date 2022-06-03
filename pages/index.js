import Meta from '../components/Meta';
import Cover from '../components/cover/';
import ProductList from '../components/products/ProductList';
import About from '../components/about/';
import Contact from '../components/contact/';
import Footer from '../components/footer/';
import ScrollTop from '../components/scrollTop/';
import { useTranslations } from 'next-intl';

export default function Home() {
  const t = useTranslations('Shared');

  return (
    <>
      <Meta title={t('siteName')} description={t('slogan')} />
      <Cover />
      <ProductList />
      <About />
      <Contact />
      <Footer />
      <ScrollTop />
    </>
  )
}

export const getStaticProps = async ({ locale }) => {
  return {
    props: {
      messages: (await import(`../translations/${locale}.json`)).default
    },
  };
};
