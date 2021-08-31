import React from "react";
import Header from "../Header/Header";
import "./Promo.css";

function Promo({ isLogged }) {
    return (
        <section className="promo-page">
            <Header isLogged={isLogged} />
            <h1 className="promo-page__title">Учебный проект студента факультета Веб-разработки.</h1>
        </section>


    )
};
export default Promo;