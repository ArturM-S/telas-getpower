import { Header } from './Header';
import { Sidebar } from './Sidebar';
import { Container, Content, Main } from './styles';

interface LayoutProps {
    children: React.ReactNode;
}

export function Layout({ children }: LayoutProps) {
    return (
        <Container>
            <Sidebar />
            <Main>
                <Header />
                <Content>{children}</Content>
            </Main>
        </Container>
    );
}
