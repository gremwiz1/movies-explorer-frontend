const BASE_URL = " https://api.diplom.backend.nomoredomains.monster";
const handleResponse = (response) => {
    if (response.ok) return response.json();
    else return Promise.reject(response.status);
}
export const register = ({ email, password, name }) => {
    return fetch(`${BASE_URL}/signup`, {
        method: 'POST',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            "password": password,
            "email": email,
            "name": name,
        })
    }).then((res) => handleResponse(res));
}
export const authorize = ({ email, password }) => {
    return fetch(`${BASE_URL}/signin`, {
        method: 'POST',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            "password": password,
            "email": email
        })
    }).then((res) => handleResponse(res));
}
export const getContent = (token) => {
    return fetch(`${BASE_URL}/users/me`, {
        method: 'GET',
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
        }
    }).then((res) => handleResponse(res));
}
export const getSavedMovies = (token) => {
    return fetch(`${BASE_URL}/movies`, {
        method: 'GET',
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
        }
    }).then((res) => handleResponse(res));
}
export const deleteSavedMovie = ({ token, movieId }) => {
    return fetch(`${BASE_URL}/movies/${movieId}`, {
        method: 'DELETE',
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
        }
    }).then((res) => handleResponse(res));
}
export const saveMovie = ({ token, movie }) => {
    return fetch(`${BASE_URL}/movies`, {
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
        },
        body: JSON.stringify({
            country: movie.country,
            director: movie.director,
            duration: movie.duration,
            year: movie.year,
            description: movie.description,
            image: movie.image,
            trailer: movie.trailer,
            thumbnail: movie.thumbnail,
            movieId: movie.id,
            nameRU: movie.nameRU,
            nameEN: movie.nameEN,
        })
    }).then((res) => handleResponse(res));
}
export const editUserProfile = ({ token, name, email }) => {
    return fetch(`${BASE_URL}/users/me`, {
        method: 'PATCH',
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
        },
        body: JSON.stringify({
            name: name,
            email: email
        })
    }).then((res) => handleResponse(res));
}