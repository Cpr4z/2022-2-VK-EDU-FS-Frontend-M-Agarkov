import React from "react";
import styles from "./ChatBody.module.scss";
import { useEffect } from "react";

import { connect, useSelector } from "react-redux";

import { getMessagesAction } from "../../actions/messageAction";
import { renderNewMessageAction } from "../../actions/messageAction";

function ChatBody(props, {chat}) {

    useEffect(() => {
        props.getMessagesAction(chat.id);
    }, [chat]);

    let messageBlocks;
    if (props.messages) {
        messageBlocks = props.messages.map((message, index) => {
            return (
                <div
                    key={index}
                    className={`${styles.message} ${
                        chat.id !== message.author_id ? styles.right : styles.left
                    }`}
                >
                    <div className={styles.messageMeta}>
                        {message.author === "Matvey" ? (
                            <>
                                <span className={styles.messageDate}>{message.sent_time}</span>
                                <span className={styles.messageAuthor}>{message.author}</span>
                            </>
                        ) : (
                            <>
                                <span className={styles.messageAuthor}>{message.author}</span>
                                <span className={styles.messageDate}>{message.sent_time}</span>
                            </>
                        )}
                    </div>
                    <div className={styles.messageText}>
                        {message.file && (
                            <img className={styles.file} src={message.file} alt="" />
                        )}
                        {message.audio && (
                            <audio controls="controls" src={message.audio}></audio>
                        )}
                        {message.location && <a href={message.location}>My location</a>}
                        <span>{message.text}</span>
                    </div>
                </div>
            );
        });
    } else {
        messageBlocks = <>Nothing</>;
    }
    return <section className={styles.chat}>{messageBlocks}</section>;
}

const mapStateToProps = (state) => ({
    messages: state.messageReduser.messages,
});

export default connect(mapStateToProps, {
    getMessagesAction,
    renderNewMessageAction,
})(ChatBody);
