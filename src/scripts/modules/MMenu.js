import {EventEmitter} from 'events';

export default class MMenu extends EventEmitter {
    constructor({elClass, actionClass}) {
        super();

        this.el = document.querySelector(elClass);
        this.actions = document.querySelectorAll(actionClass);
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
        this.emit('mmenu-opened');
    }

    close() {
        this.opened = false;
        this.el.classList.remove('is-open');
        this.emit('mmenu-closed');
    }

    isOpened() {
        return this.opened;
    }
}