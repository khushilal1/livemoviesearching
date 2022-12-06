import React, { useContext ,useState} from "react";
import { Appcontext } from "./context";
import { NavLink } from "react-router-dom";
import "../App.css";



function Movie() {
  const { movies } = useContext(Appcontext);
const [id,setnewid]=useState()
  return (
    <>
      <section className="movie page">
        <div className="grid grid-4-col">
          {movies
            ? movies.map((current, index) => {
                const { imdbID, Title, Poster ,Year} = current;
                const movieName = Title.substring(0, 5);

                return (
                  <>
                    <NavLink key={index} to={`movie/${imdbID}`}>
                      <div className="card">
                        <div className="card-info">
                          <h1>
                            {movieName.length >= 5
                              ? `${movieName}...`
                              : movieName}
                          </h1>
                         
                          <img src={Poster} alt={`${imdbID}`} />
                        </div>
                      </div>
                    </NavLink>
                  </>
                );
              })
            : ""}
        </div>
      </section>
    </>
  );
}

export default Movie;
