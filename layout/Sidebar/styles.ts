import styled from '@emotion/styled';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    height: 100vh;
    width: 350px;
    background-color: #01010d;
    color: #f1f1f1;
    padding: 1rem;
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
