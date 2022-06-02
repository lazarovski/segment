import Meta from '../components/Meta';
import Cover from '../components/cover/';
import ProductList from '../components/products/ProductList.js';
import About from '../components/About/';
import Contact from '../components/Contact/';
import Footer from '../components/footer/';
import ScrollTop from '../components/scrollTop/';

export default function Home(props) {

  return (
    <div>
      <Meta />
      <Cover />
      <ProductList />
      <About />
      <Contact />
      <Footer />
      <ScrollTop />
    </div>
  )
}

export const getStaticProps = async ({ locale }) => {
  return {
    props: {
      messages: (await import(`../translations/${locale}.json`)).default
    },
  };
};
