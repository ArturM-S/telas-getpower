import { Container, Text, Title } from './styles';

interface IPageTitleBoxProps {
    title: string;
    text: string;
}

export function PageTitleBox({ title, text }: IPageTitleBoxProps) {
    return (
        <Container>
            <Title>{title}</Title>
            <Text>{text}</Text>
        </Container>
    );
}
