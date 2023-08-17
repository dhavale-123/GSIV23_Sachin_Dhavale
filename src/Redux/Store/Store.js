import {configureStore} from "@reduxjs/toolkit";
import movieReducer from "../ReduxSlices/MovieSlice";

const store = configureStore({
    reducer:{
      MoviesData : movieReducer,
    }
})

export default store;