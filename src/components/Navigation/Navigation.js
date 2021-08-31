import React from "react";
import { Link } from "react-router-dom";
import "./Navigation.css";

function Navigation({ isLogged }) {
    return (
        <nav className="navigation">
            {isLogged
                ?
                <div className="navigation_logged">
                    <div className="navigation__links">
                        <Link to="/movies" className="navigation__movie">Фильмы</Link>
                        <Link to="/saved-movies" className="navigation__movie">Сохранённые фильмы</Link>
                    </div>
                    <Link to="/profile" className="navigation__account">Аккаунт</Link>
                </div>
                :
                <div className="navigation__links">
                    <Link to="/signup" className="navigation__link">Регистрация</Link>
                    <Link to="/signin" className="navigation__link">Войти</Link>
                </div>}
        </nav>
    )
};
export default Navigation;