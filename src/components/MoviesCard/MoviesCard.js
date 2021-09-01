import React from "react";
import "./MoviesCard.css";

function MoviesCard({ movies }) {

    const [isLike, setIsLike] = React.useState(movies.isLikeCard);
    function changeLikeCard() {
        setIsLike(!isLike);
    }

    return (
        <li className="movies-card">
            <img className="movies-card__image" alt={movies.nameRU} src={movies.image} />
            <div className="movies-card__content">
                <p className="movies-card__name">{movies.nameRU}</p>
                <button type="button" onClick={changeLikeCard} className={isLike ? "movies-card__like movies-card__like_active" : "movies-card__like movies-card__like_inactive"}></button>
            </div>
            <p className="movies-card__time">{movies.duration}</p>
        </li>
    )
};
export default MoviesCard;