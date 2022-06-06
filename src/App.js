import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.scss";

import Header from "./components/Header/Header.js";
import Home from "./components/Home/Home.js";
import MovieDetail from "./components/MovieDetail/MovieDetail.js";
import PageNotFound from "./components/PageNotFound/PageNotFound.js";
import Footer from "./components/Footer/Footer.js";

function App() {
  return (
    <div className="app">
      <Header></Header>
      <div className="container">
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/movie/:imdbID" element={<MovieDetail />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
