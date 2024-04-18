import axios from 'axios';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

// Function to limit input length and add ellipsis
function limitAndEllipsis(event) {
  const input = event.target;
  const maxLength = 50;

  if (input.value.length > maxLength) {
    input.value = input.value.substring(0, maxLength) + '...';
  }
}

function handleInput(event) {
  const input = event.target;
  const maxLength = 50;

  if (input.value.length > maxLength) {
    input.value = input.value.substring(0, maxLength) + '...';
  } else {
    input.dataset.prevValue = input.value;
  }
}

function handleKeyDown(event) {
  const input = event.target;
  const maxLength = 50;

  if (
    (event.keyCode === 8 || event.keyCode === 46) &&
    input.value.endsWith('...')
  ) {
    input.value = input.value.slice(0, -3);
  } else if (event.keyCode === 8 || event.keyCode === 46) {
    const prevValue = input.dataset.prevValue || '';
    input.value = prevValue.slice(0, -1);
    input.dataset.prevValue = input.value;
  }
}

document.addEventListener('DOMContentLoaded', function () {
  const textarea = document.getElementById('client-comment');
  textarea.addEventListener('input', limitAndEllipsis);
  textarea.addEventListener('input', handleInput);
  textarea.addEventListener('keydown', handleKeyDown);
});

document.addEventListener('DOMContentLoaded', function () {
  const emailInput = document.getElementById('client-email');
  emailInput.addEventListener('input', limitAndEllipsis);
  emailInput.addEventListener('input', handleInput);
  emailInput.addEventListener('keydown', handleKeyDown);
});

//
const emailInput = document.getElementById('client-email');
const commentInput = document.getElementById('client-comment');

if (emailInput && commentInput) {
  emailInput.addEventListener('input', limitAndEllipsis);
  commentInput.addEventListener('input', limitAndEllipsis);
}

// Function to clear form fields
function clearForm() {
  const emailInput = document.getElementById('client-email');
  const commentInput = document.getElementById('client-comment');
  const mailValidate = document.querySelector('.work-together-form-error');
  if (emailInput && commentInput) {
    emailInput.value = '';
    commentInput.value = '';
    emailInput.style.borderBottomColor = 'var(--border-color)';
    mailValidate.style.display = 'none';
  }
}

// Function to validate email format
function validateEmail(email) {
  const pattern = /^\w+(\.\w+)?@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
  return pattern.test(email);
}

const mailValidate = document.querySelector('.work-together-form-error');

emailInput.addEventListener('blur', e => {
  if (validateEmail(e.target.value)) {
    emailInput.style.borderBottomColor = 'var(--success-text-color)';
    mailValidate.style.color = 'var(--success-text-color)';
    mailValidate.style.fontSize = '';
    mailValidate.textContent = 'Success!';
  } else {
    emailInput.style.borderBottomColor = 'var(--button-color)';
    mailValidate.style.color = 'var(--button-color)';
    mailValidate.style.fontSize = '';
    mailValidate.textContent = 'Invalid email, try again!';
  }
});

// Function to send form data to server
function sendFormData(email, comment) {
  const formData = {
    email: email,
    comment: comment,
  };
  axios
    .post('https://portfolio-js.b.goit.study/api/requests', formData)
    .then(response => {
      console.log('Response from server:', response);
      if (response.status === 201) {
        openModal();
        clearForm();
        console.clear();
      } else {
        throw new Error('Unexpected response from server');
      }
    })
    .catch(error => {
      console.error('Error sending request:', error);
      if (error.response) {
        if (error.response.status === 400) {
          iziToast.error({
            title: 'Error',
            message: 'Bad request. Please check your input and try again.',
            position: 'topRight',
          });
        } else {
          iziToast.error({
            title: 'Error',
            message: 'Server error. Please try again later.',
            position: 'topRight',
          });
        }
      } else if (error.request) {
        iziToast.error({
          title: 'Error',
          message:
            'No response from server. Please check your internet connection and try again.',
          position: 'topRight',
        });
      } else {
        iziToast.error({
          title: 'Error',
          message: 'Failed to send request. Please try again.',
          position: 'topRight',
        });
      }
    });
}

// Function to submit the form
function submitForm(event) {
  event.preventDefault();

  const emailInput = document.getElementById('client-email');
  const commentInput = document.getElementById('client-comment');

  if (
    emailInput &&
    commentInput &&
    validateEmail(emailInput.value) &&
    commentInput.value.trim() !== ''
  ) {
    sendFormData(emailInput.value, commentInput.value);
    emailInput.classList.remove('invalid');
    emailInput.classList.add('valid');
  } else {
    emailInput.classList.remove('valid');
    emailInput.classList.add('invalid');
    iziToast.error({
      title: 'Error',
      message: 'Invalid email or comment. Please try again.',
      position: 'topRight',
    });
  }
}

// Function to open the modal
function openModal() {
  const backdrop = document.querySelector('.backdrop');
  const modal = document.querySelector('.modal');
  if (backdrop && modal) {
    backdrop.classList.add('active');
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
    document.addEventListener('keydown', closeModalOnEscape);
    backdrop.addEventListener('click', closeModal);
  }
}

// Function to close the modal
function closeModal() {
  const backdrop = document.querySelector('.backdrop');
  const modal = document.querySelector('.modal');
  if (backdrop && modal) {
    backdrop.classList.remove('active');
    modal.classList.remove('active');
    document.body.style.overflow = '';
    document.removeEventListener('keydown', closeModalOnEscape);
    backdrop.removeEventListener('click', closeModal);
  }
}

// Function to close the modal when Escape key is pressed
function closeModalOnEscape(event) {
  if (event.key === 'Escape') {
    closeModal();
  }
}

// Event listener for form submission
const form = document.querySelector('.work-together-form');
if (form) {
  form.addEventListener('submit', function (event) {
    event.preventDefault();

    const emailInput = document.getElementById('client-email');
    const commentInput = document.getElementById('client-comment');

    if (
      emailInput &&
      commentInput &&
      validateEmail(emailInput.value) &&
      commentInput.value.trim() !== ''
    ) {
      sendFormData(emailInput.value, commentInput.value);
      emailInput.classList.remove('invalid');
      emailInput.classList.add('valid');
    } else {
      emailInput.classList.remove('valid');
      emailInput.classList.add('invalid');
      iziToast.error({
        title: 'Error',
        message: 'Invalid email or comment. Please try again.',
        position: 'topRight',
      });
    }
  });
}
