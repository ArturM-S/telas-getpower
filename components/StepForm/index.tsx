import { SIgnal, Topic } from '../../styles/pages/Proposal/styles';
import { Input } from '../Globals/Input';
import { Select } from '../Globals/Select';
import { Container, Form, InputColumn } from './styles';

export function StepForm() {
    return (
        <Container>
            <Topic>
                <SIgnal />
                Dados do cliente
            </Topic>
            <Form>
                <InputColumn>
                    <Input type="text" placeholder="Nome" label="Nome" />
                    <Select label="Estado" />
                </InputColumn>
                <InputColumn>
                    <Input type="text" placeholder="E-mail" label="Email" />
                    <Select label="Cidade" />
                </InputColumn>
            </Form>
        </Container>
    );
}
