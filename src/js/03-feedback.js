import throttle from 'lodash.throttle';

const inputForm = document.querySelector('.feedback-form');
const formData = {};
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
  ev.currentTarget.reset();
  console.log(formData);
  localStorage.removeItem(STORAGE_KEYS);
}

function fillTextarea() {
  const savedDtaObj = localStorage.getItem(STORAGE_KEYS);

  if (savedDtaObj) {
    inputForm.email.value = JSON.parse(savedDtaObj).email;
    inputForm.message.value = JSON.parse(savedDtaObj).message;
    formData.email = JSON.parse(savedDtaObj).email;
    formData.message = JSON.parse(savedDtaObj).message;
  }
}
