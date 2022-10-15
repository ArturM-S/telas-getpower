import styled from '@emotion/styled';
import { css } from '@emotion/react';

interface IContainerProps {
    isLoading?: boolean;
}

export const Container = styled.button<IContainerProps>`
    display: flex;
    justify-content: center;
    align-items: center;

    background-color: orange;

    border: none;
    border-radius: 5px;

    height: 40px;
    width: 80px;

    padding: 8px 16px;

    color: #fff;
    font-weight: 500;
    font-size: 1rem;
    line-height: 1.5rem;

    cursor: pointer;

    :hover {
        background-color: #fbbf77;
    }

    ${props =>
        props.isLoading &&
        css`
            display: flex;
            justify-content: center;
            align-items: center;
        `}
`;
