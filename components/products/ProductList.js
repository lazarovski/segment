
import FlexContainer from '../shared/flex/FlexContainer.js';
import FlexItem from '../shared/flex/FlexItem.js';
import Heading from '../shared/heading/';
import ProductItem from './ProductItem.js';
import styles from './Products.module.css';
import { useTranslations } from 'next-intl';

export default function ProductList() {
    const t = useTranslations("Products");

    return (
        <div id="products" className={styles.products}>
            <FlexContainer wrap center>
                <FlexItem xs-12 md-10 lg-8>
                    <Heading Tag="h2" align="center">{t('title')}</Heading>
                    <FlexContainer wrap>
                        <FlexItem md-6 lg-4> <ProductItem /> </FlexItem>
                        <FlexItem md-6 lg-4> <ProductItem /> </FlexItem>
                        <FlexItem md-6 lg-4> <ProductItem /> </FlexItem>
                        <FlexItem md-6 lg-4> <ProductItem /> </FlexItem>
                        <FlexItem md-6 lg-4> <ProductItem /> </FlexItem>
                        <FlexItem md-6 lg-4> <ProductItem /> </FlexItem>
                        <FlexItem md-6 lg-4> <ProductItem /> </FlexItem>
                        <FlexItem md-6 lg-4> <ProductItem /> </FlexItem>
                        <FlexItem md-6 lg-4> <ProductItem /> </FlexItem>
                    </FlexContainer>
                </FlexItem>
            </FlexContainer>
        </div>
    )
}