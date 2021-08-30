import React from "react";
import Navigation from "../Navigation/Navigation";
import "./Header.css";

function Header() {
    return (
        <div className="header">
            <div className="header__logo" href="#"></div>
            <Navigation />
        </div>
    )
};
export default Header;