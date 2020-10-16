import {EventEmitter} from 'events';

export default class MMenu extends EventEmitter {
  constructor({elSelector, actionSelector}) {
    super();

    this.el = document.querySelector(elSelector);
    this.actions = document.querySelectorAll(actionSelector);
    this.body = document.body;
    this.opened = false;

    if (!this.el) throw (`[MMenu]: el not found!`);
    if (!this.actions.length) throw (`[MMenu]: actions not found!`);

    this.actions.forEach((action) => {
      action.addEventListener('click', (event) => {
        event.preventDefault();

        if (this.opened) {
          this.close();
          return;
        }
        this.open();
      });
    });
  }

  open() {
    this.opened = true;
    this.el.classList.add('is-open');
    this.body.classList.add('mmenu-opened');
    this.emit('mmenu-opened');
  }

  close() {
    this.opened = false;
    this.el.classList.remove('is-open');
    this.body.classList.remove('mmenu-opened');
    this.emit('mmenu-closed');
  }

  isOpened() {
    return this.opened;
  }
}
