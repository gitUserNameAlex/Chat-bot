import { push } from 'connected-react-router';
import { createChat } from './chatActions';

export const chatMiddleware = (store) => (next) => (action) => {
    next(action);

    if(action.type === createChat.toString()) {
        store.dispatch(push('/chats/' + action.payload.id))
    }
}