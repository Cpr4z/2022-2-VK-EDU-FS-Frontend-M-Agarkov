import React from "react";

import { ChatHeader } from "../../Components/ChatHeader";
import ChatBody from "../../Components/ChatBody/ChatBody.jsx";
import ChatMessageForm from "../../Components/ChatMessageForm/ChatMessageForm.jsx";

import styles from "../Pages.module.scss";

function ChatPage() {
    return (
        <section className={styles.chatPage}>
            <ChatHeader />
            <ChatBody />
            <ChatMessageForm />
        </section>
    );
}

export default ChatPage;