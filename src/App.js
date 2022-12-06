import React from "react";
import Home from "./moviesearch/Home";
import Movie from "./moviesearch/Movie";
import SingeMovie from "./moviesearch/SingeMovie";
import { BrowserRouter as Router, Routes, Route, Form } from "react-router-dom";
import Error from "./Error";
import { AppProvider, Appcontext } from "./moviesearch/context";

function App() {
  return (
    <>
      <AppProvider>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="movie/:id" element={<SingeMovie />} />
            <Route path="" element={<Movie />} />
            <Route path="*" element={<Error />} />
          </Routes>
        </Router>
      </AppProvider>
    </>
  );
}

export default App;
