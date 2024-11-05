import { useState } from "react";
import { SearchFormContainer, InputContainer, SummaryInput, SummaryButton } from "./styles";
import LupaImg from '../../assets/lupa.svg';

interface SearchFormProps {
    setSearchQuery: (query: string) => void;
}

export function SearchForm({ setSearchQuery }: SearchFormProps) {
    const [inputValue, setInputValue] = useState("");

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(event.target.value);
    };

    const handleSearch = () => {
        setSearchQuery(inputValue);
    };

    return (
        <SearchFormContainer>
            <InputContainer>
                <SummaryInput 
                    placeholder="Pesquisar pokémon" 
                    onChange={handleInputChange} 
                    value={inputValue}
                />
                <SummaryButton type="button" onClick={handleSearch}>
                    <img src={LupaImg} alt="Ícone de busca" />
                </SummaryButton>
            </InputContainer>
        </SearchFormContainer>
    );
}