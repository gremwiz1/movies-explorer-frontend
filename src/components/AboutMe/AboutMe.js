import React from "react";
import { Link } from "react-router-dom";
import "./AboutMe.css";

function AboutMe() {
    return (
        <section className="about" id="about">
            <h3 className="about__subtitle">Студент</h3>
            <div className="about__content">
                <div>
                    <h4 className="about__content_name">Михаил</h4>
                    <p className="about__content_profession">Фронтенд-разработчик, 42 года</p>
                    <p className="about__content_description">Я родился и живу в Москве. У меня есть жена
                        и шестеро детей. Недавно начал кодить. С удовольствием для себя создаю сайты и приложения. С 2003 года и по настоящее время работаю в компании ООО «Технопроект». В будущем планирую полностью перейти в сферу IT.</p>
                    <div className="about__content_socials">
                        <Link className="about__content_social" to="https://www.facebook.com/profile.php?id=100005430076556">Facebook</Link>
                        <Link className="about__content_social" to="https://github.com/gremwiz1">Github</Link>
                    </div>
                </div>
                <div className="about__content_photo"></div>
            </div>
        </section>
    )
};
export default AboutMe;