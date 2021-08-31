import React from "react";
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";
import Header from "../Header/Header";
import SearchForm from "../SearchForm/SearchForm";
import Footer from "../Footer/Footer";
import "./Movies.css";
import film1 from "../../images/film1.png";
import film2 from "../../images/film2.png";
import film3 from "../../images/film3.png";
import film4 from "../../images/film4.png";

function Movies({ isLogged }) {
    const [isFilterMovies, setIsFilterMovies] = React.useState(true);
    function changeFilter() {
        setIsFilterMovies(!isFilterMovies);
    }
    const [isLikeCard1, setIsLikeCard1] = React.useState(true);
    const [isLikeCard2, setIsLikeCard2] = React.useState(false);
    function changeLikeCard1() {
        setIsLikeCard1(!isLikeCard1);
    }
    function changeLikeCard2() {
        setIsLikeCard2(!isLikeCard2);
    }
    return (
        <section className="movies">
            <Header isLogged={isLogged} />
            <SearchForm />
            <FilterCheckbox isFilterMovies={isFilterMovies} changeFilter={changeFilter} />
            <ul className="movies__collection">
                <li className="movies-card">
                    <img className="movies-card__image" alt="33 слова о дизайне" src={film1} />
                    <div className="movies-card__content">
                        <p className="movies-card__name">33 слова о дизайне</p>
                        <button type="button" onClick={changeLikeCard1} className={isLikeCard1 ? "movies-card__like movies-card__like_active" : "movies-card__like movies-card__like_inactive"}></button>
                    </div>
                    <p className="movies-card__time">1ч42м</p>
                </li>
                <li className="movies-card">
                    <img className="movies-card__image" alt="Киноальманах «100 лет дизайна»" src={film2} />
                    <div className="movies-card__content">
                        <p className="movies-card__name">Киноальманах «100 лет дизайна»</p>
                        <button type="button" onClick={changeLikeCard2} className={isLikeCard2 ? "movies-card__like movies-card__like_active" : "movies-card__like movies-card__like_inactive"}></button>
                    </div>
                    <p className="movies-card__time">1ч42м</p>
                </li>
                <li className="movies-card">
                    <img className="movies-card__image" alt="В погоне за Бенкси" src={film3} />
                    <div className="movies-card__content">
                        <p className="movies-card__name">В погоне за Бенкси</p>
                        <button type="button" onClick={changeLikeCard2} className={isLikeCard2 ? "movies-card__like movies-card__like_active" : "movies-card__like movies-card__like_inactive"}></button>
                    </div>
                    <p className="movies-card__time">1ч 42м</p>
                </li>
                <li className="movies-card">
                    <img className="movies-card__image" alt="Баския: Взрыв реальности" src={film4} />
                    <div className="movies-card__content">
                        <p className="movies-card__name">Баския: Взрыв реальности</p>
                        <button type="button" onClick={changeLikeCard2} className={isLikeCard2 ? "movies-card__like movies-card__like_active" : "movies-card__like movies-card__like_inactive"}></button>
                    </div>
                    <p className="movies-card__time">1ч 42м</p>
                </li>
                <li className="movies-card">
                    <img className="movies-card__image" alt="33 слова о дизайне" src={film1} />
                    <div className="movies-card__content">
                        <p className="movies-card__name">33 слова о дизайне</p>
                        <button type="button" onClick={changeLikeCard1} className={isLikeCard1 ? "movies-card__like movies-card__like_active" : "movies-card__like movies-card__like_inactive"}></button>
                    </div>
                    <p className="movies-card__time">1ч42м</p>
                </li>
                <li className="movies-card">
                    <img className="movies-card__image" alt="Киноальманах «100 лет дизайна»" src={film2} />
                    <div className="movies-card__content">
                        <p className="movies-card__name">Киноальманах «100 лет дизайна»</p>
                        <button type="button" onClick={changeLikeCard2} className={isLikeCard2 ? "movies-card__like movies-card__like_active" : "movies-card__like movies-card__like_inactive"}></button>
                    </div>
                    <p className="movies-card__time">1ч42м</p>
                </li>
                <li className="movies-card">
                    <img className="movies-card__image" alt="В погоне за Бенкси" src={film3} />
                    <div className="movies-card__content">
                        <p className="movies-card__name">В погоне за Бенкси</p>
                        <button type="button" onClick={changeLikeCard2} className={isLikeCard2 ? "movies-card__like movies-card__like_active" : "movies-card__like movies-card__like_inactive"}></button>
                    </div>
                    <p className="movies-card__time">1ч 42м</p>
                </li>
                <li className="movies-card">
                    <img className="movies-card__image" alt="Баския: Взрыв реальности" src={film4} />
                    <div className="movies-card__content">
                        <p className="movies-card__name">Баския: Взрыв реальности</p>
                        <button type="button" onClick={changeLikeCard2} className={isLikeCard2 ? "movies-card__like movies-card__like_active" : "movies-card__like movies-card__like_inactive"}></button>
                    </div>
                    <p className="movies-card__time">1ч 42м</p>
                </li>
                <li className="movies-card">
                    <img className="movies-card__image" alt="33 слова о дизайне" src={film1} />
                    <div className="movies-card__content">
                        <p className="movies-card__name">33 слова о дизайне</p>
                        <button type="button" onClick={changeLikeCard1} className={isLikeCard1 ? "movies-card__like movies-card__like_active" : "movies-card__like movies-card__like_inactive"}></button>
                    </div>
                    <p className="movies-card__time">1ч42м</p>
                </li>
                <li className="movies-card">
                    <img className="movies-card__image" alt="Киноальманах «100 лет дизайна»" src={film2} />
                    <div className="movies-card__content">
                        <p className="movies-card__name">Киноальманах «100 лет дизайна»</p>
                        <button type="button" onClick={changeLikeCard2} className={isLikeCard2 ? "movies-card__like movies-card__like_active" : "movies-card__like movies-card__like_inactive"}></button>
                    </div>
                    <p className="movies-card__time">1ч42м</p>
                </li>
                <li className="movies-card">
                    <img className="movies-card__image" alt="В погоне за Бенкси" src={film3} />
                    <div className="movies-card__content">
                        <p className="movies-card__name">В погоне за Бенкси</p>
                        <button type="button" onClick={changeLikeCard2} className={isLikeCard2 ? "movies-card__like movies-card__like_active" : "movies-card__like movies-card__like_inactive"}></button>
                    </div>
                    <p className="movies-card__time">1ч 42м</p>
                </li>
                <li className="movies-card">
                    <img className="movies-card__image" alt="Баския: Взрыв реальности" src={film4} />
                    <div className="movies-card__content">
                        <p className="movies-card__name">Баския: Взрыв реальности</p>
                        <button type="button" onClick={changeLikeCard2} className={isLikeCard2 ? "movies-card__like movies-card__like_active" : "movies-card__like movies-card__like_inactive"}></button>
                    </div>
                    <p className="movies-card__time">1ч 42м</p>
                </li>
            </ul>
            <button type="button" className="movies__button">Ещё</button>
            <Footer />
        </section>


    )
};
export default Movies;