import React from "react";
import "./SearchForm.css";

function SearchForm() {
    return (
        <form className="search-form">
            <div className="search-form__icon"></div>
            <input className="search-form__input" type="text" placeholder="Фильм" required minLength="2" />
            <div className="search-form__right">
                <button className="search-form__button" type="submit"></button>
            </div>
        </form>
    )
};
export default SearchForm;