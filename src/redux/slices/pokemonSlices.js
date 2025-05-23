import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const initialState = {
  selectPokemon: [],
};

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

const pokemonSlice = createSlice({
  name: "pokemon",
  initialState,
  reducers: {
    addPokemon: (state, action) => {
        if (state.selectPokemon.length === 6) {
            ErrorMsg("더 이상 선택할 수 없습니다.");
            return ;
        }
        if (state.selectPokemon.find((element) => element.id === action.payload.id)) {
            ErrorMsg("이미 선택된 포켓몬입니다.");
            return ;
        }
        state.selectPokemon = [...state.selectPokemon ,action.payload];
    },
    removePokemon: (state, action) => {
        state.selectPokemon = state.selectPokemon.filter((dex) => {
            if (action.payload.id !== dex.id) return dex;
        });
    },
  },
});

export const { addPokemon, removePokemon } = pokemonSlice.actions;
export default pokemonSlice.reducer;