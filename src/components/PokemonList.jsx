import styled from "styled-components"
import PokemonCard from "./PokemonCard";

const ListDiv = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
    gap: 20px;
    background-color: rgb(248, 248, 248);
    padding: 20px;
    border: 1px solid rgb(239, 239, 239);
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