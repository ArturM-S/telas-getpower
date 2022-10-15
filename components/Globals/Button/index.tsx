import { ButtonHTMLAttributes, ReactNode } from 'react';
import { Container } from './styles';

interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: ReactNode;
    isLoading?: boolean;
}

export function Button({ children, isLoading, ...rest }: IButtonProps) {
    return (
        <Container isLoading={isLoading} {...rest}>
            {children}
        </Container>
    );
}
