import React from "react";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import { useFormWithValidation } from "../../hooks/useFormWIthValidation";
import Header from "../Header/Header";
import "./Profile.css";

function Profile({ isLogged, onSignOut, changeProfile, profileError }) {
    const currentUser = React.useContext(CurrentUserContext);
    const { values, handleChange, errors, isFormValid, resetForm, setValues } = useFormWithValidation();
    function editUserProfile(e) {
        e.preventDefault();
        changeProfile({ email: values.email, name: values.name });
        resetForm();
    }
    function handleClickSignOut() {
        resetForm();
        onSignOut();
    }
    React.useEffect(() => {
        setValues(currentUser);
    }, [currentUser, setValues]);

    return (
        <section className="profile">
            <Header isLogged={isLogged} isMain={false} isProfile={true} isMovies={false} isSavedMovies={false} />
            <h1 className="profile__title">Привет, {currentUser.name}</h1>
            <form className="profile__form" onSubmit={editUserProfile}>
                <div className="profile__fields">
                    <div className="profile__field">
                        <p className="profile__text">Имя</p>
                        <input className="profile__input" name="name" value={values.name || ""} pattern="[а-яА-Яa-zA-ZёË\- ]{1,}" type="text" onChange={handleChange} minLength="2" required />
                    </div>
                    <span className="profile__error">{errors.name}</span>
                    <div className="profile__field">
                        <p className="profile__text">E-mail</p>
                        <input className="profile__input" name="email" value={values.email || ""} onChange={handleChange} type="email" required />
                    </div>
                    <span className="profile__error">{errors.email}</span>
                </div>
                <div className="profile__buttons">
                    <span className="profile__error">{profileError}</span>
                    <button className={isFormValid ? "profile__button-submit" : "profile__button-submit profile__button_invalid"} disabled={!isFormValid} type="submit">Редактировать</button>
                    <button className="profile__button-logout" type="button" onClick={handleClickSignOut}>Выйти из аккаунта</button>
                </div>

            </form>
        </section>
    )
};
export default Profile;