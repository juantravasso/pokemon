import { useState } from "react";
import { Header } from "../../componenents/Header";
import { HeaderContainer } from "../../componenents/Header/styles";
import { ContentContainer } from "../../componenents/Content";
import { SearchForm } from "../../componenents/SearchForm";
import { SummaryContainer } from "../../componenents/Summary";

const Pokemons: React.FC = () => {
    const [searchQuery, setSearchQuery] = useState("");

    return (
        <div>
            <HeaderContainer>
                <Header />
            </HeaderContainer>
            <SummaryContainer/>
            <SearchForm setSearchQuery={setSearchQuery} />
        
            <ContentContainer searchQuery={searchQuery} />
        </div>
    );
}

export default Pokemons;

