import styled from 'styled-components';
import * as Dialog from '@radix-ui/react-dialog';
import { palette } from '../../assets/Adapter';

interface IdContentProps {
    pokemonType: string;
}

interface InternalReatangleValueTypeProps {
    widthPercentage: number;
    isTotal?: boolean; 
}

export const Overlay = styled(Dialog.Overlay)`
    background-color: rgba(0, 0, 0, 0.5);
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
`;

export const Content = styled(Dialog.Content)`
    background-color: white;
    border-radius: 8px;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 80%;
    max-width: 796.73px;
    height: 80%;
    max-height: 371px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`;

export const CloseButton = styled(Dialog.Close)`
    background: none;
    border: none;
    cursor: pointer;
    width: 31.52px;
    position: relative;
    top: -45px;
    left: 110%;
`;

export const ImgCardContainer = styled.div<{ backgroundColor: string }>`
    background-color: ${props => props.backgroundColor};
    background-size: cover;
    background-position: center;
    width: 50%;
    height: 100%;
    border-radius: 8px; 
    box-shadow: 10px 0 10px -5px rgba(0, 0, 0, 0.3);
`;

export const ImgCard = styled.img`
    width: 342.76px;
    height: 304.39px;
    top: 38.63px;
    left: 11.12px;

`;

export const CardText = styled.div`
    width: 50%;
    display: flex;
    flex-direction: column;
    font-family: Arial, Helvetica, sans-serif;
    padding: 0 0 0 20px;
    margin-right: 70px;
`;

export const TitleCard = styled(Dialog.Title)`
    font-size: 36px;
    margin-bottom: 5px;
`;

export const IdCard = styled.p<IdContentProps>`
    font-size: 24px;
    font-weight: 400;
    line-height: 30.17px;
    text-align: center;
    margin-right: -18%;
    color: ${({ pokemonType }) => `${palette[`${pokemonType}Light`]}` || 'aliceblue'};
`;

export const TitleAndIdCard = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: -45px;
`;

export const DescriptionCard = styled(Dialog.Description)`
    font-size: 14px;
    line-height: 21px;
    margin-top: 0px;
    margin-bottom: 5px;
    text-align: justify;
`;

export const InformationsCard = styled.div`
    display: grid; 
    grid-template-columns: repeat(3, 1fr); 
    margin-left: -20px;
    margin-top: -7px;

`;

export const WeightPokemonContainer = styled.div`
`;

export const WeightPokemon = styled.p`
    text-align: center;
`;

export const WeightPokemonType = styled.p`
    font-size: 10px;
    text-align: center;
    color: #767676;
`;

export const HeightPokemonContainer = styled.div`
    border-left: 1px solid #E0E0E0;
    border-right: 1px solid #E0E0E0;
`;

export const HeightPokemon = styled.p`
    text-align: center;
`;

export const HeightPokemonType = styled.p`
    font-size: 10px;
    text-align: center;
    color: #767676;
`;

export const PowerPokemonContainer = styled.div`
`;

export const PowerPokemon = styled.p`
    text-align: center;
`;

export const PowerPokemonType = styled.p`
    font-size: 10px;
    text-align: center;
    color: #767676;
`;

export const TypeInformationContainer = styled.div`
    display: grid; 
    grid-template-columns: repeat(3, 1fr); 
    line-height: 0%;
    font-size: 14px;

`;

export const TypeInformation = styled.p`
    
`;

export const ValueTypeInformation = styled.p`

`;

export const RectangleValueType = styled.div`
    width: 200px;
    height: 3px;
    border-radius: 10px;
    opacity: 90%;
    background: #d3d3d3;
    margin-top: 13px;
`;

export const InternalReatangleValueType = styled.div<InternalReatangleValueTypeProps>`
    background-color: green;
    max-width: ${props => props.isTotal ? `${props.widthPercentage / 5}%` : `${props.widthPercentage}%`};
    height: 3px;
    border-radius: 10px;
    
`;
