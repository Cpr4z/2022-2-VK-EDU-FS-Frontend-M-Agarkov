import '../css/chat-sections.css'
import '../css/screen.css'
import '../css/header.css'
import '../css/flying-button.css'

const chat = document.querySelector('.chats-storage');
chat.addEventListener('click', mainChat.bind(this));
function mainChat(){
    window.location.href = 'chat.html';
}