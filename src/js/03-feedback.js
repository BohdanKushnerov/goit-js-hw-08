import throttle from 'lodash.throttle';
import '../css/03-feedback.css';

const formEl = document.querySelector(".feedback-form");
const inputEl = document.querySelector('.feedback-form input');
const textareaEl = document.querySelector('.feedback-form textarea');

const STORAGE_KEY = "feedback-form-state";
const formData = {};
console.log(formData);

formEl.addEventListener('submit', onFormSubmit);
formEl.addEventListener('input', throttle(onFormSaveChangeText, 500));

getTextFromStorage();

function onFormSubmit(e) {
  e.preventDefault();
  console.log('Submit form');
  e.currentTarget.reset();
  localStorage.removeItem(STORAGE_KEY);
};

function onFormSaveChangeText(e) {
  console.log(e.target.value)
  formData[e.target.name] = e.target.value;

  const myJSON = JSON.stringify(formData);
  console.log(myJSON);

  const saveLocalStorage = localStorage.setItem(STORAGE_KEY, myJSON)
};

function getTextFromStorage() {
  const getLocalStorage = localStorage.getItem(STORAGE_KEY);

  const parseStorage = JSON.parse(getLocalStorage);
  console.log(parseStorage);

  if(getLocalStorage) {
    formData.email = parseStorage.email;
    formData.message = parseStorage.message;
    inputEl.value = parseStorage.email;
    textareaEl.value = parseStorage.message;
  };
};
