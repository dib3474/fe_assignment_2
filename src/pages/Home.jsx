import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'

const HomeDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100vh;
    gap: 50px;
    background-color: #A8DB5B;
`
const HomeImg = styled.img`
    width: 600px;
    height: auto;
`
const HomeBtn = styled.button`
    padding: 10px 25px;
    font-size: 18px;
    border: none;
    border-radius: 5px;
    background-color: red;
    color: white;
    cursor: pointer;
`

const Home = () => {
    const navigate = useNavigate();
    return (
        <HomeDiv>
            <HomeImg src="/pokemon-logo.png"/>
            <HomeBtn onClick={() => {navigate('/dex')}}>포켓몬 도감 시작하기</HomeBtn>
        </HomeDiv>
    )
}

export default Home