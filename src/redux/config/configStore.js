import { configureStore } from "@reduxjs/toolkit";
import pokemonSlice from "../slices/pokemonSlices"

const store = configureStore({
    reducer: {
        pokemon: pokemonSlice,
    },
});

export default store;