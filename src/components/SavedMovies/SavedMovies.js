import React from "react";
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";
import Header from "../Header/Header";
import SearchForm from "../SearchForm/SearchForm";
import Footer from "../Footer/Footer";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import "./SavedMovies.css";

function SavedMovies({ isLogged, setFilter, isFilterMovies, moviesCollection, searchMovies, searchSavedMovies, isLoadingMovies, savedMovies, movieDeleteFromSavedMovies, movieSaveInStore, foundError, serverError, clearAllErrors }) {
    React.useEffect(() => {
        clearAllErrors();
    }, []);
    function changeFilter() {
        setFilter();
    }

    return (
        <section className="saved-movies">
            <div className="saved-movies__content">
                <Header isLogged={isLogged} isMain={false} isProfile={false} isMovies={false} isSavedMovies={true} />
                <SearchForm isSaved={true} searchMovies={searchMovies} searchSavedMovies={searchSavedMovies} />
                <FilterCheckbox isFilterMovies={isFilterMovies} changeFilter={changeFilter} />
                <MoviesCardList moviesCollection={moviesCollection} isSaved={true} isLoadingMovies={isLoadingMovies} savedMovies={savedMovies} movieDeleteFromSavedMovies={movieDeleteFromSavedMovies} movieSaveInStore={movieSaveInStore} foundError={false} serverError={serverError} />
            </div>
            <Footer />
        </section>
    )
};
export default SavedMovies;