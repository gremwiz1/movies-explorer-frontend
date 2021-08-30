import React from "react";
import { HashLink } from "react-router-hash-link";
import "./NavTab.css";

function NavTab() {
    return (
        <nav className="nav-tab">
            <HashLink to="/#project" className="nav-tab__link">О проекте</HashLink>
            <HashLink to="#" className="nav-tab__link">Технологии</HashLink>
            <HashLink to="#" className="nav-tab__link">Студент</HashLink>
        </nav>
    )
};
export default NavTab;