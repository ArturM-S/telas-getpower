import { useRouter } from 'next/router';
import {
    AccessButton,
    CardHead,
    Container,
    Price,
    ProductDescription,
    ProductImage,
    ProductInfo,
    ProductName,
    Tag,
} from './styles';

interface IProductCardProps {
    tag: string;
    name: string;
    price: number;
    image: string;
    description: string;
    accessLink?: string;
}

export function ProductCard({
    tag,
    name,
    price,
    image,
    description,
    accessLink,
}: IProductCardProps) {
    const { push } = useRouter();

    return (
        <Container>
            <CardHead>
                <Tag type={tag}>{tag}</Tag>
                <Price>R${price}.00</Price>
            </CardHead>
            <ProductInfo>
                <ProductName>{name}</ProductName>
                <ProductDescription>{description}</ProductDescription>
            </ProductInfo>
            <ProductImage src={image} alt={name} />
            <AccessButton onClick={() => push(`${accessLink}`)}>
                Acessar
            </AccessButton>
        </Container>
    );
}
