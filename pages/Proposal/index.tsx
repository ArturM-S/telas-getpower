import { useRouter } from 'next/router';
import { useState } from 'react';
import { Button } from '../../components/Globals/Button';
import { PageTitleBox } from '../../components/PageTitleBox';
import { StepForm } from '../../components/StepForm';
import {
    SIgnal,
    StepsToolTip,
    Topic,
} from '../../styles/pages/Proposal/styles';

export default function Proposal() {
    const { push } = useRouter();

    const [step, setStep] = useState(1);

    return (
        <>
            <PageTitleBox title="Propostas" text="Propostas / Cadastrar" />
            <Topic>
                <SIgnal />
                Cadastrar proposta
            </Topic>
            <StepsToolTip>
                <Button
                    style={{
                        fontSize: '0.7rem',
                        backgroundColor: step === 1 ? 'orange' : '#fff',
                        color: step === 1 ? '#fff' : 'orange',
                    }}
                >
                    Dados cliente
                </Button>
                <Button
                    style={{
                        fontSize: '0.7rem',
                        backgroundColor: step === 2 ? 'orange' : '#fff',
                        color: step === 2 ? '#fff' : 'orange',
                    }}
                >
                    Dados de consumo
                </Button>
                <Button
                    style={{
                        fontSize: '0.7rem',
                        backgroundColor: step === 3 ? 'orange' : '#fff',
                        color: step === 3 ? '#fff' : 'orange',
                    }}
                >
                    Dados complementares
                </Button>
                <Button
                    style={{
                        fontSize: '0.7rem',
                        backgroundColor: step === 4 ? 'orange' : '#fff',
                        color: step === 4 ? '#fff' : 'orange',
                    }}
                >
                    Orçamento
                </Button>
                <Button
                    style={{
                        fontSize: '0.7rem',
                        backgroundColor: step === 5 ? 'orange' : '#fff',
                        color: step === 5 ? '#fff' : 'orange',
                    }}
                >
                    Revisão
                </Button>
            </StepsToolTip>
            {step === 1 ? (
                <StepForm />
            ) : step === 2 ? (
                <h1>2</h1>
            ) : step === 3 ? (
                <h1>3</h1>
            ) : step === 4 ? (
                <h1>4</h1>
            ) : step === 5 ? (
                <h1>5</h1>
            ) : null}

            <Button
                onClick={function (event) {
                    setStep(step + 1);
                    if (step === 5) {
                        push('/Home');
                        alert('Proposta cadastrada com sucesso!');
                    }
                }}
                type={step === 5 ? 'submit' : 'button'}
                style={{
                    fontSize: '0.6rem',
                    backgroundColor: 'green',
                    width: '11%',
                    height: '1.5rem',
                    display: 'flex',
                    alignSelf: 'flex-end',
                }}
            >
                ✔ Finalizar etapa
            </Button>
            {step > 1 && (
                <Button
                    onClick={() => setStep(step - 1)}
                    type="button"
                    style={{
                        fontSize: '0.6rem',
                        backgroundColor: 'orange',
                        width: '11%',
                        height: '1.5rem',
                        display: 'flex',
                        alignSelf: 'flex-end',
                    }}
                >
                    ⬅ Voltar etapa
                </Button>
            )}
        </>
    );
}
