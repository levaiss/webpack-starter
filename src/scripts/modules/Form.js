import Inputmask from 'inputmask';
import Validate from "../plugins/Validate";
import {name, city, privacy_policy} from '../config/validations-constraints';

export default function () {
  Inputmask({'mask': '+7(999)999-99-99'}).mask('[data-mask-phone]');
  Inputmask({'mask': '99.99.9999'}).mask('[data-mask-date]');

  const testForm = document.getElementById('testForm');

  let formInstance = new Validate({
    form: testForm,
    constraints: {
      name: createRequiredField(name),
      city: createRequiredField(city),
      privacy_policy: createRequiredField(privacy_policy),
    },
    callback: testFormCallback
  });

  function testFormCallback(payload, form) {
    console.log('All ok! ', payload);

    setTimeout(() => {
      let serverErrors = {name: ['Test error from server!']};

      formInstance.showErrors(serverErrors);
    }, 1000);
  }
}

function createRequiredField(constraint) {
  return Object.assign({}, {presence: true}, constraint);
}
