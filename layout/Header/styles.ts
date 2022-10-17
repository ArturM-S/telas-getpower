import styled from '@emotion/styled';
import { media } from '../../styles/globals';

export const Container = styled.div`
    ${media.mobile} {
        min-width: 100vw;
        min-height: 35px;
    }
    height: 24px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 1rem;
    background-color: #fff;
`;

export const ProfileMenu = styled.div`
    display: flex;
    align-items: center;
    gap: 1rem;
`;
