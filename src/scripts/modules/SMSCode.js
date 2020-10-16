export default class SMSCode {
  /**
   * @param {HTMLFormElement} form
   * @param {Function} callback
   */
  constructor({form, callback}) {
    this.errors = null;
    this.form = form;
    this.callback = callback;
    this.inputs = Array.from(this.form.querySelectorAll('.form__input--code')) || [];
    this.codeLength = this.inputs.length;
    this.code = new Array(this.codeLength);
    this.blurOnComplete = true;
    this.progress = false;
    this.success = false;

    this.inputs.forEach((input, index) => {
      input.setAttribute('data-id', index);

      input.addEventListener('paste', (event) => {
        this.pasteEvent(parseInt(input.getAttribute('data-id')), event);
      });

      input.addEventListener('input', (event) => {
        event.stopPropagation();
        this.inputEvent(event);

        if (this.code.every(el => el === '')) this.reset();
      });

      input.addEventListener('keydown', (event) => {
        event.stopPropagation();
        this.downEvent(event);
      });

      input.addEventListener('keypress', (event) => {
        event.stopPropagation();
        this.pressEvent(event);
      });

      input.onfocus = (event) => {
        this.setSelected(event);
      };
    })
    this.form.addEventListener('submit', this.handlerFormSubmit.bind(this));
  }

  handlerFormSubmit(event) {
    event && event.preventDefault();

    if (!this.errors) {
      this.callback(this.getCodeString(this.code), this);
    }
  }

  inputEvent(event) {
    let target = event.target;
    let value = target.value;

    if (value.length > 1) {
      event.target.value = value.substr(0, 1)
    }
    this.code[target.getAttribute('data-id')] = event.target.value;
    this.getCodeString().length === this.codeLength
      ? (this.blurOnComplete ? this.handlerFormSubmit() : this.nextElement(event))
      : event.target.value && this.nextElement(event)
  }

  pasteEvent(index, event) {
    let i,
      pasteData,
      elements = this.inputs,
      len = 0;
    event.clipboardData && event.clipboardData.getData ? pasteData = event.clipboardData.getData('text/plain')
      : window.clipboardData && window.clipboardData.getData && (pasteData = window.clipboardData.getData('text/plain'));
    pasteData = pasteData.replace(/\s/g, '').substr(0, elements.length - index).split('');

    for (i = 0; i < elements.length && !isNaN(Number(pasteData[i])); i++) {
      len++;
      elements[i + index].value = pasteData[i];
      this.code[i + index] = pasteData[i]
    }

    return [
      setTimeout(() => {
        this.getCodeString().length === this.codeLength
          ? (
            this.blurOnComplete
              ? this.handlerFormSubmit()
              : this.previousElement(event, this.getCodeString().length - 1)
          )
          : this.previousElement(event, index + len)
      }, 0),
      event.preventDefault(),
      false
    ]
  }

  pressEvent(event) {
    let keyCode = event.which || event.keyCode;
    return this.isMainKeyCode(keyCode)
    || this.isTab(keyCode)
    || this.isBackspace(keyCode)
    || this.isMetaKey(event, keyCode)
      ? void 0
      : (event.preventDefault(), false)
  }

  downEvent(event) {
    let target = event.target;
    let keyCode = event.which || event.keyCode;
    let _sibling;

    if (keyCode === 8 && !event.target.value) {
      _sibling = target.previousElementSibling;
      if (_sibling) {
        _sibling.focus();
      }
    } else if (keyCode >= 37 && keyCode <= 41) {
      switch (keyCode) {
        case 37:
          _sibling = target.previousElementSibling;
          break;
        case 39:
          _sibling = target.nextElementSibling;
          break
      }
      if (_sibling) {
        _sibling.focus()
      }
      return [event.preventDefault(), false]
    }
  }

  previousElement(event, length) {
    let elements = this.inputs;

    if (length >= elements.length) {
      length = elements.length - 1
    }

    elements[length].focus()
  }

  nextElement(event) {
    let nextSibling = event.target.nextElementSibling;

    (nextSibling && this.code.filter(Boolean).length < this.codeLength) && nextSibling.focus();
  }

  isMainKeyCode(keyCode) {
    return keyCode >= 48 && keyCode <= 57
  }

  isTab(keyCode) {
    return keyCode === 9
  }

  isBackspace(keyCode) {
    return keyCode === 8
  }

  isMetaKey(event, keyCode) {
    return event.metaKey && keyCode === 118
  }

  setSelected(event) {
    event.target.select()
  }

  getCodeString() {
    return this.code.join('');
  }

  /**
   * Function show validation error
   * @param {Array<String>} errors
   */
  showErrors(errors) {
    let formItem = this.inputs[0].closest('.form__item');

    this.resetFormItem(formItem);

    if (errors.length) {
      formItem.classList.add('has-error');
      errors.forEach((error) => {
        this.addError(formItem, error);
      });
    } else {
      formItem.classList.add('has-success');
    }
  }

  addError(formItem, error) {
    let DIV = document.createElement('DIV');
    DIV.classList.add('form__error');
    DIV.innerText = error;
    formItem.appendChild(DIV);
  }

  resetFormItem(formItem) {
    formItem.classList.remove('has-error');
    formItem.classList.remove('has-success');

    let helpBlocks = formItem.querySelectorAll('.form__error');
    helpBlocks = Array.from(helpBlocks);
    helpBlocks.forEach(el => el.parentNode.removeChild(el));
  }

  reset() {
    this.form.reset();
    this.showErrors([]);
    this.code = new Array(this.codeLength);
  }
}
