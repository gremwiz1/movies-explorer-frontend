import React from "react";
import { Link, useHistory } from "react-router-dom";
import "./NotFound.css";

function NotFound() {
    const history = useHistory();
    function handleClickLink() {
        history.goBack();
    }
    return (
        <section className="not-found">
            <h1 className="not-found__title">404</h1>
            <p className="not-found__text">Страница не найдена</p>
            <Link to="" onClick={handleClickLink} className="not-found__link">Назад</Link>
        </section>
    )
};
export default NotFound;