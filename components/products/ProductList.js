
import FlexContainer from '../shared/flex/FlexContainer';
import FlexItem from '../shared/flex/FlexItem';
import Heading from '../shared/heading/';
import ProductItem from './ProductItem';
import styles from './Products.module.css';
import { useTranslations } from 'next-intl';

export default function ProductList() {
    const t = useTranslations("Products");

    return (
        <div id="products" className={styles.products}>
            <FlexContainer wrap center>
                <FlexItem xs-12 md-12>
                    <Heading Tag="h2" align="center">{t('title')}</Heading>
                    <FlexContainer wrap>
                        <FlexItem md-6 lg-3> <ProductItem /> </FlexItem>
                        <FlexItem md-6 lg-3> <ProductItem /> </FlexItem>
                        <FlexItem md-6 lg-3> <ProductItem /> </FlexItem>
                        <FlexItem md-6 lg-3> <ProductItem /> </FlexItem>
                        <FlexItem md-6 lg-3> <ProductItem /> </FlexItem>
                        <FlexItem md-6 lg-3> <ProductItem /> </FlexItem>
                        <FlexItem md-6 lg-3> <ProductItem /> </FlexItem>
                        <FlexItem md-6 lg-3> <ProductItem /> </FlexItem>
                        <FlexItem md-6 lg-3> <ProductItem /> </FlexItem>
                    </FlexContainer>
                </FlexItem>
            </FlexContainer>
        </div>
    )
}