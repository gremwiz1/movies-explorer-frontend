import React from "react";
import "./MoviesCard.css";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";

function MoviesCard({ movies, isSaved, savedMovies, movieDeleteFromSavedMovies, movieSaveInStore }) {

    const [isLike, setIsLike] = React.useState(false);
    const currentUser = React.useContext(CurrentUserContext);
    const nowMovieSaved = savedMovies.find((item) => item.nameRU === movies.nameRU && item.owner === currentUser._id);
    const movie = {
        country: movies.country || 'нет',
        director: movies.director || 'Нет',
        duration: movies.duration || 0,
        year: movies.year || 'Нет',
        description: movies.description || 'Нет',
        image: isSaved ? movies.image : `https://api.nomoreparties.co${movies.image.url}`,
        trailer: isSaved ? movies.trailer : movies.trailerLink,
        thumbnail: isSaved ? movies.thumbnail : `https://api.nomoreparties.co${movies.image.formats.thumbnail.url}`,
        movieId: isSaved ? movies._id : movies.id,
        nameRU: movies.nameRU || 'Нет',
        nameEN: movies.nameEN || 'Нет',
    }
    function handleLikeCard(e) {
        if (isLike) {
            const searchMovie = savedMovies.find((item) => item.movieId === String(movies.id));
            movieDeleteFromSavedMovies(searchMovie._id);
        }
        else {
            movieSaveInStore(movie);
        }
        setIsLike(!isLike);
    }
    function deleteCard(e) {
        movieDeleteFromSavedMovies(movies._id);
    }
    React.useEffect(() => {
        if (nowMovieSaved) {
            setIsLike(true);
        }
    }, [nowMovieSaved])
    const durationMovie = `${Math.trunc(movies.duration / 60)}ч ${movies.duration % 60}м`;
    return (

        <li className="movies-card" id={isSaved ? movies._id : movies.id}>
            <a href={isSaved ? movies.trailer : movies.trailerLink} className="movies-card__trailer" target="_blank" rel="noreferrer"><img className="movies-card__image" alt={movies.nameRU} src={isSaved ? movies.image : `https://api.nomoreparties.co${movies.image.url}`} /></a>
            <div className="movies-card__content">
                <p className="movies-card__name">{movies.nameRU}</p>
                {
                    isSaved ? <button type="button"
                        onClick={deleteCard}
                        className={(movies.owner === currentUser._id) ? "movies-card__delete-button_visible" : "none"}>
                    </button>
                        :
                        <button type="button"
                            onClick={handleLikeCard}
                            className={isLike ? "movies-card__like movies-card__like_active" : "movies-card__like movies-card__like_inactive"}>
                        </button>
                }
            </div>
            <p className="movies-card__time">{durationMovie}</p>
        </li>

    )
};
export default MoviesCard;