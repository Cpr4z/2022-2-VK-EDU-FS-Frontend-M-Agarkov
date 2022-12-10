import React from "react";
import styles from "./ChatBody.module.scss";

function ChatBody({ messages, chat }) {
    console.log("chat", chat);

    const messageBlocks = messages.map((message, index) => {
        console.log("message ", message.id);
        return (
            <div
                key={index}
                className={`${styles.message} ${
                    message.author === "Matvey" ? styles.left : styles.right
                }`}
            >
                <div className={styles.messageMeta}>
                    {message.author === "Matvey" ? (
                        <>
                            <span className={styles.messageDate}>{message.date}</span>
                            <span className={styles.messageAuthor}>{message.author}</span>
                        </>
                    ) : (
                        <>
                            <span className={styles.messageAuthor}>{message.author}</span>
                            <span className={styles.messageDate}>{message.date}</span>
                        </>
                    )}
                </div>
                <div className={styles.messageText}>
                    {message.image && (
                        <img className={styles.file} src={message.file} alt=""/>
                    )}
                    {message.audio && (
                        <audio controls="controls" src={message.audio}></audio>
                    )}
                    {message.location !== "" && (
                        <a href={message.location}>My location</a>
                    )}
                    <span>{message.text}</span>
                </div>
            </div>
        );
    });

    return <section className={styles.chat}>{messageBlocks}</section>;
}

export { ChatBody };

