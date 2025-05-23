import styled from 'styled-components'
import PokemonCard from './PokemonCard'
import { useSelector } from 'react-redux'

const DashboardDiv = styled.div `
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
    background-color: white;
    border-radius: 10px;
  `
const DashboardTitle = styled.h2 `
    margin-bottom: 20px;
    font-size: 30px;
    color: red;
  `
const DashboardContent = styled.div `
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    gap: 20px;
    width: 100%;
    justify-content: center;
  `
const EmptyCard = styled.div `
    width: 100%;
    height: 100px;
    background-color: white;
    border: 2px dashed grey;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
  `
const PokeballImg = styled.img `
    width: 50px;
    height: 50px;
  `
const EmptyPokeCard = () => {
    return (
        <EmptyCard>
            <PokeballImg src='/pokeball.png'/>
        </EmptyCard>
    );
}

const Dashboard = () => {
    const selectPokemon = useSelector(({pokemon}) => pokemon.selectPokemon);
    const emptyPokemon = [1,2,3,4,5,6].slice(selectPokemon.length);
    return (
        <DashboardDiv>
            <DashboardTitle>나만의 포켓몬</DashboardTitle>
            <DashboardContent>
                {selectPokemon.map((pokemon) => { 
                    return <PokemonCard key={pokemon.id} pokemon={pokemon} dex={true}/> })}
                {emptyPokemon.map((e) => { 
                    return <EmptyPokeCard key={e}/> })}
            </DashboardContent>
        </DashboardDiv>
    )
}

export default Dashboard