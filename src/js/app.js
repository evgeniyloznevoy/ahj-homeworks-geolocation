import Message from './Message.js';
import Modal from './Modal.js';

class App {
  constructor() {
    this.chatContainer = document.querySelector('.chat-container');
    this.chat = document.querySelector('.chat');

    this.messageForm = document.querySelector('.message-form');
    this.messageInput = document.querySelector('.message-input');

    this.modalContainer = document.querySelector('.modal-container');

    this.messages = [];
  }

  init() {
    this.messageForm.addEventListener('submit', (e) => this.sendMessage(e));
  }

  sendMessage(evt) {
    evt.preventDefault();
    if (this.messageInput.value) {
      const elem = document.createElement('p');
      elem.classList.add('message-text');
      elem.textContent = this.messageInput.value;
      this.getGeolocation(elem);
    }
  }

  getGeolocation(element) {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          const mesPosition = `${latitude.toFixed(5)}, ${longitude.toFixed(5)}`;
          const newMessage = new Message(mesPosition, element);
          this.messages.push(newMessage);
          newMessage.createMessage(this.chat, this.messages, element);
          this.messageInput.closest('.message-form').reset();
        }, (error) => {
          console.log(error);
          this.modalContainer.classList.remove('hidden');
          const modal = new Modal();
          modal.init(this.modalForm, this.messageInput, this.chat, this.messages, element);
        },
      );
    }
  }
}

const app = new App();
app.init();