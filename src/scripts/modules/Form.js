import Validate from "../plugins/Validate";
import {name, city, privacy_policy} from '../config/validate-constraints';

export default function () {
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
