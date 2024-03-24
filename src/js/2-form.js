const STORAGE_KEY = 'feedback-form-state';

const form = document.querySelector('.feedback-form');
const emailInput = form.querySelector('input[name="email"]');
const messageInput = form.querySelector('textarea[name="message"]');

// Відстежуємо подію input на формі та зберігаємо значення полів у локальне сховище
form.addEventListener('input', () => {
  const formData = {
    email: emailInput.value.trim(),
    message: messageInput.value.trim(),
  };
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
});

// Перевіряємо наявність збережених даних у локальному сховищі
const savedFormData = localStorage.getItem(STORAGE_KEY);
if (savedFormData) {
  const { email, message } = JSON.parse(savedFormData);
  emailInput.value = email;
  messageInput.value = message;
}

// Очищаємо локальне сховище та поля форми при сабміті форми
form.addEventListener('submit', event => {
  event.preventDefault();
  const formData = {
    email: emailInput.value.trim(),
    message: messageInput.value.trim(),
  };
  if (formData.email && formData.message) {
    console.log(formData);
    form.reset();
    localStorage.removeItem(STORAGE_KEY);
  } else {
    console.log('Please fill in all fields');
  }
});
