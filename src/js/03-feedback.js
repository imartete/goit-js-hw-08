import throttle from 'lodash.throttle';

const formNode = document.querySelector('.feedback-form');
const formInput = document.querySelector('input');
const formMessage = document.querySelector('textarea');

formNode.addEventListener('input', throttle(saveData, 500));

const formData = {};

function saveData() {
  formData.email = formInput.value;
  formData.message = formMessage.value;
  localStorage.setItem('feedback-form-state', JSON.stringify(formData));
}

window.onload = function () {
  const parsedStorage = JSON.parse(localStorage.getItem('feedback-form-state'));
  formInput.value = parsedStorage?.email ?? '';
  formMessage.value = parsedStorage?.message ?? '';
  saveData();
};

formNode.addEventListener('submit', event => {
  event.preventDefault();
  event.currentTarget.reset();
  localStorage.removeItem('feedback-form-state');
  console.log(formData);
});
