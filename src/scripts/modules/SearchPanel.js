import {EventEmitter} from 'events';

export default class SearchPanel extends EventEmitter {
    /**
     * Class return SearchPanel instance.
     * @param {String} elSelector - css selector
     * @param {String} actionSelector - css selector
     */
    constructor({elSelector, actionSelector}) {
        super();

        this.el = document.querySelector(elSelector);
        this.actions = document.querySelectorAll(actionSelector);
        this.body = document.body;
        this.opened = false;
        this.loading = false;

        if (!this.el) throw (`[SearchPanel]: el not found!`);
        if (!this.actions.length) throw (`[SearchPanel]: actions not found!`);

        this.resultContainer = this.el.querySelector(`[class*='__result']`);
        if (!this.resultContainer) throw (`[SearchPanel]: result container not found!`);

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
        this.body.classList.add('spanel-opened');
        this.emit('spanel-opened');
    }

    close() {
        this.opened = false;
        this.el.classList.remove('is-open');
        this.body.classList.remove('spanel-opened');
        this.emit('spanel-closed');
    }

    /**
     * Change loading state
     * @param {Boolean} payload
     */
    setLoadingState(payload) {
        this.loading = payload;
        if (this.loading) {
            this.resultContainer.classList.add('is-loading');
        } else {
            this.resultContainer.classList.remove('is-loading');
        }
    }

    isLoaded() {
        return this.loaded;
    }

    isOpened() {
        return this.opened;
    }
}