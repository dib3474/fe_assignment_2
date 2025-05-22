import styled from 'styled-components'
import Dashboard from '../components/Dashboard';
import PokemonList from '../components/PokemonList';

const DexDiv = styled.div`
  display: flex;
  flex-direction: column;
  padding: 25px;
  background-color: #A8DB5B;
  gap: 25px;
`

const Dex = () => {
  return (
    <DexDiv>
      <Dashboard />
      <PokemonList />
    </DexDiv>
  )
}

export default Dex