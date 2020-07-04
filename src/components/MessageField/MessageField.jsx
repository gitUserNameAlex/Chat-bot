import React from 'react';
import PropTypes from 'prop-types';
import './MessageField.css';
import { Message } from './Message/Message';

export const MessageField = ({ messages }) => (
    <ul className='message-list'>
        {messages.length == 0 && <strong>There is no messages yet. Be first to write!</strong>}
        {messages.map((item, index) => <Message { ...item } key={ index } />)}
    </ul>
);

MessageField.propTypes = {
    messages: PropTypes.arrayOf(PropTypes.shape(Message.propTypes)).isRequired,
}