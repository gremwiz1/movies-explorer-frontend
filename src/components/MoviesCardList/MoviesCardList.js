import React from "react";
import { useLocation } from "react-router-dom";
import MoviesCard from "../MoviesCard/MoviesCard";
import "./MoviesCardList.css";
import Preloader from "../Preloader/Preloader";

function MoviesCardList({ moviesCollection, isSaved, isLoadingMovies, savedMovies, movieDeleteFromSavedMovies, movieSaveInStore, foundError, serverError }) {
    const { pathname } = useLocation();
    return (
        <section className="movies-card-list">
            {isLoadingMovies ? <Preloader /> : ""}
            <span className="search-form__error">{foundError ? "Ничего не найдено" : ""}</span>
            <span className="server__error">{serverError ? "Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз" : ""}</span>
            <ul className="movies__collection">
                {moviesCollection.map((movies) => {
                    return (<MoviesCard key={isSaved ? movies.movieId : movies.id} movies={movies} isSaved={isSaved} savedMovies={savedMovies} movieDeleteFromSavedMovies={movieDeleteFromSavedMovies} movieSaveInStore={movieSaveInStore} />)
                })}

            </ul>
        </section>

    )
};
export default MoviesCardList;