import Meta from '../components/Meta';
import Cover from '../components/cover/';
import ProductList from '../components/products/ProductList';
import About from '../components/about/';
import Contact from '../components/contact/';
import Footer from '../components/footer/';
import ScrollTop from '../components/scrollTop/';

export default function Home() {

  return (
    <>
      <Meta />
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
