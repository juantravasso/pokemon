import styled from "styled-components";
import { palette } from "../../assets/Adapter";

interface BoxContentContainerProps {
    bgColor: string;
}

interface IdContentProps {
    pokemonType: string;
}

export const LoadingContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 200px; 
    font-size: 24px;
    font-weight: bold;
    color: #333;
`;

export const BoxContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    margin: 0px 80px 0px 130px;
`;

export const BoxContentContainer = styled.button<BoxContentContainerProps>`
    background: ${({bgColor}) => bgColor};
    width: 162px;
    height: 110px;
    border-radius: 15px;
    margin-bottom: 10px;
    font-family: Arial, Helvetica, sans-serif;
    border: none; 
    cursor: pointer; 
    font-weight: bold;
    box-shadow: 0px 0px 8px 5px rgba(0, 0, 0, 0.05);
`;

export const NameContent = styled.p`
    font-size: 16px;
    margin-right: 60px;
    margin-bottom: -17px;
    color: white;
`;

export const IdContent = styled.p<IdContentProps>`
    margin-left: 120px;
    line-height: 0%;
    color: ${({ pokemonType }) => `${palette[`${pokemonType}Light`]}` || 'aliceblue'};
`;


export const TypeContent = styled.p`
    font-size: 12px;
    color: white; 
`;


export const TypeAndImgContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 10px;
`;

export const ImgContent = styled.div`
    display: flex;
    justify-content: right;
    margin-left: 30px;
    height: 100%;
    width: 100%;

    img {
        max-width: 80px;
        max-height: 80px;
    }
`;

export const PaginationContainer = styled.div`
    display: flex;
    justify-content: center;
    margin: 20px 0;
`;

export const PaginationButton = styled.button`
    background-color: #46A487;
    color: white;
    border: none;
    border-radius: 5px;
    padding: 10px 20px;
    margin: 0 10px;
    cursor: pointer;
    
    &:disabled {
        background-color: #ccc;
        cursor: not-allowed;
    }
`;