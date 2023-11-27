import React from "react";
import { CardContainer, Container, HeaderMain, MainContainer, SearchContainer } from "./styles";
import Card from "../Card/Card";
import { pokeProps } from "../../types/types";

const Main = ({pokemon}: {pokemon: pokeProps[]}) => {
  
  //console.log(pokemon)

  return (
    <MainContainer>
      <Container>
        <SearchContainer>
          <input type="search" placeholder="Digite aqui sua busca..." />
          <img src={require("./../../assets/lupa.png")} alt="lupa" />
        </SearchContainer>
      </Container>

      <HeaderMain>
        <h2>Resultado de busca</h2>
        <button>Novo Card</button>
      </HeaderMain>

      <CardContainer>
        {pokemon.map((pkm,index) => (
          <Card name={pkm.name} key={index} sprite={pkm.sprite}/>
        ))}
      </CardContainer>
    </MainContainer>
  );
};

export default Main;
