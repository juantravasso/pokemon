import styled from "styled-components";

export const Container = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: stretch;
    max-width: 1180px;
    margin: 0 auto;
    margin-left: 20px; 
    margin-right: 20px;
`;

export const ImageBody = styled.div`
    
    width: 100%;
    max-width: 576px; 
    padding: 0.25rem;
    display: flex;
    align-items: center;
    justify-content: center;

    img {
        object-fit: cover; 
    }
`;

export const ContainerTextBody = styled.div`
    
    max-width: 300px;
`;

export const TitleBody = styled.h1`
    font-size: 45px;
    font-family: Arial, Helvetica, sans-serif;
    color: #282828;
`;

export const TextBody = styled.p`
    font-size: 16px;
    line-height: 30px;
    font-family: Arial, Helvetica, sans-serif;
`;

export const ButtonBody = styled.button`
    margin-top: 10px;
    background-color: #48D0B0;
    color: white;
    border: 0;
    border-radius: 8px;
    padding: 1.25rem;
    cursor: pointer;
    font-weight: bold;
    font-size: 20px;
    transition: 0.2s;

    &:hover {
        background-color: #00A5B0 ;
}
 ;

`;

export const YellowStyle = styled.div`
  background-color: #ffe62d;
  display: inline-block;
`;
