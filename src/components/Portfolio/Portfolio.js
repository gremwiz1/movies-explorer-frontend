import React from "react";
import { Link } from "react-router-dom";
import "./Portfolio.css";

function Portfolio() {
    return (
        <section className="portfolio">
            <h5 className="portfolio__subtitle">Портфолио</h5>
            <div className="portfolio__job">
                <p className="potfolio__job_text">Статичный сайт</p>
                <Link className="portfolio__job_link" to="https://gremwiz1.github.io/how-to-learn/"></Link>
            </div>
            <div className="portfolio__job">
                <p className="potfolio__job_text">Адаптивный сайт</p>
                <Link className="portfolio__job_link" to="https://gremwiz1.github.io/russian-travel/"></Link>
            </div>
            <div className="portfolio__job">
                <p className="potfolio__job_text">Одностраничное приложение</p>
                <Link className="portfolio__job_link" to="https://gremwiz1.github.io/mesto/"></Link>
            </div>
        </section>
    )
};
export default Portfolio;