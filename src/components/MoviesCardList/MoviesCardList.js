import React from "react";
import MoviesCard from "../MoviesCard/MoviesCard";
import "./MoviesCardList.css";
import Preloader from "../Preloader/Preloader";

function MoviesCardList({ moviesCollection, isSaved }) {
    const [isLoadingMovies, setIsLoadingMovies] = React.useState(false);
    return (
        <section className="movies-card-list">
            {isLoadingMovies ? <Preloader /> : ""}
            <ul className="movies__collection">
                {moviesCollection.map((movies) => {
                    return (<MoviesCard key={movies.movieId} movies={movies} isSaved={isSaved} />)
                })}

            </ul>
        </section>

    )
};
export default MoviesCardList;