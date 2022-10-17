import styled from '@emotion/styled';
import { media } from '../../globals';

export const Container = styled.div`
    height: 100vh;
    width: 100vw;

    display: flex;

    background-color: #fff;

    overflow: hidden;
`;

export const FormSide = styled.div`
    height: 100%;
    width: 50%;
    ${media.mobile} {
        align-items: center;
        width: 100%;
        padding: 0;
        gap: 0.5rem;
    }
    ${media.laptop} {
        padding-left: 15%;
    }
    display: flex;
    flex-direction: column;
    justify-content: center;

    gap: 1rem;

    padding-left: 25%;
`;

export const ImageSide = styled.div`
    ${media.mobile} {
        display: none;
    }
    height: 100%;
    width: 50%;

    img {
        height: 100%;
        width: 100%;
    }
`;

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    gap: 1rem;
`;

export const Logo = styled.img`
    height: 50px;
    width: 50px;
`;

export const Title = styled.h1`
    font-size: 1rem;
    font-weight: 400;
    color: #000;
    margin-top: 1rem;
`;

export const Text = styled.h2`
    font-size: 0.7rem;
    font-weight: 300;
    color: #000;
    margin-top: 1rem;
    display: flex;
    gap: 0.5rem;
`;

export const RememberMe = styled.div`
    display: flex;
    align-items: center;
    gap: 0.5rem;

    font-size: 0.7rem;
    font-weight: 300;
    color: #b8b8b8;
    margin-top: 1rem;
`;

export const ButtonBox = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 265px;
`;

export const FormFooter = styled.div`
    display: flex;
    flex-direction: column;
    align-self: flex-start;
    ${media.mobile} {
        align-self: center;
    }
`;

export const Meanings = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const Terms = styled.div`
    display: flex;
    align-items: center;
    gap: 0.5rem;
`;
