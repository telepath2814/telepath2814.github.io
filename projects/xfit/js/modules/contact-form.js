let form,
    name,
    nameError,
    email,
    emailError,
    message,
    messageLength,
    button;

let nameIsValid = true,
    emailIsValid = true;

function init() {
    form = document.querySelector('.contact-form');
    if (form) {
        nameError = form.querySelector('.contact-form__name-error');
        name = form.querySelector('.contact-form__name');
        name.addEventListener('input', checkName);

        emailError = form.querySelector('.contact-form__email-error');
        email = form.querySelector('.contact-form__email');
        email.addEventListener('input', checkEmail);

        messageLength = form.querySelector('.contact-form__message-length');
        message = form.querySelector('.contact-form__message');
        message.addEventListener('input', checkMessage);

        button = form.querySelector('.contact-form__button-submit');
        form.addEventListener('input', checkForm);
    }
}

function checkName() {
    const regex = /[^а-яa-z\s]/i;

    if (regex.test(name.value)) {
        name.classList.add('contact-form--error');
        nameError.classList.add('contact-form__error-text--show');
        nameIsValid = false;
    } else {
        name.classList.remove('contact-form--error');
        nameError.classList.remove('contact-form__error-text--show');
        nameIsValid = true;
    }
}

function checkEmail() {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (email.value == '' || regex.test(email.value)) {
        email.classList.remove('contact-form--error');
        emailError.classList.remove('contact-form__error-text--show');
        emailIsValid = true;
    } else {
        email.classList.add('contact-form--error');
        emailError.classList.add('contact-form__error-text--show');
        emailIsValid = false;
    }
}

function checkMessage() {
    messageLength.innerHTML = `${message.value.length} / ${message.maxLength}`;
}

function checkForm() {
    if (nameIsValid && emailIsValid) {
        button.classList.remove('button--disabled');
    } else {
        button.classList.add('button--disabled');
    }
}

export { init };