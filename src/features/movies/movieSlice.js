import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import MovieApi from "../../common/apis/MovieApi";
import { API_KEY } from "../../common/apis/MovieApiKey";

export const fetchAsyncMovies = createAsyncThunk(
  "movies/fetchAsyncMovies",
  async (term) => {
    const res = await MovieApi.get(`?apikey=${API_KEY}&s=${term}&type=movie`);
    return res.data;
  }
);

export const fetchAsyncSeries = createAsyncThunk(
  "movies/fetchAsyncSeries",
  async (term) => {
    const res = await MovieApi.get(`?apikey=${API_KEY}&s=${term}&type=series`);
    return res.data;
  }
);

export const fetchAsyncMovieOrSerieDetail = createAsyncThunk(
  "movies/fetchAsyncMovieOrSerieDetail",
  async (id) => {
    const res = await MovieApi.get(`?apikey=${API_KEY}&i=${id}&Plot=full`);
    return res.data;
  }
);

const initialState = {
  movies: {},
  series: {},
  selectedMovieOrSerie: {},
};

const movieSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    removeSelectedMovieOrSerie: (state) => {
      state.selectedMovieOrSerie = {};
    },
  },
  extraReducers: {
    [fetchAsyncMovies.pending]: () => {
      console.log("Pending");
    },
    [fetchAsyncMovies.fulfilled]: (state, { payload }) => {
      console.log("Fetch SuccessFully");
      return { ...state, movies: payload };
    },
    [fetchAsyncMovies.rejected]: () => {
      console.log("Rejected!");
    },
    [fetchAsyncSeries.fulfilled]: (state, { payload }) => {
      console.log("Fetch SuccessFully");
      return { ...state, series: payload };
    },
    [fetchAsyncMovieOrSerieDetail.fulfilled]: (state, { payload }) => {
      console.log("Fetch SuccessFully");
      return { ...state, selectedMovieOrSerie: payload };
    },
  },
});

export const { removeSelectedMovieOrSerie } = movieSlice.actions;
export const getAllMovies = (state) => state.movies.movies;
export const getAllSeries = (state) => state.movies.series;
export const getSelectedMovieOrSerie = (state) =>
  state.movies.selectedMovieOrSerie;
export default movieSlice.reducer;
