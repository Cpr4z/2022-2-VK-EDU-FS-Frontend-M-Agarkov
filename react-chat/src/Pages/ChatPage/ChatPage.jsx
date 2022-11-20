import React from 'react'
import { useState, useEffect } from 'react'

import { ChatHeader } from '../../Components/ChatHeader'
import { ChatBody } from '../../Components/ChatBody'
import { ChatMessageForm } from '../../Components/ChatMessageForm'

import {
    getMesagesFromLocalStorage,
    saveMessageToLocalStorage,
} from './localStorage'

function ChatPage({ chatId }) {

    console.log(chatId)

    let [messages, setMessages] = useState([])

    function sendMessage(message) {
        // сохраняем в массив, localStorage и взаимодействуем с бэком
        const newMessages = Object.assign([], messages);
        newMessages.unshift(message);
        setMessages(newMessages);
        saveMessageToLocalStorage(message)
    }

    function loadMessages() {
        let savedMessages = getMesagesFromLocalStorage()
        if (savedMessages) {
            setMessages(savedMessages.reverse());
        }
    }

    useEffect(loadMessages, [])

    return (
        <>
            <ChatHeader />
            <ChatBody messages={messages} />
            <ChatMessageForm sendMessage={sendMessage} />
        </>
    )
}

export { ChatPage };