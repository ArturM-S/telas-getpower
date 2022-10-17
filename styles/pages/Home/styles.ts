import styled from '@emotion/styled';
import { media } from '../../globals';

export const Sort = styled.select`
    width: 70px;
    height: 25px;
    border: none;
    background-color: orange;
    border-radius: 12px;

    font-size: 0.7rem;
    font-weight: 500;
    color: #fff;
`;

export const ProductsBox = styled.div`
    max-height: 30%;
    display: flex;
    ${media.mobile} {
        flex-direction: column;
        flex-wrap: nowrap;
    }
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 1rem;
`;

export const CommandsBox = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;
