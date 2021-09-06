import React from "react";
import { Route, Redirect, Switch, useHistory } from "react-router-dom";
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
    const [currentUser, setCurrentUser] = React.useState({});
    const [token, setToken] = React.useState("");
    const history = useHistory();
    function changeFilter() {
        setIsFilterMovies(!isFilterMovies);
    }
    function tokenCheck() {
        const jwt = localStorage.getItem('jwt');
        if (jwt) {
            setToken(jwt);
            Promise.all([
                MoviesApi.getContent(jwt),
                MoviesApi.getSavedMovies(jwt)
            ])
                .then(([user, savedMovies]) => {
                    setCurrentUser(user);
                    setSavedMoviesCollection(savedMovies);
                    setIsLogged(true);
                    history.push('/');
                })
                .catch((err) => {
                    //if (err === 400) return console.log('Токен не передан или передан не в том формате');
                    //         if (err === 401) return console.log('Переданный токен некорректен');
                    console.log(err);
                })
        }
    }
    React.useEffect(() => {
        tokenCheck();
    }, []);
    function onRegister({ email, password, name }) {
        MoviesApi.register({ email, password, name })
            .then((data) => {
                if (data) {
                    history.push('/signin');
                }
            }).catch((err) => {
                //setInfoTooltipMessage('Что-то пошло не так! Попробуйте ещё раз.');
                if (err === 400) return console.log('некорректно заполнено одно из полей ');
                console.log(err);
            })
    }
    function onLogin({ email, password }) {
        MoviesApi.authorize({ email, password })
            .then((data) => {
                if (data.token) {
                    setToken(data.token);
                    localStorage.setItem('jwt', data.token);
                    setIsLogged(true);
                    history.push('/');
                }
            }).catch((err) => {

                //if (err === 400) return setInfoTooltipMessage('не передано одно из полей');
                //if (err === 401) return setInfoTooltipMessage('пользователь с email не найден');
                //setInfoTooltipMessage('Попробуйте еще раз!');
                console.log(err);
            })
    }
    function onSignOut() {
        localStorage.removeItem('jwt');
        setIsLogged(false);
        setMoviesCollection([]);
        setSavedMoviesCollection([]);
        history.push('/signin');
    }
    return (
        <CurrentUserContext.Provider value={currentUser}>
            <Switch>
                <Route exact path="/" isLogged={isLogged}>
                    <Main isLogged={isLogged} />
                </Route>
                <ProtectedRoute exact path="/movies" isLogged={isLogged}>
                    <Movies isLogged={isLogged} isFilterMovies={isFilterMovies} setFilter={changeFilter} moviesCollection={moviesCollection} />
                </ProtectedRoute>
                <ProtectedRoute exact path="/saved-movies" isLogged={isLogged}>
                    <SavedMovies isLogged={isLogged} isFilterMovies={isFilterMovies} setFilter={changeFilter} moviesCollection={savedMoviesCollection} />
                </ProtectedRoute>
                <ProtectedRoute exact path="/profile" isLogged={isLogged}>
                    <Profile isLogged={isLogged} onSignOut={onSignOut} />
                </ProtectedRoute>
                <Route exact path="/signin">
                    {isLogged ? <Redirect to="/" /> : <Login onLogin={onLogin} />}
                </Route>
                <Route exact path="/signup">
                    {isLogged ? <Redirect to="/" /> : <Register onRegister={onRegister} />}
                </Route>
                <Route path="*" >
                    <NotFound />
                </Route>
            </Switch>
        </CurrentUserContext.Provider>
    )
};
export default App;
