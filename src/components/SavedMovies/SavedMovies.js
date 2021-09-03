import React from "react";
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";
import Header from "../Header/Header";
import SearchForm from "../SearchForm/SearchForm";
import Footer from "../Footer/Footer";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import "./SavedMovies.css";

function SavedMovies({ isLogged, setFilter, isFilterMovies }) {

    function changeFilter() {
        setFilter();
    }
    const moviesCollection = [
        {
            movieId: 0,
            duration: "1ч42м",
            image: "/images/film1.png",
            nameRU: "33 слова о дизайне",
            isLikeCard: false,
            owner: 2323
        },
        {
            movieId: 1,
            duration: "1ч42м",
            image: "/images/film2.png",
            nameRU: "Киноальманах «100 лет дизайна»",
            isLikeCard: true,
            owner: 2323,
        },
        {
            movieId: 2,
            duration: "1ч42м",
            image: "/images/film3.png",
            nameRU: "В погоне за Бенкси",
            isLikeCard: true,
            owner: 3333,
        },
        {
            movieId: 3,
            duration: "1ч42м",
            image: "/images/film4.png",
            nameRU: "Баския: Взрыв реальности",
            isLikeCard: true,
            owner: 3333,
        },
    ]
    return (
        <section className="saved-movies">
            <div className="saved-movies__content">
                <Header isLogged={isLogged} isMain={false} isProfile={false} isMovies={false} isSavedMovies={true} />
                <SearchForm />
                <FilterCheckbox isFilterMovies={isFilterMovies} changeFilter={changeFilter} />
                <MoviesCardList moviesCollection={moviesCollection} isSaved={true} />
            </div>
            <Footer />
        </section>
    )
};
export default SavedMovies;