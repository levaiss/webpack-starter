import {EventEmitter} from 'events';

function _openModal(modal) {
  this.activeModal = modal;
  this.activeModal.classList.add(this.activeClass);
}

function _closeModal() {
  if (!this.activeModal) return;
  this.activeModal.classList.remove(this.activeClass);
  this.activeModal = null;
}

export default class Modal extends EventEmitter {
  constructor(props) {
    super();

    this.activeClass = props && props.activeClass || 'is-open';
    this.activeModal = null;

    this.openModal = _openModal.bind(this);
    this.closeModal = _closeModal.bind(this);
  }

  open(modalName) {
    let modal = document.getElementById(modalName);
    if (!modal) throw `[Modal] modal ${modalName} not found!`;

    if (modal === this.activeModal) return;

    this.closeModal();
    this.openModal(modal);
    this.emit('modal-opened', modalName);
  }

  close() {
    this.closeModal();
    this.emit('modal-closed');
  }
}
