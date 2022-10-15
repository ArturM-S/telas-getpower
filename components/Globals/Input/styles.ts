import styled from '@emotion/styled';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 8px;
`;
export const InputField = styled.input`
    width: 265px;
    height: 40px;
    border-radius: 5px;
    padding-left: 8px;
    font-weight: 400;
    font-size: 1rem;
    line-height: 1.5rem;
    color: var(--primaryTextColor);
    border: 1px solid #cfcfcf;
    padding: 0 16px;
    &::placeholder {
        color: #cfcfcf;
    }
`;

export const Label = styled.label`
    font-weight: 500;
    font-size: 0.7rem;
    line-height: 1.188rem;
`;
