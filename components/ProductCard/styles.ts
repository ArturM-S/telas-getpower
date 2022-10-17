import styled from '@emotion/styled';
import { media } from '../../styles/globals';

interface ITagProps {
    type: string;
}

export const Container = styled.div`
    ${media.mobile} {
        min-width: 100%;
    }
    width: 30%;
    max-width: 30%;
    display: flex;
    flex-direction: column;

    padding: 20px 0;

    border-radius: 5px;
    gap: 0.5rem;

    background-color: #fff;
`;

export const CardHead = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 20px;
`;

export const Tag = styled.div<ITagProps>`
    display: flex;

    background-color: ${props =>
        props.type === 'curso' ? '#f0f8ff' : '#fec1114d'};

    border-radius: 10px;
    padding: 0 5px;
`;

export const Price = styled.h1`
    font-size: 1rem;
    font-weight: 400;
    color: orange;
`;

export const ProductInfo = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 0 20px;
`;

export const ProductName = styled.h1`
    font-size: 1rem;
    font-weight: 400;
    color: #000;
    margin-top: 1rem;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
`;

export const ProductDescription = styled.h2`
    font-size: 0.7rem;
    font-weight: 300;
    color: #000;
    margin-top: 1rem;
    display: flex;
    gap: 0.5rem;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
`;

export const ProductImage = styled.img`
    width: 100%;
    height: 50%;
`;

export const AccessButton = styled.button`
    width: 70px;
    height: 25px;
    border: none;
    background-color: #01010d;
    border-radius: 12px;
    color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 20px;

    align-self: flex-end;
`;
