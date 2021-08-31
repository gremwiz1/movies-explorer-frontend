import React from "react";
import { Link } from "react-router-dom";
import "./Register.css";

function Register() {
    return (
        <section className="register">
            <Link to="/" className="register__logo"></Link>
            <h1 className="register__title">Добро пожаловать!</h1>
            <form className="register__form">
                <fieldset className="register__fieldset">
                    <p className="register__text">Имя</p>
                    <input className="register__input" type="text" required minLength="2" />
                    <span className="register__error"></span>
                    <p className="register__text">E-mail</p>
                    <input className="register__input" type="email" required />
                    <span className="register__error"></span>
                    <p className="register__text">Пароль</p>
                    <input className="register__input" type="password" required minLength="8" />
                    <span className="register__error"></span>
                </fieldset>
                <div className="register__bottom">
                    <button className="register__button" type="submit">Зарегистрироваться</button>
                    <div className="register__links">
                        <p className="register__answer">Уже зарегистрированы?</p>
                        <Link className="register__link" to="/signin">Войти</Link>
                    </div>
                </div>
            </form>

        </section>
    )
};
export default Register;