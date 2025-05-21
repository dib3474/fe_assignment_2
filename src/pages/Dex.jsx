import { useState } from 'react';
import styled from 'styled-components'
import Dashboard from '../components/Dashboard';
import PokemonList from '../components/PokemonList';

const DexDiv = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
`

const Dex = () => {
  const [selectPoke, setSelectPokemon] = useState([{img_url: "imgurl", id: 1, korean_name:'이상해씨'}]);
  return (
    <DexDiv>
      <Dashboard selectPoke={selectPoke}/>
      <PokemonList />
    </DexDiv>
  )
}

export default Dex