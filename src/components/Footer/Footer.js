import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

function Footer() {
    return (
        <footer className="footer">
            <p className="footer__text">Учебный проект Яндекс.Практикум х BeatFilm.</p>
            <div className="footer__bottom">
                <p className="footer__year">&#169; 2021</p>
                <div className="footer__links">
                    <Link className="footer__link" to="https://practicum.yandex.ru/">Яндекс.Практикум</Link>
                    <Link className="footer__link" to="https://github.com/gremwiz1">Github</Link>
                    <Link className="footer__link" to="https://www.facebook.com/profile.php?id=100005430076556">Facebook</Link>
                </div>
            </div>
        </footer>
    )
};
export default Footer;