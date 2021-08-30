import React from "react";
import "./Main.css";
import Promo from "../Promo/Promo";
import NavTab from "../NavTab/NavTab";
import Header from "../Header/Header";
import AboutProject from "../AboutProject/AboutProject";
import Techs from "../Techs/Techs";
import AboutMe from "../AboutMe/AboutMe";
import Portfolio from "../Portfolio/Portfolio";
import Footer from "../Footer/Footer";

function Main() {
    return (
        <>
            <Header />
            <Promo />
            <NavTab />
            <AboutProject />
            <Techs />
            <AboutMe />
            <Portfolio />
            <Footer />
        </>
    )
};
export default Main;