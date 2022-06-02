import Image from 'next/image';
import Button from '../shared/button/';
import Heading from '../shared/heading/';
import Card from '../shared/card/';
import ProductDetails from './ProductDetails';
import P1 from '../../images/products/p1.jpg';
import styles from './ProductItem.module.css';
import { useState } from 'react';
import { useTranslations } from 'next-intl';

export default function ProductItem(props) {
    const [modal, setModal] = useState(false);
    const handleModal = () => { setModal(!modal); };
    const t = useTranslations("Products");

    return <Card>
        {modal && <ProductDetails close={handleModal} />}
        <div className={styles.product__image}>
            <Image
                alt="Product"
                src={P1}
                width={200}
                height={200}
            />
        </div>
        <Heading Tag="h4" color='primary'>Product name</Heading>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry....</p>
        <Button onClick={handleModal}> {t('more')} </Button>
    </Card>

}