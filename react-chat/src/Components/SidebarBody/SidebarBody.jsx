import React from "react";
import { useState, useEffect } from "react";
import styles from "./SidebarBody.module.scss";
import { useNavigate } from "react-router-dom";

function SidebarBody({ openChat }) {

    const [chats, setChats] = useState([]);
    const navigate = useNavigate();

    function getChats(id) {
        fetch(`chats/owned_by_user/${id}`, {
            method: "GET",
            mode:'no-cors',
            headers: {
                "Content-Type": "application/json",
            },
        })
            .then((resp) => resp.json())
            .then((data) => {
                setChats(data)});
    }

    useEffect(() => {
        getChats(2);
    }, []);

    useEffect(() => {
        console.log("chats", chats);
    }, [chats]);

    const chatBlocks = chats.map((chat, index) => {
        return (
            <section
                key={index}
                className={styles.chatPreview}
                onClick={() => {
                    openChat(chat)
                    navigate(`/chat/${chat.id}`);
                }}
            >
                <div className={styles.chatPicture}>
                    <img
                        className={styles.picture}
                        src="https://via.placeholder.com/60"
                        alt="profile_pic"
                    />
                </div>

                <div className={styles.chatDetails}>
                    <span className={styles.chatName}>{chat.id}</span>
                    <span className={styles.chatLastMessage}>hello, world</span>
                </div>
                <div className={styles.chatMeta}>
                    <span className={styles.LastMessageTime}>13:39</span>
                    <span className={styles.messageState}>99</span>
                </div>
            </section>
        );
    });

    return (
        <article className={styles.chatsContainer}>
            {chatBlocks}

            <section
                className={styles.chatPreview}
                onClick={() => openChat({ id: -1, title: "Frontend chat" })}
            >
                <div className={styles.chatPicture}>
                    <img
                        className={styles.picture}
                        src="https://via.placeholder.com/60"
                        alt="profile_pic"
                    />
                </div>
                <div className={styles.chatDetails}>
                    <span className={styles.chatName}>Frontend chat</span>
                </div>
                <div className={styles.chatMeta}>
                </div>
            </section>
        </article>
    );
}

export { SidebarBody };
