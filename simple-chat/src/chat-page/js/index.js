import '../css/index.css';

const messages = document.querySelector('.messages');
const form = document.querySelector('.form');   
const back = document.querySelector('.back-button')

form.addEventListener('submit', handleSubmit.bind(this));
form.addEventListener('keypress', handleKeyPress.bind(this));
window.addEventListener('DOMContentLoaded', getMessagesFromLocalStorage.bind(this));
back.addEventListener('click',mainPage.bind(this));

function handleKeyPress (event) {
    if (event.keyCode === 13) {
        form.dispatchEvent(new Event('submit'));
    }
}

function handleSubmit(event){
    event.preventDefault()
    const input = event.target.querySelector('.form-input');
    let time = new Date()
    let message = {
        'text':input.value,
        'date': `${time.getHours()}:${time.getMinutes()}`,
        'sender_name':'Agarkov Matvey'
    };
    if(input.value){
    createMessageBlock(message);
    input.value = '';
    }
}

function getMessagesFromLocalStorage(){
    if(!checkLocalStorage){
        return
    }
    let messages = localStorage.getItem('messages')
    console.log(messages)
    if (!messages){
        return
    }
    messages = JSON.parse(messages)
    console.log(messages.all)
    for (let message of messages.all){
        console.log(message)
        createMessageBlock(message, false)
    }
}

function checkLocalStorage(){
    try{
        localStorage.setItem('Matvey', 'Agarkov')
        localStorage.getItem('Matvey')
    }
    catch(err){
        return false
    }
    return true
}

function saveMessageToLocalStorage(message){
    if(!checkLocalStorage){
        return
    }
    let messages = localStorage.getItem('messages');
    if (messages == '' || messages == null){
        localStorage.setItem('messages', JSON.stringify({'all':[]}));
    }
    messages = localStorage.getItem('messages');
    messages = JSON.parse(messages);
    if(messages == undefined){
        return
    }
    messages.all.push(message)
    localStorage.setItem('messages', JSON.stringify(messages))
}

function createMessageBlock(message, save=true){
    console.log(message.text)
    console.log(message.date)
    console.log(message.sender_name)
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
    message_date.innerText= message.date
    message_state.className = 'message-state'
    message_state.innerHTML = "<span class='material-icons'>done_all</span>"

    message_meta.append(message_date)
    message_meta.append(message_state)
    message_block.append(message_meta)

    messages.append(message_block)
    if(save){
        saveMessageToLocalStorage(message)
    } 
}

function mainPage(){
    window.location.href = 'index.html';
}
