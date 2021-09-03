import React from "react";
import "./MoviesCard.css";

function MoviesCard({ movies, isSaved }) {

    const [isLike, setIsLike] = React.useState(movies.isLikeCard);
    function changeLikeCard() {
        setIsLike(!isLike);
    }
    function deleteCard() {

    }

    return (
        <li className="movies-card">
            <img className="movies-card__image" alt={movies.nameRU} src={movies.image} />
            <div className="movies-card__content">
                <p className="movies-card__name">{movies.nameRU}</p>
                {
                    isSaved ? <button type="button"
                        onClick={deleteCard}
                        className={(movies.owner == 2323) ? "movies-card__delete-button_visible" : "none"}>
                    </button>
                        :
                        <button type="button"
                            onClick={changeLikeCard}
                            className={isLike ? "movies-card__like movies-card__like_active" : "movies-card__like movies-card__like_inactive"}>
                        </button>
                }
            </div>
            <p className="movies-card__time">{movies.duration}</p>
        </li>
    )
};
export default MoviesCard;