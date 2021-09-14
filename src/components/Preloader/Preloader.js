import React from 'react'
import './Preloader.css'

const Preloader = ({ isLoadingMovies }) => {
    return (
        <div className={isLoadingMovies ? "preloader" : "preloader_hide"}>
            <div className="preloader__container">
                <span className="preloader__round"></span>
            </div>
        </div>
    )
};

export default Preloader
