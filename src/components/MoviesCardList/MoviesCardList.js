import React from "react";
import MoviesCard from "../MoviesCard/MoviesCard";
import "./MoviesCardList.css";
import Preloader from "../Preloader/Preloader";

function MoviesCardList({ moviesCollection, isSaved, isLoadingMovies, savedMovies, movieDeleteFromSavedMovies, movieSaveInStore }) {
    return (
        <section className="movies-card-list">
            {isLoadingMovies ? <Preloader /> : ""}
            <ul className="movies__collection">
                {moviesCollection.map((movies) => {
                    return (<MoviesCard key={isSaved ? movies.movieId : movies.id} movies={movies} isSaved={isSaved} savedMovies={savedMovies} movieDeleteFromSavedMovies={movieDeleteFromSavedMovies} movieSaveInStore={movieSaveInStore} />)
                })}

            </ul>
        </section>

    )
};
export default MoviesCardList;