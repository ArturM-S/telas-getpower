import { ButtonHTMLAttributes, ReactNode } from 'react';
import { Container } from './styles';

interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: ReactNode;
}

export function Button({ children, ...rest }: IButtonProps) {
    return <Container {...rest}>{children}</Container>;
}
