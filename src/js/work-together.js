import { createUser } from './api';

const emailInput = document.getElementById('client-email');
const commentInput = document.getElementById('client-comment');
const maxLength = 50;

emailInput.addEventListener('input', limitAndEllipsis);
commentInput.addEventListener('input', limitAndEllipsis);

//--обмежую довжину тексту+...
function limitAndEllipsis(event) {
    const input = event.target;
    if (input.value.length > maxLength) {
        input.value = input.value.substring(0, maxLength) + '...';
    }
}

//--очищаю поле форми
function clearForm() {
    emailInput.value = '';
    commentInput.value = '';
}

//--перевірка валідності email
function validateEmail(email) {
    const pattern = /^\w+(\.\w+)?@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
    return pattern.test(email);
}

//--відправляю дані на сервер
function sendFormData(email, comment) {
    const formData = {
        email: email,
        comment: comment
    };
createUser(formData)
        .then(response => {
            console.log('Response from server:', response);
            openModal();
            clearForm();
        })
        .catch(error => {
            console.error('Error sending request:', error);
            alert('Error sending request. Please try again.');
        });
}

//--обробляю події відправки форми
function submitForm(event) {
    event.preventDefault(); 
    
    if (validateEmail(emailInput.value) && commentInput.trim() !== '') {
        sendFormData(emailInput.value, commentInput.value);
        emailInput.classList.remove('invalid');
        emailInput.classList.add('valid');
        alert('Success!');
    } else {
        emailInput.classList.remove('valid');
        emailInput.classList.add('invalid');
        alert('Invalid email, try again.');
    }
}

//--відкриваю модальне вікно
function openModal() {
    document.querySelector('.backdrop').classList.add('active');
    document.querySelector('.modal').classList.add('active');
    document.addEventListener('keydown', closeModalOnEscape);
    document.querySelector('.backdrop').addEventListener('click', closeModalOnEscape)
}

//--закриваю модальне вікно по кліку на backdrop
function closeModal() {
    document.querySelector('.backdrop').classList.remove('active');
    document.querySelector('.modal').classList.remove('active');
    document.removeEventListener('keydown', closeModalOnEscape);
    document.querySelector('.backdrop').removeEventListener('click', closeModalOnEscape)
}

//--закриваю модальне вікно по кліку на іконку
function closeModalOnClick(event) {
    if (event.target.classList.contains('modal-close-button')) {
        closeModal();
    }
}

//--закриваю модальне вікно по кліку на escape
function closeModalOnEscape(event) {
    if (event.key === 'Escape') {
        closeModal();
    }
}

//-- додаю обробник подій на закриття модалки
document.querySelector('.modal-close-button').addEventListener('click', closeModal);