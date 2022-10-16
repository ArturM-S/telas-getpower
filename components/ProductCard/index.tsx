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
}

export function ProductCard({
    tag,
    name,
    price,
    image,
    description,
}: IProductCardProps) {
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
            <AccessButton>Acessar</AccessButton>
        </Container>
    );
}
