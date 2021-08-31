import React from "react";
import "./Portfolio.css";

function Portfolio() {
    return (
        <section className="portfolio">
            <h5 className="portfolio__subtitle">Портфолио</h5>
            <div className="portfolio__job">
                <p className="potfolio__job_text">Статичный сайт</p>
                <a className="portfolio__job_link" href="https://gremwiz1.github.io/how-to-learn/" target="_blank" rel="noreferrer"> </a>
            </div>
            <div className="portfolio__job">
                <p className="potfolio__job_text">Адаптивный сайт</p>
                <a className="portfolio__job_link" href="https://gremwiz1.github.io/russian-travel/" target="_blank" rel="noreferrer"> </a>
            </div>
            <div className="portfolio__job">
                <p className="potfolio__job_text">Одностраничное приложение</p>
                <a className="portfolio__job_link" href="https://gremwiz1.github.io/mesto/" target="_blank" rel="noreferrer"> </a>
            </div>
        </section>
    )
};
export default Portfolio;