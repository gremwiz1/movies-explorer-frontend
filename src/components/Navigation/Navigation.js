import React from "react";
import { Link } from "react-router-dom";
import "./Navigation.css";

function Navigation({ isLogged, isMain, isMovies, isSavedMovies, isProfile }) {
    const [isShowBurgerMenu, setIsShowBurgerMenu] = React.useState(false);
    function showBurgerMenu() {
        setIsShowBurgerMenu(true);
    }
    function closeBurgerMenu() {
        setIsShowBurgerMenu(false);
    }
    return (
        <nav className="navigation">
            {isLogged
                ?
                <>
                    <div className="navigation_logged">
                        <div className="navigation__links">
                            <Link to="/movies" className="navigation__movie">Фильмы</Link>
                            <Link to="/saved-movies" className="navigation__movie">Сохранённые фильмы</Link>
                        </div>
                        <Link to="/profile" className={isMain ? "navigation__account navigation__account_main" : "navigation__account"}>Аккаунт</Link>
                    </div>
                    <button className="navigation__burger-menu" onClick={showBurgerMenu}></button>
                </>
                :
                <div className="navigation__links">
                    <Link to="/signup" className={isMain ? "navigation__link" : "navigation__link navigation__link_black"}>Регистрация</Link>
                    <Link to="/signin" className="navigation__link">Войти</Link>
                </div>
            }
            {isShowBurgerMenu ?
                <div className="burger-menu">
                    <div className="burger-menu__container">
                        <button type="button" className="burger-menu__button" onClick={closeBurgerMenu}></button>
                        <div className="burger-menu__content">
                            <div className="burger-menu__links">
                                <Link className={isMain ? "burger-menu__link burger-menu__decoration" : "burger-menu__link"} to="/">Главная</Link>
                                <Link className={isMovies ? "burger-menu__link burger-menu__decoration" : "burger-menu__link"} to="/movies">Фильмы</Link>
                                <Link className={isSavedMovies ? "burger-menu__link burger-menu__decoration" : "burger-menu__link"} to="/saved-movies">Сохранённые фильмы</Link>
                            </div>
                            <Link className={isProfile ? "burger-menu__profile burger-menu__decoration-profile" : "burger-menu__profile"} to="/profile">Аккаунт</Link>
                        </div>
                    </div>


                </div>
                : ""
            }

        </nav>
    )
};
export default Navigation;