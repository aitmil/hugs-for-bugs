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

// Function to clear form fields
function clearForm() {
  const emailInput = document.getElementById('client-email');
  const commentInput = document.getElementById('client-comment');
  if (emailInput && commentInput) {
    emailInput.value = '';
    commentInput.value = '';
  }
}

// Function to validate email format
function validateEmail(email) {
  const pattern = /^\w+(\.\w+)?@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
  return pattern.test(email);
}

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
        iziToast.success({
          title: 'Success',
          message: 'Your request has been successfully sent!',
          position: 'topRight',
        });
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
  const backdrop = document.querySelector('.work-together-section');
  const modal = document.querySelector('.work-together-form');
  if (backdrop && modal) {
    backdrop.classList.add('active');
    modal.classList.add('active');
    document.addEventListener('keydown', closeModalOnEscape);
    backdrop.addEventListener('click', closeModal);
  }
}

// Function to close the modal
function closeModal() {
  const backdrop = document.querySelector('.work-together-section');
  const modal = document.querySelector('.work-together-form');
  if (backdrop && modal) {
    backdrop.classList.remove('active');
    modal.classList.remove('active');
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

// Event listeners for input fields
const emailInput = document.getElementById('client-email');
const commentInput = document.getElementById('client-comment');
if (emailInput && commentInput) {
  emailInput.addEventListener('input', limitAndEllipsis);
  commentInput.addEventListener('input', limitAndEllipsis);
}

// Event listener for form submission
const form = document.querySelector('.work-together-form');
if (form) {
  form.addEventListener('submit', submitForm);
}
