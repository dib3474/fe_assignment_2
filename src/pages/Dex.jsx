import { useState } from 'react';
import styled from 'styled-components'
import Dashboard from '../components/Dashboard';
import PokemonList from '../components/PokemonList';
import MOCK_DATA from "../assets/mock.js";

const DexDiv = styled.div`
  display: flex;
  flex-direction: column;
  padding: 25px;
  background-color: #A8DB5B;
  gap: 25px;
`

const Dex = () => {
  const [selectPokemon, setSelectPokemon] = useState([]);
  const addPokemon = (pokemon) => {
    if (selectPokemon.length === 6) {
      alert("더 이상 선택할 수 없습니다.");
      return ;
    }
    if (selectPokemon.find((element) => element === pokemon)) {
      alert("이미 선택된 포켓몬입니다.");
      return ;
    }
    setSelectPokemon([...selectPokemon, pokemon]);
  }
  const removePokemon = (pokemon) => {
    setSelectPokemon(selectPokemon.filter((dex)=> {
      if (pokemon.id !== dex.id) return dex;
    }));
  }
  return (
    <DexDiv>
      <Dashboard selectPokemon={selectPokemon} removePokemon={removePokemon}/>
      <PokemonList MOCK_DATA={MOCK_DATA} addPokemon={addPokemon}/>
    </DexDiv>
  )
}

export default Dex