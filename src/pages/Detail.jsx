import styled from "styled-components"
import MOCK_DATA from "../assets/mock.js";
import { useNavigate, useParams } from "react-router-dom";

const DetailDiv = styled.div`
    height: 95vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 20px;
`
const DetailImg = styled.img`
    width: 200px;
    height: auto;
`
const DetailTitle = styled.h2`
    color: red;
`
const DetailContent = styled.p`
    color: black;
`
const DetailBtn = styled.button`
    background-color: black;
    color: white;
    border-radius: 10px;
    padding: 10px 15px;
`
const Detail = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [pokemon] = MOCK_DATA.filter((e) => e.id == id );
    const {img_url, korean_name, types, description} = pokemon;
    return (
        <DetailDiv key={id}>
            <DetailImg src={img_url}/>
            <DetailTitle>
                {korean_name}
            </DetailTitle>
            <DetailContent>타입 : {types.join(", ")}
            </DetailContent>
            <DetailContent>
                {description}
            </DetailContent>
            <DetailBtn onClick={() => {navigate('/dex')}}>뒤로 가기</DetailBtn>
        </DetailDiv>
  )
}

export default Detail