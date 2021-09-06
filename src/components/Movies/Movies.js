import React from "react";
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";
import Header from "../Header/Header";
import SearchForm from "../SearchForm/SearchForm";
import Footer from "../Footer/Footer";
import "./Movies.css";
import MoviesCardList from "../MoviesCardList/MoviesCardList";

function Movies({ isLogged, setFilter, isFilterMovies, moviesCollection }) {
    function changeFilter() {
        setFilter();
    }

    return (
        <section className="movies">
            <Header isLogged={isLogged} isMain={false} isMovies={true} isSavedMovies={false} isProfile={false} />
            <SearchForm />
            <FilterCheckbox isFilterMovies={isFilterMovies} changeFilter={changeFilter} />
            <MoviesCardList moviesCollection={moviesCollection} isSaved={false} />
            <button type="button" className="movies__button">Ещё</button>
            <Footer />
        </section>


    )
};
export default Movies;