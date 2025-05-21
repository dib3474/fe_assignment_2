import styled from "styled-components"

const Card = styled.div `
    border: 1px solid grey;
    background-color: white;
    border-radius: 10px;
    overflow: hidden;
    box-shadow: rgba(0,0,0,0.1) 0px 4px 8px;
    text-align: center;
    padding: 10px;
    cursor: pointer;
    transition: transform 0.2s, box-shadow 0.2s;
`
const CardImg = styled.img `
    width: 100px;
    height: 100px;
`
const CardContent = styled.div `
    margin-top: 10px;
`
const CardName = styled.p `
    font-size: 14px;
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
    padding: 5px 10px;
    font-size: 12px;
    cursor: pointer;
    border: none;
    background-color: red;
    color: white;
    border-radius: 5px;
`

const PokemonCard = ({pokemon}) => {
    const {img_url, id, korean_name} = pokemon;
    return (
        <Card>
            <CardImg src={img_url}/>
            <CardContent>
                <CardName>{korean_name}</CardName>
                <CardId>No. {id.toString().padStart(3, '0')}</CardId>
            </CardContent>
            <CardBtn>삭제</CardBtn>
        </Card>
    )
}

export default PokemonCard