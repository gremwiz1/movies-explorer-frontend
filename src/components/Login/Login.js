import React from "react";
import { Link } from "react-router-dom";
import "./Login.css";

function Login() {
    return (
        <section className="login">
            <Link to="/" className="login__logo"></Link>
            <h1 className="login__title">Рады видеть!</h1>
            <form className="login__form">
                <fieldset className="login__fieldset">
                    <p className="login__text">E-mail</p>
                    <input className="login__input" type="email" required />
                    <span className="login__error"></span>
                    <p className="login__text">Пароль</p>
                    <input className="login__input" type="password" required minLength="8" />
                    <span className="login__error"></span>
                </fieldset>
                <div className="login__bottom">
                    <button className="login__button" type="submit">Войти</button>
                    <div className="login__links">
                        <p className="login__answer">Ещё не зарегистрированы?</p>
                        <Link className="login__link" to="/signup">Регистрация</Link>
                    </div>
                </div>
            </form>

        </section>
    )
};
export default Login;