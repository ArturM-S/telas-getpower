import { InputHTMLAttributes } from 'react';
import { Container, InputField, Label } from './styles';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    label: string;
    type: string;
}
export function Input({ label, type, ...rest }: InputProps) {
    return (
        <Container>
            <Label>{label}</Label>
            <InputField {...rest} type={type} />
        </Container>
    );
}
