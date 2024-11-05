import React from "react";
import { Header } from "../../componenents/Header";
import { HeaderContainer } from "../../componenents/Header/styles";
import { ContainerBody } from "../../componenents/Body";

const Home: React.FC = () => {
    return (
        <div>
            <HeaderContainer>
                <Header/>
            </HeaderContainer>

            <ContainerBody/>
        </div>
    );
};

export default Home;
