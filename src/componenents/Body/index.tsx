import bodyImg from '../../assets/body.svg';
import { ImageBody, Container, ContainerTextBody, TitleBody, TextBody, ButtonBody, YellowStyle } from './styles';
import { Link } from 'react-router-dom';

export function ContainerBody() {
    return(
        <Container>
        
        <ContainerTextBody>

        <TitleBody>Qual Pokémon você <YellowStyle>escolheria</YellowStyle>?</TitleBody>

        <TextBody>
        Você pode saber o tipo de Pokémon, seus pontos fortes, fracos e habilidades.
        </TextBody>

        <Link to="http://localhost:3000/pokemons">
        <ButtonBody >Veja os pokemons</ButtonBody>
        </Link>

        </ContainerTextBody>

        <ImageBody>
            <img src={bodyImg} alt="" />  
        </ImageBody>
        
    </Container>
    )
}



