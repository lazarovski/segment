import Modal from '../shared/modal/';
import Container from '../shared/container/';
import Heading from '../shared/heading/';
import Button from '../shared/button/';
import FlexContainer from '../shared/flex/FlexContainer';
import FlexItem from '../shared/flex/FlexItem';
import Image from 'next/image';
import P1 from '../../images/products/p1.jpg';
import { useTranslations } from 'next-intl';

export default function ProductDetails({ name, image, text, close }) {
    const t = useTranslations("shared");

    return (
        <Modal className="round">
            <Container>
                <FlexContainer row wrap >
                    <FlexItem xs-12 md-4>
                        <Image
                            alt="Product"
                            src={P1}
                            width={400}
                            height={400}
                        />
                    </FlexItem>
                    <FlexItem xs-12 md-8>
                        <Heading Tag="h4">Product Name</Heading>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,</p>
                    </FlexItem>
                    <FlexItem xs-12 md-12 className="text-right">
                        <Button onClick={close}> {t('close')} </Button>
                    </FlexItem>
                </FlexContainer>
            </Container>
        </Modal>
    )
}