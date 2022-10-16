import styled from '@emotion/styled';

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
    max-height: 100%;
    width: 100%;
    min-height: 100vh;
    height: 100vh;
    display: flex;
    flex-direction: column;

    gap: 1rem;

    padding: 1rem;

    background-color: #ebecf0;
    overflow: auto;
`;
