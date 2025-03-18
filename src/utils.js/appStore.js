import { configureStore } from "@reduxjs/toolkit";
import moviesReducer from "./movieSlice"
import showGptReducer from "./gptSlice"
import configSliceReducer from "./configSlice"

const appStore = configureStore({
    reducer:{
        movies: moviesReducer,
        gpt: showGptReducer,
        config: configSliceReducer,
    },
})

export default appStore;