import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Chat } from '../components/Chat/Chat';
import { sendMessage } from '../store/chatActions';


export const ROBOT_NAME = 'Robot';


const mapStateToProps = (store, props) => {
    const { id } = props.match.params;
    const chat = id && store.chats.items && store.chats.items[id] ? store.chats.items[id] : undefined;

    return {
        isLoading: store.chats.isLoading,
        messages: chat ? chat.messages : undefined,
    }
}

const mapDispatchToProps = (dispatch) =>
    bindActionCreators({ sendMessage }, dispatch);

const mergeProps = (stateProps, dispatchProps, ownProps) => {
    const { id } = ownProps.match.params;

    const onSendMessage = (message) => {
        dispatchProps.sendMessage(id, message.name, message.content);
    }

    return {
        ...stateProps,
        onSendMessage,
    }
}

export default connect(mapStateToProps, mapDispatchToProps, mergeProps)(Chat);