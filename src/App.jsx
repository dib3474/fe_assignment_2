import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { createContext, useState } from "react";
import Home from './pages/Home'
import Dex from './pages/Dex'
import Detail from './pages/Detail'

export const PokemonContext = createContext(null);

const App = () => {
  const [selectPokemon, setSelectPokemon] = useState([]);
  const addPokemon = async(pokemon) => {
    if (selectPokemon.length === 6) {
      alert("더 이상 선택할 수 없습니다.");
      return ;
    }
    if (selectPokemon.find((element) => element === pokemon)) {
      alert("이미 선택된 포켓몬입니다.");
      return ;
    }
    setSelectPokemon([...selectPokemon, pokemon]);
  }
  const removePokemon = async(pokemon) => {
    setSelectPokemon(selectPokemon.filter((dex)=> {
      if (pokemon.id !== dex.id) return dex;
    }));
  }
  return (
    <PokemonContext.Provider value={{selectPokemon, addPokemon, removePokemon}}>
      <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/dex" element={<Dex />}/>
            <Route path="/detail/:id" element={<Detail />}/>
        </Routes>
      </BrowserRouter>
    </PokemonContext.Provider>
  )
}

export default App