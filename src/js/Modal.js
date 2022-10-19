import Message from './Message.js';

export default class Modal {
  constructor() {
    this.modalContainer = document.querySelector('.modal-container');
    this.modalForm = document.querySelector('.modal-form');
    this.modalInput = document.querySelector('.modal-input');

    this.resetBtn = document.querySelector('.reset-btn');
  }

  init(modalForm, messageInput, chat, messages, element) {
    this.modalForm.addEventListener('submit', (e) => {
      e.preventDefault();

      if (this.modalInput.value) {
        this.value = this.checkValidity(this.modalInput.value);

        if (this.value) {
          this.value = this.value[0].split(',');
          const latitude = this.value[0].trim();
          const longitude = this.value[1].trim();

          const newMessage = new Message(`${latitude}, ${longitude}`, element);
          messages.push(newMessage);
          newMessage.createMessage(chat, messages);
          document.querySelector('.message-form').reset();
          this.resetModal();
        } else {
          const err = document.createElement('div');
          err.classList.add('invalid');
          err.innerHTML = '<p class=\'error text\'>Введите корректные координаты</p>';
          this.modalContainer.appendChild(err);
          this.modalInput.addEventListener('input', () => {
            err.remove();
          });
        }
      }
    });

    this.resetBtn.addEventListener('click', (e) => {
      this.resetModal(e);
    });
  }

  resetModal() {
    this.modalForm.reset();
    this.modalContainer.classList.add('hidden');
  }

  checkValidity(string) {
    return string.match(/(-*\d+\.\d+),\s*(-*\d+\.\d+)/gm);
  }
}