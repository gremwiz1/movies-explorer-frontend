import React from "react";
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";
import Header from "../Header/Header";
import SearchForm from "../SearchForm/SearchForm";
import Footer from "../Footer/Footer";
import "./Movies.css";
import MoviesCardList from "../MoviesCardList/MoviesCardList";

function Movies({ isLogged, setFilter, isFilterMovies, moviesCollection, searchSavedMovies, searchMovies, isLoadingMovies, savedMovies, movieDeleteFromSavedMovies, movieSaveInStore, foundError, serverError, clearAllErrors }) {
    React.useEffect(() => {
        clearAllErrors();
    }, []);
    function changeFilter() {
        setFilter();
    }
    const [numberMoviesInDisplay, setNumberMoviesInDisplay] = React.useState(() => {
        const windowWidth = window.innerWidth;
        if (windowWidth > 1279) {
            return 16
        } else if (windowWidth >= 990) {
            return 12
        } else if (windowWidth >= 500) {
            return 8
        } else return 5
    })
    const [numberMoviesAdd, setNumberMoviesAdd] = React.useState(() => {
        const windowWidth = window.innerWidth;
        if (windowWidth > 1279) {
            return 4
        } else if (windowWidth >= 990) {
            return 3
        } else if (windowWidth >= 500) {
            return 2
        } else return 2
    })
    function onChangeScreenWidth() {
        const windowWidth = window.innerWidth;
        if (windowWidth > 1279) {
            setNumberMoviesInDisplay(16);
            setNumberMoviesAdd(4);
        } else if (windowWidth >= 990) {
            setNumberMoviesInDisplay(12);
            setNumberMoviesAdd(3);
        } else if (windowWidth >= 500) {
            setNumberMoviesInDisplay(8);
            setNumberMoviesAdd(2);
        } else {
            setNumberMoviesInDisplay(5);
            setNumberMoviesAdd(2);
        }
    }
    React.useEffect(() => {
        window.addEventListener('resize', onChangeScreenWidth);
    }, []);

    const moviesCollectionVisible = moviesCollection.slice(0, numberMoviesInDisplay);
    function addMoviesInCollectionVisible() {
        setNumberMoviesInDisplay(prevState => prevState + numberMoviesAdd);
    }
    return (
        <section className="movies">
            <Header isLogged={isLogged} isMain={false} isMovies={true} isSavedMovies={false} isProfile={false} />
            <SearchForm isSaved={false} searchMovies={searchMovies} searchSavedMovies={searchSavedMovies} />
            <FilterCheckbox isFilterMovies={isFilterMovies} changeFilter={changeFilter} />
            <MoviesCardList moviesCollection={moviesCollectionVisible} isSaved={false} isLoadingMovies={isLoadingMovies} savedMovies={savedMovies} movieDeleteFromSavedMovies={movieDeleteFromSavedMovies} movieSaveInStore={movieSaveInStore} foundError={foundError} serverError={serverError} />
            <button type="button" onClick={addMoviesInCollectionVisible} className={moviesCollectionVisible.length === moviesCollection.length ? "movies__button_hide" : "movies__button"}>Ещё</button>
            <Footer />
        </section>


    )
};
export default Movies;