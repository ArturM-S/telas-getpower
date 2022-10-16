import { Container, Text, Title } from './styles';

export function WelcomeCard() {
    return (
        <Container>
            <Title>Bem-vindo, Thiago Abreu!</Title>
            <Text>
                Vamos transformar o negocio de energia juntos?
                <br />
                Veja abaixo a lista de cursos e serviços que oferecemos para
                você
            </Text>
        </Container>
    );
}
