import styled from "styled-components"
import PokemonCard from "./PokemonCard";

const ListDiv = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
    gap: 20px;
    background-color: white;
    padding: 20px;
    border: none;
    border-radius: 10px;
`

const PokemonList = ({MOCK_DATA, addPokemon}) => {
  return (
    <ListDiv>
        {MOCK_DATA.map((pokemon) => {
            return (<PokemonCard pokemon={pokemon} addPokemon={addPokemon} removePokemon={null}/>);
        })}
    </ListDiv>
  )
}

export default PokemonList