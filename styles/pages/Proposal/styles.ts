import styled from '@emotion/styled';
import { media } from '../../globals';

export const Topic = styled.h1`
    display: flex;
    align-items: center;
    gap: 1rem;
    font-size: 1rem;
    font-weight: 500;
    color: #000;
`;

export const SIgnal = styled.div`
    width: 5%;
    height: 40%;

    border-radius: 5px;

    background-color: orange;
`;

export const StepsToolTip = styled.div`
    ${media.mobile} {
        flex-wrap: wrap;
    }

    display: flex;
    padding: 1rem;
    align-items: center;
    gap: 1rem;

    background-color: #fff;
`;
