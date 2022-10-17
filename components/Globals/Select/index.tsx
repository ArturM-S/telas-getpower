import { SelectHTMLAttributes } from 'react';
import { Container, Label, InputBase } from './styles';

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
    name?: string;
    label?: string;
    inputWidth?: string;
}

export function Select({ label, name, inputWidth, ...rest }: SelectProps) {
    return (
        <Container>
            <Label>{label}</Label>

            <InputBase inputWidth={inputWidth} {...rest} />
        </Container>
    );
}
