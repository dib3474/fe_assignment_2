import styled from 'styled-components'
import PokemonCard from './PokemonCard'

const DashboardDiv = styled.div `
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
    background-color: rgb(248, 248, 248);
    margin-bottom: 20px;
    border-radius: 10px;

  `
const DashboardTitle = styled.h2 `
    margin-bottom: 20px;
    color: red;
  `
const DashboardContent = styled.div `
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    gap: 10px;
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
            <PokeballImg src='src/assets/pokeball.png'/>
        </EmptyCard>
    );
}

const Dashboard = ({selectPoke}) => {
    const emptyPokemon = [0,0,0,0,0,0].slice(selectPoke.length);
    return (
        <DashboardDiv>
            <DashboardTitle>나만의 포켓몬</DashboardTitle>
            <DashboardContent>
                {selectPoke.map((pokemon) => {
                        return (
                            <PokemonCard pokemon={pokemon} />
                        );
                })}
                {emptyPokemon.map(() => {
                    return (
                        <EmptyPokeCard />
                    );
                })}
            </DashboardContent>
        </DashboardDiv>
    )
}

export default Dashboard