import styled from "styled-components"
import PokemonCard from "./PokemonCard";
import MOCK_DATA from "../assets/mock";

const ListDiv = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
    gap: 20px;
    background-color: white;
    padding: 20px;
    border: none;
    border-radius: 10px;
`

const PokemonList = () => {
  return (
    <ListDiv>
        {MOCK_DATA.map((pokemon) => {
            return (<PokemonCard key={pokemon.id} pokemon={pokemon}/>);
        })}
    </ListDiv>
  )
}

export default PokemonList