import throttle from 'lodash.throttle';

const STORAGE_KEY = 'feedback-form-state';
const form = document.querySelector('form');
const email = document.querySelector('input');
const message = document.querySelector('textarea');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  console.log({ email: email.value, message: message.value });

  e.currentTarget.reset();
  localStorage.removeItem(STORAGE_KEY);
});

form.addEventListener('input', throttle(() => {
    const data = {
      email: form.elements.email.value,
      message: form.elements.message.value,
    };
  
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
  }, 500));

const addData = () => {
  const lsData = localStorage.getItem(STORAGE_KEY);
  if (lsData) {
    const current = JSON.parse(lsData);
    email.value = current.email;
    message.value = current.message;
  }
};
addData();

