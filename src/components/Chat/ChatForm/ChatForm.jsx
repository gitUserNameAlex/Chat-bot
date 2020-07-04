import React from 'react';
import PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { useInput } from '../../../hooks/useInput'
import './ChatForm.css'

export const ChatForm = ({ onSendMessage }) => {
    const [name, setName] = useInput("");
    const [content, setContent, setContentState] = useInput("");

    const handleSubmit = (event) => {
        event.preventDefault();
        onSendMessage({ name, content });
        setContentState("");
    }
    
    //отправка сообщений по нажатию Enter
    const handleKeyUp = (event) => {
        if (event.keyCode === 13) {
            event.preventDefault();
            onSendMessage({ name, content });
            setContentState("");
        }
    }

    return (
        <form className="form">

            <div className="form-field">
            <TextField 
            id="standard-basic"
            label="Name"
            placeholder="Name:"
            value={name}
            className="form-field"
            onChange={setName} 
            />
            </div>

            <div className="form-field">
            <TextField
            id="standard-textarea"
            label="Content"
            multiline
            rows={4}
            placeholder="Your message:"
            value={content}
            onChange={setContent}
            className="form-field"
            onKeyUp={handleKeyUp}
            />
            </div>
            
            <div className="form-field">
            <Button 
                variant="contained" 
                color="secondary" 
                onClick={handleSubmit}
            >
                Send
            </Button>
            </div>
        </form>
    )
}

ChatForm.propTypes = {
    onSendMessage: PropTypes.func.isRequired,
}