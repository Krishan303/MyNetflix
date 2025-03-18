import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
  name: "movies",
  initialState: {
    nowPlayingMovies: null,
    addTrailer: null,
  },
  reducers: {
    addNowPlayingMovies: (state, action) => {
      state.nowPlayingMovies = action.payload;
    },
    addPopularMovies: (state, action) => {
      state.popularMovies = action.payload;
    },
    addTrendingMovies: (state, action) => {
      state.trendingMovies = action.payload;
    },
    addUpcomingMovies: (state, action) => {
      state.upcomingMovies = action.payload;
    },
    addMoviesTrailer: (state, action) => {
      state.addTrailer = action.payload;
    },
  },
});

export const {
  addNowPlayingMovies,
  addMoviesTrailer,
  addPopularMovies,
  addTrendingMovies,
  addUpcomingMovies,
} = moviesSlice.actions;
export default moviesSlice.reducer;
