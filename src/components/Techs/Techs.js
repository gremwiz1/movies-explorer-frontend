import React from "react";
import "./Techs.css";

function Techs() {
    return (
        <section className="techs" id="techs">
            <h3 className="techs__subtitle">Технологии</h3>
            <h2 className="techs__title">7 технологий</h2>
            <p className="techs__text">На курсе веб-разработки мы освоили технологии, которые применили в дипломном проекте.</p>
            <ul className="techs__list">
                <li className="techs__list_element">HTML</li>
                <li className="techs__list_element">CSS</li>
                <li className="techs__list_element">JS</li>
                <li className="techs__list_element">React</li>
                <li className="techs__list_element">Git</li>
                <li className="techs__list_element">Express.js</li>
                <li className="techs__list_element">mongoDB</li>
            </ul>
        </section>
    )
};
export default Techs;