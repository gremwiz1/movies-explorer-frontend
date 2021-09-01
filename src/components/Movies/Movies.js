import React from "react";
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";
import Header from "../Header/Header";
import SearchForm from "../SearchForm/SearchForm";
import Footer from "../Footer/Footer";
import "./Movies.css";
import MoviesCardList from "../MoviesCardList/MoviesCardList";

function Movies({ isLogged }) {
    const [isFilterMovies, setIsFilterMovies] = React.useState(true);
    function changeFilter() {
        setIsFilterMovies(!isFilterMovies);
    }
    const moviesCollection = [
        {
            movieId: 0,
            duration: "1ч42м",
            image: "/images/film1.png",
            nameRU: "33 слова о дизайне",
            isLikeCard: false
        },
        {
            movieId: 1,
            duration: "1ч42м",
            image: "/images/film2.png",
            nameRU: "Киноальманах «100 лет дизайна»",
            isLikeCard: true
        },
        {
            movieId: 2,
            duration: "1ч42м",
            image: "/images/film3.png",
            nameRU: "В погоне за Бенкси",
            isLikeCard: true
        },
        {
            movieId: 3,
            duration: "1ч42м",
            image: "/images/film4.png",
            nameRU: "Баския: Взрыв реальности",
            isLikeCard: true
        },
        {
            movieId: 4,
            duration: "1ч42м",
            image: "/images/film1.png",
            nameRU: "33 слова о дизайне",
            isLikeCard: true
        },
        {
            movieId: 5,
            duration: "1ч42м",
            image: "/images/film2.png",
            nameRU: "Киноальманах «100 лет дизайна»",
            isLikeCard: true
        },
        {
            movieId: 6,
            duration: "1ч42м",
            image: "/images/film3.png",
            nameRU: "В погоне за Бенкси",
            isLikeCard: true
        },
        {
            movieId: 7,
            duration: "1ч42м",
            image: "/images/film4.png",
            nameRU: "Баския: Взрыв реальности",
            isLikeCard: true
        },
        {
            movieId: 8,
            duration: "1ч42м",
            image: "/images/film1.png",
            nameRU: "33 слова о дизайне",
            isLikeCard: true
        },
        {
            movieId: 9,
            duration: "1ч42м",
            image: "/images/film2.png",
            nameRU: "Киноальманах «100 лет дизайна»",
            isLikeCard: true
        },
        {
            movieId: 10,
            duration: "1ч42м",
            image: "/images/film3.png",
            nameRU: "В погоне за Бенкси",
            isLikeCard: true
        },
        {
            movieId: 11,
            duration: "1ч42м",
            image: "/images/film4.png",
            nameRU: "Баския: Взрыв реальности",
            isLikeCard: true
        },
    ]
    return (
        <section className="movies">
            <Header isLogged={isLogged} />
            <SearchForm />
            <FilterCheckbox isFilterMovies={isFilterMovies} changeFilter={changeFilter} />
            <MoviesCardList moviesCollection={moviesCollection} isSaved={false} />

            <button type="button" className="movies__button">Ещё</button>
            <Footer />
        </section>


    )
};
export default Movies;