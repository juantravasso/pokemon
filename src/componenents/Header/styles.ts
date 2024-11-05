import styled from "styled-components";

export const HeaderContainer = styled.header`
    background-color: #F5F5F5;
    padding: 6px;
`;

export const HeaderContent = styled.div `
width: 100%;
max-width: 1100px;
margin: 0 auto;
display: flex;
justify-content: space-between;
align-items: center;
`;

export const HeaderLinkHome = styled.a`
font-size: 23px;
font-family: Arial, Helvetica, sans-serif;
color: #707070;
text-decoration: none;
transition: 0.3s;
font-weight: bold;

&:hover {
    color: black;
}
`;

export const HeaderLinkPokemon = styled.a`
font-size: 23px;
font-family: Arial, Helvetica, sans-serif;
color: #707070;
text-decoration: none;
transition: 0.3s;
font-weight: bold;

&:hover {
    color: black;
}
`;


