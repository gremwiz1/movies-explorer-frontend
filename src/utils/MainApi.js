const BASE_URL = "https://api.nomoreparties.co/beatfilm-movies";
export function getInitialMovies() {
    return fetch(`${BASE_URL}`, {
        headers: {
            'Content-Type': 'application/json',
        }
    })
        .then(res => {
            if (res.ok) {
                return res.json();
            }
            // если ошибка, отклоняем промис
            return Promise.reject(`Ошибка: ${res.status}`);
        });

}