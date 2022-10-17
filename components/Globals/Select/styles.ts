import styled from '@emotion/styled';

interface InputBaseProps {
    inputWidth?: string;
}
export const Container = styled.div`
    display: flex;
    flex-direction: column;

    gap: 8px;
`;
export const InputBase = styled.select<InputBaseProps>`
    cursor: pointer;

    width: ${props => (props.inputWidth ? props.inputWidth : '265px')};
    max-width: 352px;

    height: 40px;

    border-radius: 5px;

    padding-left: 8px;

    font-weight: 400;
    font-size: 1rem;
    line-height: 1.5rem;

    display: flex;
    align-items: center;

    transition: 0.2s;

    button {
        padding-right: 30px !important;
    }
`;

export const Label = styled.label`
    font-weight: 400;
    font-size: 0.8rem;
    line-height: 1.188rem;
`;
