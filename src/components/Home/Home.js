import React, { useEffect } from "react";

import MovieListing from "../MovieListing/MovieListing.js";
import { useDispatch } from "react-redux";

import "./Home.scss";
import {
  fetchAsyncMovies,
  fetchAsyncSeries,
} from "../../features/movies/movieSlice.js";

function Home() {
  const dispatch = useDispatch();
  const movieText = "Harry";
  const serieText = "Friends";
  useEffect(() => {
    dispatch(fetchAsyncMovies(movieText));
    dispatch(fetchAsyncSeries(serieText));
  }, [dispatch]);

  return (
    <div>
      <div className="banner-image"></div>
      <MovieListing />
    </div>
  );
}

export default Home;
