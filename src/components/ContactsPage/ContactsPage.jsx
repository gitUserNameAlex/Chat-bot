import React from 'react';
import { Link } from 'react-router-dom';
import './ContactsPage.css';

export const ContactsPage = () => {
    return (
            <div className="main">
                <h1 className="main-tittle">Contacts Page</h1>

            <div className="about-dev">
                <p className="tittle">This chat bot was developed by <span className="red">Alexander Stolba</span></p>
                <p className="tittle">15 y.o. frontend-lover from Russia</p>
            </div>

            <div className="links">
                <h2 className="links-tittle">You can find me right there:</h2>
                <p><img src="../img/cat.png" alt="" className="img"/><a href="https://github.com/gitUserNameAlex" className="redirect">GitHub</a></p>
                <p><img src="../img/inst.png" alt="" className="img"/><a href="https://www.instagram.com/minty_man05" className="redirect">Instagram</a></p>
            </div>
            
            <Link to="/chats" className="chats-link">Chats</Link>

            </div>
    )
}