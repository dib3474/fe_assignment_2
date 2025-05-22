import { useNavigate } from "react-router-dom"
import styled from "styled-components"

const Card = styled.div `
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border: 1px solid grey;
    border-radius: 10px;
    overflow: hidden;
    box-shadow: rgba(0,0,0,0.1) 0px 1px 1px;
    padding: 10px;
    cursor: pointer;
`
const CardImg = styled.img `
    width: 100px;
    height: 100px;
`
const CardContent = styled.div `
    margin-top: 10px;
`
const CardName = styled.p `
    font-size: 15px;
    font-weight: bold;
    margin: 5px 0px;
    color: black;
`
const CardId = styled.p `
    font-size: 12px;
    color: grey;
`
const CardBtn = styled.button`
    margin-top: 10px;
    padding: 5px 15px;
    font-size: 11px;
    cursor: pointer;
    background-color: red;
    color: white;
    border: none;
    border-radius: 5px;
`

const PokemonCard = ({pokemon, addPokemon, removePokemon}) => {
    const {img_url, id, korean_name} = pokemon;
    const navigate = useNavigate();
    return (
        <Card key={id} onClick={() => {
            navigate(`/detail/${id}`);
        }} >
            <CardImg src={img_url}/>
            <CardContent>
                <CardName>{korean_name}</CardName>
                <CardId>No. {id.toString().padStart(3, '0')}</CardId>
            </CardContent>
            <CardBtn onClick={(e) => {
                e.stopPropagation();
                (addPokemon) ? addPokemon(pokemon) : removePokemon(pokemon);
            }}>{(addPokemon) ? "추가" : "삭제"}</CardBtn>
        </Card>
    )
}

export default PokemonCard