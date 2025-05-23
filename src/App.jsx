import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { createContext, useState } from "react";
import Home from './pages/Home'
import Dex from './pages/Dex'
import Detail from './pages/Detail'
import { ToastContainer, toast } from 'react-toastify';

export const PokemonContext = createContext(null);

const ErrorMsg = (msg) => {
    toast.error(msg, {
        position: 'top-center',
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        theme: "colored",
    });
};

const App = () => {
  const [selectPokemon, setSelectPokemon] = useState([]);
  const addPokemon = (pokemon) => {
    if (selectPokemon.length === 6) {
      ErrorMsg("더 이상 선택할 수 없습니다.");
      return ;
    }
    if (selectPokemon.find((element) => element === pokemon)) {
      ErrorMsg("이미 선택된 포켓몬입니다.");
      return ;
    }
    setSelectPokemon([...selectPokemon, pokemon]);
  }
  const removePokemon = (pokemon) => {
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
            <Route path="/detail" element={<Detail />}/>
        </Routes>
      </BrowserRouter>
      <ToastContainer />
    </PokemonContext.Provider>
  )
}

export default App