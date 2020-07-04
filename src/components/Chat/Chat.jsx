import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { MessageField } from '../MessageField/MessageField';
import { ChatForm } from './ChatForm/ChatForm';
import './Chat.css';

export const Chat = ({ isLoading, messages, onSendMessage }) => {
    if(isLoading) {
        return (
        <h1 className="loading-tittle">Your chats are loading now. Please, wait a bit</h1>
        )
    }

    return (
    <main>

        {!messages && <strong className="unavailable">This chat doesn't exist</strong>}
        {messages && <MessageField messages={messages} />}
        {messages && <ChatForm onSendMessage={onSendMessage} />}

        <div className="flex">
            <Link to="/" className="contacts-link">Main Page</Link>
            <Link to="/contacts" className="contacts-link">Contacts</Link>
        </div>
    </main>
    )
};

Chat.propTypes = {
    isLoading: PropTypes.bool.isRequired,
    onSendMessage: PropTypes.func.isRequired,
}
