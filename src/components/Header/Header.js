import React from "react";
import { Link } from "react-router-dom";
import Navigation from "../Navigation/Navigation";
import "./Header.css";

function Header({ isLogged, isMain, isProfile, isMovies, isSavedMovies }) {
    return (
        <header className="header">
            <Link className="header__logo" to="/"></Link>
            <Navigation isLogged={isLogged} isMain={isMain} isProfile={isProfile} isMovies={isMovies} isSavedMovies={isSavedMovies} />
        </header>
    )
};
export default Header;