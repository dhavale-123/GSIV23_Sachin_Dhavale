// Import required dependencies
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { STATUSES,api_key } from '../../Common/Const';
import MovieApi from '../../Common/MovieApi';

// Define the initial state
const initialState = {
    movies : {},
    detailCard : {},
    pageRecord : "homePage",
    status:STATUSES.IDLE, 
};

// Create an async thunk for API call
export const fetchData = createAsyncThunk("movies/fetchAsyncMovies" ,
 async (searchValue) => {
   const response = await MovieApi.get(`/search/movie?query=${searchValue}&api_key=${api_key}`)
  return (response.data); 
});

export const fetchMovieDetails = createAsyncThunk("movies/fetchMovieDetails" ,
 async (id) => {
   const response = await MovieApi.get(`/movie/${id}?api_key=${api_key}`)
  return (response.data); 
})

// Create a slice to manage the state
const dataSlice = createSlice({
  name: 'Movies',
  initialState,
  reducers : {
    removefetchAsyncCardDetails : (state) => {
       state.detailCard = {};
    },
    setPageRecord(state , action){
      return {...state , pageRecord : action.payload};
   },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchData.pending, (state) => {
        console.log("...loading");
        return {...state , status : STATUSES.LOADING };
      })
      .addCase(fetchData.fulfilled, (state , action) => {
        console.log("fetched succesfully");
        return {...state , movies : action.payload , status : STATUSES.IDLE};
     })
      .addCase(fetchMovieDetails.fulfilled, (state, action) => {
        return {...state , detailCard : action.payload};
      })
      .addCase(fetchData.rejected, (state) => {
        console.log("rejected");
        return {...state , status : STATUSES.ERROR};
     });
  }
});

// Export the async thunk and the slice reducer
export const {removefetchAsyncCardDetails, setPageRecord} = dataSlice.actions;
export default dataSlice.reducer;