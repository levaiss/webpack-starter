import validate from 'validate.js';
validate.validators.presence.message = '^This field required';

export default class Validate {
    constructor({form, constraints, callback}) {
        this.errors = null;
        this.form = form;
        this.inputs = [];
        this.constraints = constraints;
        this.callback = callback;

        if (!validate.isDomElement(this.form)) {
            console.warn(`[Validate] form element not found!`);
            return ;
        }

        this.form.addEventListener('submit', this.handlerFormSubmit.bind(this));
        this.inputs = Array.from(this.form.querySelectorAll('input[name], select[name]'));
    }

    handlerFormSubmit(event) {
        event.preventDefault();
        this.errors = validate(this.form, this.constraints);
        this.showErrors(this.errors);

        if (!this.errors) {
            const data = validate.collectFormValues(this.form);

            this.callback(data, this.form);
        }
    }

    showErrors(errors) {
        this.inputs.forEach(input => this.showErrorsForInput(input, errors && errors[input.name]));
    }

    showErrorsForInput(input, errors) {
        let formItem = input.closest('.form__item');

        this.resetFormItem(formItem);

        if (errors) {
            formItem.classList.add('form__item--error');
            errors.forEach((error) => {
                this.addError(formItem, error);
            });
        } else {
            formItem.classList.add('form__item--success');
        }
    }

    resetFormItem(item) {
        item.classList.remove('form__item--error');
        item.classList.remove('form__item--success');

        let helpBlocks = item.querySelectorAll('.form__error');
        helpBlocks = Array.from(helpBlocks);
        helpBlocks.forEach(el => el.parentNode.removeChild(el));
    }

    addError(formItem, error) {
        let DIV = document.createElement('DIV');
        DIV.classList.add('form__error');
        DIV.innerText = error;
        formItem.appendChild(DIV);
    }
}