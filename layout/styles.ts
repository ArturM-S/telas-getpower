import styled from '@emotion/styled';
import { media } from '../styles/globals';

export const Container = styled.section`
    max-height: 100vh;
    max-width: 100vw;
    display: flex;
    overflow: hidden;
`;

export const Main = styled.main`
    height: 100%;
    width: 80%;
    display: flex;
    flex-direction: column;
`;

export const Content = styled.div`
    ${media.mobile} {
        width: 100vw;
    }
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;

    gap: 1rem;

    padding: 1rem;

    background-color: #ebecf0;
    overflow: auto;
`;
