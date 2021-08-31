import React from "react";
import "./Footer.css";

function Footer() {
    return (
        <footer className="footer">
            <p className="footer__text">Учебный проект Яндекс.Практикум х BeatFilm.</p>
            <div className="footer__bottom">
                <p className="footer__year">&#169; 2021</p>
                <div className="footer__links">
                    <a className="footer__link" href="https://practicum.yandex.ru/" target="_blank" rel="noreferrer">Яндекс.Практикум</a>
                    <a className="footer__link" href="https://github.com/gremwiz1" target="_blank" rel="noreferrer">Github</a>
                    <a className="footer__link" href="https://www.facebook.com/profile.php?id=100005430076556" target="_blank" rel="noreferrer">Facebook</a>
                </div>
            </div>
        </footer>
    )
};
export default Footer;