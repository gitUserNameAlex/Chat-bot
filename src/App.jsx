import React from 'react';
import { Provider } from 'react-redux';
import { Switch, Route } from 'react-router-dom';
import { ConnectedRouter } from 'connected-react-router';
import ChatContainer from './containers/ChatContainer';
import ChatListContainer from './containers/ChatListContainer';
import { MainPage } from './components/MainPage/MainPage';
import { ContactsPage } from './components/ContactsPage/ContactsPage';
import { initStore, history } from './store';
import { fetchChats } from './store/chatAsyncActions';


const store = initStore();
store.dispatch(fetchChats());


export const App = () => (
    <Provider store = { store }>
    <ConnectedRouter history = { history }>
        <Switch>

            <Route path="/chats">
            <ChatListContainer />
                <Switch>
                    <Route path="/chats" exact component = { ChatContainer }/>
                    <Route path="/chats/:id" exact component = { ChatContainer }/>
                </Switch>
            </Route>

            <Route path="/" exact component = { MainPage }/>
            <Route path="/contacts" exact component = { ContactsPage }/>
            <Route path="/">Error 404</Route>

        </Switch>
    </ConnectedRouter>
    </Provider>
)