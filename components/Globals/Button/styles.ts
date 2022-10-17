import styled from '@emotion/styled';

interface IContainerProps {
    width?: string;
}

export const Container = styled.button<IContainerProps>`
    display: flex;
    justify-content: center;
    align-items: center;

    background-color: orange;

    border: none;
    border-radius: 5px;

    height: 40px;

    padding: 8px 16px;

    color: #fff;
    font-weight: 500;
    font-size: 1rem;
    line-height: 1.5rem;

    cursor: pointer;

    :hover {
        background-color: #fbbf77;
    }
`;
