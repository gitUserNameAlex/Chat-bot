import { sendMessage, createChat } from './chatActions';
import { ROBOT_NAME } from '../containers/ChatContainer';
import { sendMessageToBot } from './chatAsyncActions';


export const botMiddleware = (store) => (next) => (action) => {
    next(action);

    if(action.type === sendMessage.toString()) {
        const { id, name, content } = action.payload;

        if (name !== ROBOT_NAME) {
            store.dispatch(sendMessageToBot(ROBOT_NAME, id, content));
        }
    }
    
    else if (action.type === createChat.toString()) {
        const { id, name } = action.payload;
    }
}