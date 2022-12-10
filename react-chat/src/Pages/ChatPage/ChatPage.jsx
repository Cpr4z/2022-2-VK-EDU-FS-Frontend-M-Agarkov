import React from "react";
import { useEffect, useState } from "react";
import recieveCSRF from "./getCSRF";
import { ChatHeader } from "../../Components/ChatHeader";
import { ChatBody } from "../../Components/ChatBody";
import { ChatMessageForm } from "../../Components/ChatMessageForm";

import styles from "../Pages.module.scss";


import { Centrifuge } from "centrifuge";
const centrifuge = new Centrifuge("ws://localhost:8000/connection/websocket");
const sub = centrifuge.newSubscription("chat");

function ChatPage({ chat }) {
    const [messages, setMessages] = useState([]);

   function addMessagesToChat(ctx) {
     setMessages((prev) => {
       const newMessages = Object.assign([], prev);
       newMessages.unshift(ctx.data.message);
       return newMessages;
     });
   }

    //useEffect(() => {
        //console.log("messages", messages);
        //console.log(chat.id)
    //}, [messages]);

    useEffect(() => {
        if (chat.id === -1) {
            const pollItems = () => {
                fetch(`https://tt-front.vercel.app/messages`)
                    .then((resp) => resp.json())
                    .then((data) => setMessages(data.reverse()));
            };
            setInterval(() => pollItems(), 2000);

            return;
        }
        fetch(`chats/messages_in_chat/${chat.id}/`)
            .then((resp) => resp.json())
            .then((data) => setMessages(data.reverse()));
    }, [chat]);

    useEffect(() => {
        // чтобы соединение не пыталось установиться на GP
        // sub.on("publication", addMessagesToChat);
        // sub.subscribe();
        // centrifuge.connect();
    }, []);

    function sendMessage(message) {
        if (chat.id === -1) {
            fetch(`https://tt-front.vercel.app/message`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "X-CSRFToken": recieveCSRF()
                },
                body: JSON.stringify(message),
            });
            return;
        }
        fetch(`chats/messages_in_chat/${message.chat_id}/`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "X-CSRFToken": recieveCSRF()
            },
            body: JSON.stringify(message),
        });
    }

    return (
        <section className={styles.chatPage}>
            <ChatHeader name={chat.id} />
            <ChatBody messages={messages} chat={chat} />
            <ChatMessageForm sendMessage={sendMessage} chat={chat} />
        </section>
    );
}

export { ChatPage };


