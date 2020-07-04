import React from 'react';
import { Link } from 'react-router-dom';
import './MainPage.css';

export const MainPage = () => {
    return (
        <div className="main">

                <h1 className="main-tittle">Main Page</h1>

            <div className="description">
                <p className="tittle">This chat bot was created in <span className="red">June 2020</span></p>
                <p className="tittle">Using <span className="red">React + Redux</span></p>
                <img src="../img/main.gif" alt=""/>
            </div>

            <Link to="/chats" className="chats-link">Chats</Link>

        </div>
    )
}

