import React from "react";
import { Route, Redirect, Switch, useHistory, useLocation } from "react-router-dom";
import Main from "../Main/Main";
import Movies from "../Movies/Movies";
import SavedMovies from "../SavedMovies/SavedMovies";
import Profile from "../Profile/Profile";
import Login from "../Login/Login";
import Register from "../Register/Register";
import NotFound from "../NotFound/NotFound";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";
import * as MoviesApi from "../../utils/MoviesApi";
import * as MainApi from "../../utils/MainApi";
import { CurrentUserContext } from '../../contexts/CurrentUserContext';

function App() {
    const [isLogged, setIsLogged] = React.useState(false);
    const [isFilterMovies, setIsFilterMovies] = React.useState(false);
    const [moviesCollection, setMoviesCollection] = React.useState([]);
    const [savedMoviesCollection, setSavedMoviesCollection] = React.useState([]);
    const [filterMoviesCollection, setFilterMoviesCollection] = React.useState([]);
    const [filterSavedMoviesCollection, setFilterSavedMoviesCollection] = React.useState([]);
    const [filterTimeMoviesCollection, setFilterTimeMoviesCollection] = React.useState([]);
    const [filterTimeSavedMoviesCollection, setFilterTimeSavedMoviesCollection] = React.useState([]);
    const [loginError, setLoginError] = React.useState("");
    const [registerError, setRegisterError] = React.useState("");
    const [foundError, setFoundError] = React.useState(false);
    const [serverError, setServerError] = React.useState(false);
    const [profileError, setProfileError] = React.useState("");
    const [currentUser, setCurrentUser] = React.useState({});
    const [isLoadingMovies, setIsLoadingMovies] = React.useState(false);
    const [token, setToken] = React.useState("");
    const history = useHistory();
    const { pathname } = useLocation();
    function changeFilter() {
        setIsFilterMovies(!isFilterMovies);
    }
    function tokenCheck() {
        const jwt = localStorage.getItem('jwt');
        const movies = localStorage.getItem('movies');
        const savedMovies = localStorage.getItem('savedMovies');
        if (jwt) {
            setToken(jwt);
            if (movies) {
                setMoviesCollection(movies);
            }
            if (savedMovies) {
                setSavedMoviesCollection(savedMovies);
            }
            MoviesApi.getContent(jwt)
                .then((user) => {
                    setCurrentUser(user);
                    setIsLogged(true);
                    history.push('/');
                })
                .catch((err) => {
                    setServerError(true);
                })
        }
    }
    React.useEffect(() => {
        tokenCheck();
    }, []);
    function onRegister({ email, password, name }) {
        MoviesApi.register({ email, password, name })
            .then((data) => {
                if (data.user) {
                    onLogin({ email, password })
                }
            }).catch((err) => {
                setRegisterError('Что-то пошло не так! Попробуйте ещё раз.');
                if (err === 400) return setRegisterError('некорректно заполнено одно из полей ');
            })
    }
    function onLogin({ email, password }) {
        MoviesApi.authorize({ email, password })
            .then((data) => {
                if (data.token) {
                    setToken(data.token);
                    localStorage.setItem('jwt', data.token);
                    setIsLogged(true);
                    history.push('/movies');
                }
            }).catch((err) => {

                if (err === 400) return setLoginError('не передано одно из полей');
                if (err === 401) return setLoginError('пользователь с email не найден');
                setLoginError('Попробуйте еще раз!');
                console.log(err);
            })
    }
    function onSignOut() {
        localStorage.removeItem('jwt');
        localStorage.removeItem('movies');
        localStorage.removeItem('savedMovies');
        setIsLogged(false);
        setMoviesCollection([]);
        setSavedMoviesCollection([]);
        setFilterTimeSavedMoviesCollection([]);
        setFilterSavedMoviesCollection([]);
        setFilterTimeMoviesCollection([]);
        setFilterMoviesCollection([]);
        clearAllErrors();
        history.push('/signin');
    }
    function clearAllErrors() {
        setLoginError("");
        setRegisterError("");
        setFoundError(false);
        setServerError(false);
        setProfileError("");
    }
    function searchMovies(searchText) {
        setServerError(false);
        if (moviesCollection.length > 0) {
            const result = search(moviesCollection, searchText);
            if (result.length > 0) {
                setFoundError(false);
            }
            else {
                setFoundError(true);
            }
            setFilterMoviesCollection(result);
        }
        else {
            setIsLoadingMovies(true);
            MainApi.getInitialMovies()
                .then((res) => {
                    setMoviesCollection(res);
                    localStorage.setItem('movies', JSON.stringify(res));
                    const result = search(res, searchText);
                    if (result.length > 0) {
                        setFoundError(false);
                    }
                    else {
                        setFoundError(true);
                    }
                    setFilterMoviesCollection(result);
                })
                .catch((err) => setServerError(true));

            setIsLoadingMovies(false);
        }
    }
    function searchSavedMovies(searchText) {
        setServerError(false);
        if (savedMoviesCollection.length > 0) {
            setFilterSavedMoviesCollection(search(savedMoviesCollection, searchText));
        }
        else {
            setIsLoadingMovies(true);
            MoviesApi.getSavedMovies()
                .then((res) => {
                    setSavedMoviesCollection(res);
                    localStorage.setItem('savedMovies', JSON.stringify(res));
                    setFilterSavedMoviesCollection(search(savedMoviesCollection, searchText));
                })
                .catch((err) => setServerError(true));
            setIsLoadingMovies(false);
        }
    }
    function search(collection, searchText) {
        let result = [];
        collection.forEach((movie) => {
            if (movie.nameRU.toLowerCase().indexOf(searchText.toLowerCase()) > -1) {
                result.push(movie);
            }
        })
        return result;
    }
    function searchFilterTime(collection) {
        let result = [];
        collection.forEach((movie) => {
            if (movie.duration <= 40) {
                result.push(movie);
            }
        })
        return result;
    }
    React.useEffect(() => {
        setFoundError(false);
        if (isFilterMovies) {
            if (pathname === "/movies") {
                const result = searchFilterTime(filterMoviesCollection);
                if (result.length > 0) {
                    setFoundError(false);
                }
                else {
                    setFoundError(true);
                }
                setFilterTimeMoviesCollection(result);
            }
            else if (pathname === "/saved-movies") {
                const result = searchFilterTime(filterSavedMoviesCollection);
                if (result.length > 0) {
                    setFoundError(false);
                }
                else {
                    setFoundError(true);
                }
                setFilterTimeSavedMoviesCollection(result);
            }

        }
    }, [isFilterMovies])
    function movieDeleteFromSavedMovies(id) {
        setIsLoadingMovies(true);
        MoviesApi.deleteSavedMovie({ token, id })
            .then(() => {
                const result = filterMoviesById(savedMoviesCollection, id);
                setSavedMoviesCollection(result);
                localStorage.setItem('savedMovies', JSON.stringify(result));
                setFilterSavedMoviesCollection(filterSavedMoviesCollection, id);
                setFilterTimeSavedMoviesCollection(filterTimeMoviesCollection, id);
            })
            .catch((err) => setServerError(true));
        setIsLoadingMovies(false);
    }
    function movieSaveInStore(movie) {
        setIsLoadingMovies(true);
        MoviesApi.saveMovie({ token, movie })
            .then((res) => {
                const movies = [...savedMoviesCollection, res];
                localStorage.setItem('savedMovies', JSON.stringify(movies));
                setSavedMoviesCollection(prev => [...prev, res]);
            }).catch((err) => setServerError(true));
        setIsLoadingMovies(false);
    }
    function filterMoviesById(collection, id) {
        return collection.filter((item) => { return item._id !== id });
    }
    function changeProfile({ name, email }) {
        MoviesApi.editUserProfile({ token, name, email })
            .then((newUser) => {
                if (newUser._id) {
                    setCurrentUser(newUser);
                    setProfileError("Данные профиля успешно изменены");
                }
                else if (newUser.message) {
                    setProfileError(newUser.message);
                }
            }).catch((err) => setProfileError("Произошла ошибка при обновлении профиля"));
    }
    React.useEffect(() => {
        setProfileError("");
    }, [pathname]);
    return (
        <CurrentUserContext.Provider value={currentUser}>
            <Switch>
                <Route exact path="/" isLogged={isLogged}>
                    <Main isLogged={isLogged} />
                </Route>
                <ProtectedRoute exact path="/movies" isLogged={isLogged}>
                    <Movies isLogged={isLogged} isFilterMovies={isFilterMovies} setFilter={changeFilter} moviesCollection={isFilterMovies ? filterTimeMoviesCollection : filterMoviesCollection} searchMovies={searchMovies} searchSavedMovies={searchSavedMovies} isLoadingMovies={isLoadingMovies} savedMovies={savedMoviesCollection} movieDeleteFromSavedMovies={movieDeleteFromSavedMovies} movieSaveInStore={movieSaveInStore} foundError={foundError} serverError={serverError} clearAllErrors={clearAllErrors} />
                </ProtectedRoute>
                <ProtectedRoute exact path="/saved-movies" isLogged={isLogged}>
                    <SavedMovies isLogged={isLogged} isFilterMovies={isFilterMovies} setFilter={changeFilter} moviesCollection={isFilterMovies ? filterTimeSavedMoviesCollection : filterSavedMoviesCollection} searchMovies={searchMovies} searchSavedMovies={searchSavedMovies} isLoadingMovies={isLoadingMovies} savedMovies={savedMoviesCollection} movieDeleteFromSavedMovies={movieDeleteFromSavedMovies} movieSaveInStore={movieSaveInStore} foundError={foundError} serverError={serverError} clearAllErrors={clearAllErrors} />
                </ProtectedRoute>
                <ProtectedRoute exact path="/profile" isLogged={isLogged}>
                    <Profile isLogged={isLogged} onSignOut={onSignOut} changeProfile={changeProfile} profileError={profileError} setProfileError={setProfileError} />
                </ProtectedRoute>
                <Route exact path="/signin">
                    {isLogged ? <Redirect to="/" /> : <Login onLogin={onLogin} clearErrors={clearAllErrors} loginError={loginError} setLoginError={setLoginError} />}
                </Route>
                <Route exact path="/signup">
                    {isLogged ? <Redirect to="/" /> : <Register onRegister={onRegister} clearErrors={clearAllErrors} registerError={registerError} setRegisterError={setRegisterError} />}
                </Route>
                <Route path="*" >
                    <NotFound />
                </Route>
            </Switch>
        </CurrentUserContext.Provider>
    )
};
export default App;
