import React from "react";
import { Link } from "react-router-dom";
import "./Login.css";
import { useFormWithValidation } from "../../hooks/useFormWIthValidation";

function Login({ onLogin, clearErrors, loginError }) {
    const { values, handleChange, errors, isFormValid, resetForm } = useFormWithValidation();
    function handleLogin(e) {
        e.preventDefault();
        onLogin({ email: values.email, password: values.password });
        resetForm();
    }
    function handleClearErrors() {
        resetForm();
        clearErrors();
    }
    return (
        <section className="login">
            <Link to="/" className="login__logo"></Link>
            <h1 className="login__title">Рады видеть!</h1>
            <form className="login__form" onSubmit={handleLogin}>
                <fieldset className="login__fieldset">
                    <p className="login__text">E-mail</p>
                    <input className="login__input" type="email" name="email" value={values.email || ""} onChange={handleChange} required />
                    <span className="login__error">{errors.email}</span>
                    <p className="login__text">Пароль</p>
                    <input className="login__input" type="password" name="password" value={values.password || ""} onChange={handleChange} required minLength="8" />
                    <span className="login__error">{errors.password}</span>
                </fieldset>
                <div className="login__bottom">
                    <span className="login__error">{loginError}</span>
                    <button className={isFormValid ? "login__button" : "login__button login__button_invalid"} type="submit" disabled={!isFormValid}>Войти</button>
                    <div className="login__links">
                        <p className="login__answer">Ещё не зарегистрированы?</p>
                        <Link className="login__link" to="/signup" onClick={handleClearErrors}>Регистрация</Link>
                    </div>
                </div>
            </form>

        </section>
    )
};
export default Login;