import React from "react";
import { useState, useEffect } from "react";
import styles from "./SidebarBody.module.scss";
import { useNavigate } from "react-router-dom";

import { connect } from "react-redux";
import { openChatAction } from "../../actions/activeChatAction";

function SidebarBody(props) {

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
            .then((data) => setChats(data));
    }

    useEffect(() => {
        getChats(2);
    }, []);

    useEffect(() => {
        //console.log("чаты пользователя: (SidebarBody)", chats);
    }, [chats]);

    const chatBlocks = chats.map((chat, index) => {
        return (
            <section
                key={index}
                className={styles.chatPreview}
                onClick={() => {
                    props.openChatAction(chat);
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
                onClick={() => {
                    props.openChatAction({ id: -1, title: "Front-end chat" });
                    navigate(`/chat/-1`);
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
                    <span className={styles.chatName}>Frontend chat</span>
                </div>
                <div className={styles.chatMeta}></div>
            </section>
        </article>
    );
}

const mapStateToProps = (state) => ({
    chat: state.activeChatsReduser,
});

export default connect(mapStateToProps, { openChatAction })(SidebarBody);