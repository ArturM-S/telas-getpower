import styled from '@emotion/styled';
import { media } from '../../styles/globals';

interface ContainerProps {
    isSidebarOpen: boolean;
}

export const MenuIcon = styled.button`
    visibility: hidden;
    ${media.mobile} {
        height: 20px;
        width: 45px;
        visibility: visible;
        position: absolute;
        top: 30px;
        background-color: transparent;
        color: #fff;
        font-size: 0.7rem;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: #000;
        border-radius: 5px;
        box-shadow: 0 0 5px #000;
    }
    border: none;
    color: #fff;
`;
export const Container = styled.div<ContainerProps>`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    height: 100vh;
    width: 350px;
    background-color: #01010d;
    color: #f1f1f1;
    padding: 1rem;
    ${media.mobile} {
        position: absolute;
        display: ${({ isSidebarOpen }) => (isSidebarOpen ? 'flex' : 'none')};
    }
`;

export const NavLogoBox = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
`;

export const NavLogo = styled.img`
    height: 1rem;
    width: 1rem;
`;
export const ProfileInfos = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;
export const Picture = styled.img`
    height: 80px;
    width: 80px;
    border-radius: 50%;
    border: 1px solid #f1f1f1;
`;
export const ProfileName = styled.h1`
    font-size: 1rem;
    font-weight: 400;
`;
export const ProfileEmail = styled.h2`
    font-size: 0.7rem;
    font-weight: 300;
`;
export const NavMenu = styled.div`
    color: orange;
`;
export const NavMenuItem = styled.div`
    display: flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.5rem;
    color: #f1f1f1;
    :hover {
        background-color: #3b3b3b4d;
        filter: brightness(0.9);
    }
`;

export const DropDownIcon = styled.h1`
    font-size: 1rem;
    font-weight: 400;
    color: #f1f1f1;
    display: flex;

    align-self: flex-end;
`;
