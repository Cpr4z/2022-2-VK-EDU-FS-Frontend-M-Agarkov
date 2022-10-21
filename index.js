import './index.css';

const chat = document.querySelector('.chat')
const form = document.querySelector('.form')
const input = document.querySelector('.from-input')

form.addEventListener('submit', this.handleSubmit.bind(this))
form.addEventListener('keypress', this.handleKeyPress.bind(this));
from.addEventListener('DOMContentLoader', this.getMessagesFromLocalStorage.bind(this))

function handleKeyPress (event) {
    if (event.keyCode === 13) {
        form.dispatchEvent(new Event('submit'));
    }
}

function handleSubmit(event){
    event.preventDefault()
    let time = new Date()
    let message = {
        'text':input.value,
        'date': `${time.getHours()}:${time.getMinutes()}`,
        'sender_name':'Agarkov Matvey'
    }
    createMessageBlock(message)
    input.value = ''
}

function getMessagesFromLocalStorage(){
    let messages = localStorage.getItem('messages')
    if (messages == ''|| messages==null){
        return
    }
    messages = JSON.parse(messages)
    for (let message of messages.all){
        createMessageBlock(message, save=false)
    }
}

function saveMessageToLocalStorage(message){
    let messages = localStorage.getItem('messages')
    if (messages == '' || messages == null){
        localStorage.setItem('messages', JSON.stringify({'all':[]}))
    }
    messages = localStorage.getItem('messages')
    messages = JSON.parse(messages)
    messages.all.push(message)
    localStorage.setItem('messages', JSON.stringify(messages))
}

function createMessageBlock(message, save=true){
    
    let message_block = document.createElement('div')
    message_block.className = 'message right'

    let message_text = document.createElement('div')
    message_text.className = 'message-text'
    message_text.innerText = message.text
    message_block.append(message_text)

    let message_meta = document.createElement('div')
    let message_date = document.createElement('div')
    let message_state = document.createElement('div')
    message_meta.className = 'message-meta'
    message_date.classname = 'message-date'
    message_date.innerText = message.date
    message_state.className = 'message-state'
    message_state.innerText = "<span class='material-icons'>done_all</span>"

    message_meta.append(message_date)
    message_meta.append(message_state)
    message_block.append(message_meta)

    messages.append(message_block)
    if(save){
        saveMessageToLocalStorage(message)
    } 
}