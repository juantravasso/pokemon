import { useEffect, useState } from "react";
import axios from "axios";
import { 
    BoxContainer, 
    BoxContentContainer, 
    IdContent, 
    ImgContent, 
    NameContent, 
    TypeAndImgContainer, 
    TypeContent, 
    PaginationContainer, 
    PaginationButton, 
    LoadingContainer 
} from "./styles";
import { palette, typeTranslations } from "../../assets/Adapter";
import * as Dialog from '@radix-ui/react-dialog';
import { CardsModal } from "../CardsModal";

interface PokemonType {
    slot: number;
    type: {
        name: string;
    };
}

interface PokemonData {
    id: number;
    name: string;
    types: PokemonType[];
    sprites: {
        front_default: string;
    };
    color: {
        name: string;
    };
    weight: number;
    height: number;
    abilities: { ability: { name: string } }[];
    stats: { base_stat: number; stat: { name: string } }[];
    description: string;
    
}

interface ContentContainerProps {
    searchQuery: string;
}

export function ContentContainer({ searchQuery }: ContentContainerProps) {
    const [allPokemonDataList, setAllPokemonDataList] = useState<PokemonData[]>([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [loading, setLoading] = useState(true);
    const pokemonsPerPage = 18;

    useEffect(() => {
        async function fetchAllPokemonData() {
            setLoading(true);
            try {
                let allPokemons: PokemonData[] = [];
                let nextUrl = 'https://pokeapi.co/api/v2/pokemon?limit=500';

                while (nextUrl && allPokemons.length < 500) {
                    const response = await axios.get(nextUrl);
                    const pokemonResults = response.data.results;

                    const promises = pokemonResults.map(async (pokemon: { url: string }) => {
                        const pokemonResponse = await axios.get(pokemon.url);
                        const speciesResponse = await axios.get(pokemonResponse.data.species.url);
                        
                        const types = pokemonResponse.data.types.map((typeEntry: { slot: number; type: { name: string } }) => ({
                            slot: typeEntry.slot,
                            type: { name: typeEntry.type.name }
                        }));
                        
                        return {
                            ...pokemonResponse.data,
                            types, 
                            color: speciesResponse.data.color,
                            description: speciesResponse.data.flavor_text_entries.find((entry: { language: { name: string } }) => entry.language.name === 'en').flavor_text,
                        };
                    });

                    const pokemons = await Promise.all(promises);
                    allPokemons = allPokemons.concat(pokemons);
                    nextUrl = response.data.next; 

                    if (allPokemons.length >= 500) {
                        allPokemons = allPokemons.slice(0, 500);
                        break;
                    }
                }

                setAllPokemonDataList(allPokemons);
            } catch (error) {
                console.error('Erro', error);
            } finally {
                setLoading(false);
            }
        }

        fetchAllPokemonData();
    }, []);

    const filteredPokemonDataList = allPokemonDataList.filter(pokemon =>
        pokemon.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    const paginatedPokemonDataList = filteredPokemonDataList.slice(
        (currentPage - 1) * pokemonsPerPage,
        currentPage * pokemonsPerPage
    );

    const handlePrevPage = () => {
        setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
    };

    const handleNextPage = () => {
        setCurrentPage((prevPage) => {
            const maxPage = Math.ceil(filteredPokemonDataList.length / pokemonsPerPage);
            return Math.min(prevPage + 1, maxPage);
        });
    };

    if (loading) {
        return <LoadingContainer>Carregando...</LoadingContainer>;
    }

    return (
        <div>
    <BoxContainer>
        {paginatedPokemonDataList.map((pokemonData) => (
            <Dialog.Root key={pokemonData.id}>
                <Dialog.Trigger asChild>
                    <BoxContentContainer bgColor={palette[pokemonData.types[0].type.name] || '#000000'}>
                        <IdContent pokemonType={pokemonData.types[0].type.name}>#{pokemonData.id}</IdContent>
                        <NameContent>{pokemonData.name.charAt(0).toUpperCase() + pokemonData.name.slice(1)}</NameContent>
                        <TypeAndImgContainer>
                            <TypeContent>
                                {pokemonData.types.map(type => (
                                    <span key={type.slot}>{typeTranslations[type.type.name] || type.type.name} <br /></span>
                                ))}
                            </TypeContent>
                            <ImgContent>
                                <img src={pokemonData.sprites.front_default} alt={pokemonData.name} />
                            </ImgContent>
                        </TypeAndImgContainer>
                            </BoxContentContainer>
                        </Dialog.Trigger>
                        <CardsModal 
                            pokemonData={{
                                id: pokemonData.id,
                                name: pokemonData.name,
                                weight: pokemonData.weight / 10,
                                height: pokemonData.height / 10,
                                mainAbility: pokemonData.abilities[0].ability.name,
                                stats: {
                                    attack: pokemonData.stats.find(stat => stat.stat.name === 'attack')?.base_stat || 0,
                                    defense: pokemonData.stats.find(stat => stat.stat.name === 'defense')?.base_stat || 0,
                                    specialAttack: pokemonData.stats.find(stat => stat.stat.name === 'special-attack')?.base_stat || 0,
                                    total: pokemonData.stats.reduce((total, stat) => total + stat.base_stat, 0),
                                },
                                color: pokemonData.color.name,
                                types: pokemonData.types
                            }}
                        />

                    </Dialog.Root>
                ))}
            </BoxContainer>

            <PaginationContainer>
                <PaginationButton onClick={handlePrevPage} disabled={currentPage === 1}>Anterior</PaginationButton>
                <PaginationButton onClick={handleNextPage} disabled={currentPage === Math.ceil(filteredPokemonDataList.length / pokemonsPerPage)}>Próximo</PaginationButton>
            </PaginationContainer>
        </div>
    );
}
