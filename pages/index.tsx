import Link from 'next/link';
import { Button } from '../components/Globals/Button';
import { Input } from '../components/Globals/Input';
import {
    ButtonBox,
    Container,
    Form,
    FormFooter,
    FormSide,
    ImageSide,
    Logo,
    Meanings,
    RememberMe,
    Terms,
    Text,
    Title,
} from '../styles/pages/Login/styles';

export default function Home() {
    return (
        <Container>
            <FormSide>
                <Logo src="logo.png" alt="logo" />

                <Title>
                    Bem-vindo a <b>Academia do sol</b>
                </Title>
                <Text>
                    Antes de começar, você deve estar logado ou criar uma <br />{' '}
                    conta caso ainda não tenha.
                </Text>
                <Form>
                    <Input type="text" placeholder="E-mail" label="Email" />
                    <Input type="password" placeholder="Senha" label="Senha" />
                    <RememberMe>
                        <input
                            type="checkbox"
                            name="remember"
                            id="remember"
                            style={{ display: 'flex', alignSelf: 'flex-start' }}
                        />
                        Lembrar-me
                    </RememberMe>
                    <ButtonBox>
                        <Link href="/">Esqueci minha senha</Link>
                        <Button type="submit">Entrar</Button>
                    </ButtonBox>
                </Form>
                <FormFooter>
                    <Text style={{ display: 'flex', alignSelf: 'center' }}>
                        Não tem conta? <Link href="/">Crie uma agora</Link>
                    </Text>
                    <Meanings>
                        <Text>
                            Copyright © Your Company Made with &hearts; by
                            Stisla
                        </Text>
                        <Terms>
                            <Link href="/">Privacy Policy</Link>●
                            <Link href="/">Terms of service</Link>
                        </Terms>
                    </Meanings>
                </FormFooter>
            </FormSide>
            <ImageSide>
                <img
                    src="https://img.freepik.com/fotos-gratis/bela-usina-de-energia-alternativa-com-paineis-solares_23-2149192692.jpg?w=2000"
                    alt="Solar energy"
                />
            </ImageSide>
        </Container>
    );
}
