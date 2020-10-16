import validate from 'validate.js';

validate.validators.presence.message = '^Это поле обязательно';
validate.validators.formatWithTrim = function(value, options, key, attributes) {
  if (value) {
    const { flags, message, pattern } = options;
    const regExp = new RegExp(pattern, flags);
    let valueTrim = value.trim();

    if (!(regExp).test(valueTrim)) return message;
  }
};

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

    this.handlerFormSubmit = this.formSubmit.bind(this);
    this.form.addEventListener('submit', this.handlerFormSubmit, false);
    this.inputs = Array.from(this.form.querySelectorAll('input[name], select[name]'));
  }

  formSubmit(event) {
    event.preventDefault();
    this.errors = validate(this.form, this.constraints);
    this.showErrors(this.errors);

    if (!this.errors) {
      let data = validate.collectFormValues(this.form);

      this.callback(data, this);
    }
  }

  showErrors(errors) {
    this.inputs.forEach(input => this.showErrorsForInput(input, errors && errors[input.name]));
  }

  showErrorsForInput(input, errors) {
    let formItem = input.closest('.form__item');

    this.resetFormItem(formItem);

    if (errors) {
      formItem.classList.add('has-error');
      errors.forEach((error) => {
        this.addError(formItem, error);
      });
    } else {
      formItem.classList.add('has-success');
    }
  }

  resetFormItem(item) {
    item.classList.remove('has-error');
    item.classList.remove('has-success');

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

  destroy() {
    this.form.reset();
    this.form.removeEventListener('submit', this.handlerFormSubmit, false);
  }
}
