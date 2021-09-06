import React from "react";
import "./SearchForm.css";

function SearchForm({ isSaved, searchMovies, searchSavedMovies }) {
    const [validForm, setValidForm] = React.useState(false);
    const [textInput, setTextInput] = React.useState("");
    function handleChangeInput(e) {
        setTextInput(e.target.value);
        setValidForm(e.target.checkValidity());
    }
    function handleSearchMovies(e) {
        e.preventDefault();
        searchMovies(textInput);
        setTextInput("");
    }
    function handleSearchSavedMovies(e) {
        e.preventDefault();
        searchSavedMovies(textInput);
    }
    return (
        <form className="search-form" onSubmit={isSaved ? handleSearchSavedMovies : handleSearchMovies}>
            <div className="search-form__icon"></div>
            <input className="search-form__input" onChange={handleChangeInput} value={textInput} type="text" placeholder="Фильм" required minLength="2" />
            <div className="search-form__right">
                <button className="search-form__button" disabled={!validForm} type="submit"></button>
            </div>
        </form>
    )
};
export default SearchForm;