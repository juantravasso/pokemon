import { HeaderContainer, HeaderContent, HeaderLinkHome, HeaderLinkPokemon } from "./styles";
import logoImg from '../../assets/logo.svg';

export function Header() {
    return(
        <HeaderContainer>
            <HeaderContent>
                <img src={logoImg} alt="" />
                <HeaderLinkHome href="http://localhost:3000/">Home</HeaderLinkHome>
                <HeaderLinkPokemon href="http://localhost:3000/pokemons">Pokemons</HeaderLinkPokemon>
                
            </HeaderContent>
        </HeaderContainer>
    )
}