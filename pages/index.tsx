import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState } from 'react';
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
    const { push } = useRouter();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () => {
        if (email.includes('@') && password.length > 0) {
            push('/Home');
        } else {
            alert('Preencha os campos corretamente');
        }
    };

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
                    <Input
                        type="text"
                        placeholder="E-mail"
                        label="Email"
                        onChange={e => setEmail(e.target.value)}
                    />
                    <Input
                        type="password"
                        placeholder="Senha"
                        label="Senha"
                        onChange={e => setPassword(e.target.value)}
                    />
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
                        <Button onClick={() => handleLogin()} type="button">
                            Entrar
                        </Button>
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
