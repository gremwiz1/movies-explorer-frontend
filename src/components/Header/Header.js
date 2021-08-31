import React from "react";
import { Link } from "react-router-dom";
import Navigation from "../Navigation/Navigation";
import "./Header.css";

function Header({ isLogged }) {
    return (
        <header className="header">
            <Link className="header__logo" to="/"></Link>
            <Navigation isLogged={isLogged} />
        </header>
    )
};
export default Header;