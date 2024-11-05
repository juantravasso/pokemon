import React, { useEffect, useState } from 'react';
import * as Dialog from '@radix-ui/react-dialog';
import { useTranslation } from 'react-i18next';
import { Content, Overlay, CardText, TitleCard, DescriptionCard, TitleAndIdCard, IdCard, CloseButton, InformationsCard, WeightPokemonContainer, WeightPokemon, WeightPokemonType, HeightPokemonContainer, HeightPokemon, HeightPokemonType, PowerPokemonContainer, PowerPokemon, PowerPokemonType, TypeInformation, ValueTypeInformation, RectangleValueType, TypeInformationContainer, ImgCardContainer, ImgCard, InternalReatangleValueType } from './styles';
import Close from '../../assets/close.svg';
import Height from '../../assets/Height.svg';
import Weight from '../../assets/Weight.svg';
import { palette, translateAbility, translateDescription } from "../../assets/Adapter";

interface PokemonData {
    id: number;
    name: string;
    weight: number;
    height: number;
    mainAbility: string;
    stats: {
        attack: number;
        defense: number;
        specialAttack: number;
        total: number;
    };
    color: string; 
    types: PokemonType[];
}

interface CardsModalProps {
    pokemonData: PokemonData;
}

interface FlavorTextEntry {
    flavor_text: string;
    language: {
        name: string;
    };
}

interface PokemonType {
    type: {
        name: string;
    };
}

export function CardsModal({ pokemonData }: CardsModalProps) {
    const { t } = useTranslation();
    const [pokemonImage, setPokemonImage] = useState<string | null>(null);
    const [description, setDescription] = useState<string>(''); 

    async function fetchPokemonImage(id: number): Promise<string> {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
        const data = await response.json();
        return data.sprites.other['official-artwork'].front_default;
    }

    async function fetchDescription(url: string) {
        try {
            const response = await fetch(url);
            const data = await response.json();
    
            const flavorTextEntries: FlavorTextEntry[] = data.flavor_text_entries;
    
            const descriptionEntry = flavorTextEntries.find(entry => entry.language.name === 'en');
    
            const descriptionText = descriptionEntry ? descriptionEntry.flavor_text : 'Descrição não disponível';
    
            setDescription(descriptionText);
        } catch (error) {
            console.error('Erro ao buscar a descrição do Pokémon:', error);
            setDescription('Descrição não disponível');
        }
    }

    useEffect(() => {
        async function fetchImage() {
            const imageUrl = await fetchPokemonImage(pokemonData.id);
            setPokemonImage(imageUrl);
        }
        fetchImage();
    }, [pokemonData.id]);

    useEffect(() => {
        fetchDescription(`https://pokeapi.co/api/v2/pokemon-species/${pokemonData.id}`); 
    }, [pokemonData.id]);

    return (
        <Dialog.Portal>
            <Overlay />
            <Content>
                <ImgCardContainer backgroundColor={palette[pokemonData.types[0].type.name] || '#A8A878'}>
                    {pokemonImage ? (
                        <ImgCard src={pokemonImage} alt={`Imagem de ${pokemonData.name}`} />
                    ) : (
                        <span>error</span>
                    )}
                </ImgCardContainer>
                <CardText>
                    <CloseButton asChild>
                        <img src={Close} alt="Ícone de fechar" />
                    </CloseButton>

                    <TitleAndIdCard>
                        <TitleCard>{pokemonData.name.charAt(0).toUpperCase() + pokemonData.name.slice(1)}</TitleCard>
                        <IdCard pokemonType={pokemonData.types[0].type.name}># {String(pokemonData.id).padStart(3, '0')}</IdCard>
                    </TitleAndIdCard>

                    <DescriptionCard>
                        {translateDescription(description, pokemonData.id)}
                    </DescriptionCard>

                    <InformationsCard>
                        <WeightPokemonContainer>
                            <WeightPokemon>
                                <img src={Weight} alt="Ícone de peso" /> {pokemonData.weight} kg
                            </WeightPokemon>
                            <WeightPokemonType>Peso</WeightPokemonType>
                        </WeightPokemonContainer>

                        <HeightPokemonContainer>
                            <HeightPokemon>
                                <img src={Height} alt="Ícone de Altura" /> {pokemonData.height} m
                            </HeightPokemon>
                            <HeightPokemonType>Altura</HeightPokemonType>
                        </HeightPokemonContainer>

                        <PowerPokemonContainer>
                            <PowerPokemon>{translateAbility(pokemonData.mainAbility)}</PowerPokemon>
                            <PowerPokemonType>Poder Principal</PowerPokemonType>
                        </PowerPokemonContainer>
                        
                    </InformationsCard>
                    <TypeInformationContainer>
                        <TypeInformation>Ataque</TypeInformation>
                        <ValueTypeInformation>{pokemonData.stats.attack}</ValueTypeInformation>
                        <RectangleValueType>
                            <InternalReatangleValueType 
                                widthPercentage={pokemonData.stats.attack}
                            />
                        </RectangleValueType>
                        
                        <TypeInformation>Defesa</TypeInformation>
                        <ValueTypeInformation>{pokemonData.stats.defense}</ValueTypeInformation>
                        <RectangleValueType>
                            <InternalReatangleValueType 
                                widthPercentage={pokemonData.stats.defense}
                            />
                        </RectangleValueType>

                        <TypeInformation>Vl.Ataque</TypeInformation>
                        <ValueTypeInformation>{pokemonData.stats.specialAttack}</ValueTypeInformation>
                        <RectangleValueType>
                            <InternalReatangleValueType 
                                widthPercentage={pokemonData.stats.specialAttack}
                            />
                        </RectangleValueType>

                        <TypeInformation>Total</TypeInformation>
                        <ValueTypeInformation>{pokemonData.stats.total}</ValueTypeInformation>
                        <RectangleValueType>
                            <InternalReatangleValueType 
                                widthPercentage={pokemonData.stats.total} 
                                isTotal={true}  
                            />
                        </RectangleValueType>
                    </TypeInformationContainer>
                </CardText>
            </Content>
        </Dialog.Portal>
    );
}

