import React from "react";
import MoviesCard from "../MoviesCard/MoviesCard";
import "./MoviesCardList.css";

function MoviesCardList({ moviesCollection }) {
    return (
        <ul className="movies__collection">
            {moviesCollection.map((movies) => {
                return (<MoviesCard key={movies.movieId} movies={movies} />)
            })}

        </ul>
    )
};
export default MoviesCardList;