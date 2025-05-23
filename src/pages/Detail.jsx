import styled from "styled-components"
import MOCK_DATA from "../assets/mock.js";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addPokemon, removePokemon } from "../redux/slices/pokemonSlices.js";

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
const BtnDiv = styled.div`
    display: flex;
    justify-content: center;
    gap: 10px;
`
const BackBtn = styled.button`
    background-color: black;
    color: white;
    border-radius: 10px;
    padding: 10px 15px;
    cursor: pointer;
`
const AddBtn = styled.button`
    background-color: red;
    color: white;
    border-radius: 10px;
    padding: 10px 30px;
    cursor: pointer;
`
const Detail = () => {
    const selectPokemon = useSelector(({pokemon}) => pokemon.selectPokemon);
    const dispatch = useDispatch();
    const [ searchParams ] = useSearchParams();
    const id = searchParams.get("id");
    const isInSelectPokemon = selectPokemon.find((element) => {
        if (element.id === Number(id)) return true;
        else return false;
    });
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
            <BtnDiv>
                <AddBtn onClick={() => {
                    (isInSelectPokemon) ? dispatch(removePokemon(pokemon)) : dispatch(addPokemon(pokemon));
                    navigate('/dex')}}>{(isInSelectPokemon) ? "삭제" : "추가"}</AddBtn>
                <BackBtn onClick={() => {navigate('/dex')}}>뒤로 가기</BackBtn>
            </BtnDiv>
        </DetailDiv>
  )
}

export default Detail