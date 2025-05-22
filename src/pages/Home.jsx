import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const HomeDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100vh;
    gap: 20px;
`
const HomeImg = styled.img`
    width: 600px;
    margin-bottom: 20px;
`
const HomeBtn = styled.button`
    padding: 10px 20px;
    font-size: 18px;
    cursor: pointer;
    border-radius: 5px;
    background-color: red;
    color: white;
    border: none;
    transition: background-color 0.3s;
    &:hover {
        background-color: rgb(200, 0, 0);
    }
`

const Home = () => {
  return (
    <HomeDiv>
        <HomeImg src="src/assets/pokemon-logo.png"/>
        <Link to="/Dex">
            <HomeBtn>포켓몬 도감 시작하기</HomeBtn>
        </Link>
    </HomeDiv>
  )
}

export default Home