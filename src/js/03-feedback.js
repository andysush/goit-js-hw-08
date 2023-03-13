import throttle from 'lodash.throttle';

const inputForm = document.querySelector('.feedback-form');
let formData = {
  email: '',
  message: '',
};
const STORAGE_KEYS = 'feedback-form-state';

inputForm.addEventListener('input', throttle(onInputData, 500));

function onInputData(el) {
  formData[el.target.name] = el.target.value;
  localStorage.setItem(STORAGE_KEYS, JSON.stringify(formData));
}

fillTextarea();

inputForm.addEventListener('submit', onFormSubmit);

function onFormSubmit(ev) {
  ev.preventDefault();
  if (inputForm.email.value !== '' && inputForm.message.value !== '') {
    localStorage.removeItem(STORAGE_KEYS);
    ev.target.reset();
    console.log(formData);
    return;
  }
  alert(`Всі поля мають бути заповнені`);
}

function fillTextarea() {
  const savedDtaObj = localStorage.getItem(STORAGE_KEYS);

  if (savedDtaObj) {
    formData = JSON.parse(savedDtaObj);
    inputForm.email.value = formData.email;
    inputForm.message.value = formData.message;
  }
}
