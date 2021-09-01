import React from "react";
import MoviesCard from "../MoviesCard/MoviesCard";
import "./MoviesCardList.css";

function MoviesCardList({ moviesCollection, isSaved }) {
    return (
        <ul className="movies__collection">
            {moviesCollection.map((movies) => {
                return (<MoviesCard key={movies.movieId} movies={movies} isSaved={isSaved} />)
            })}

        </ul>
    )
};
export default MoviesCardList;