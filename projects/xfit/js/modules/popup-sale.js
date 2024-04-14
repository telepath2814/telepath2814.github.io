const SHOW_TIMEOUT_MS = 3000;
let popup;

function init() {
    popup = document.querySelector('.popup-sale');
    if (popup) {
        initBackground();
        initButtonClose();

        const isShown = sessionStorage.getItem('popup-sale-shown');
        if(!isShown) {
            setTimeout(showPopup, SHOW_TIMEOUT_MS);
        }
    }
}

function initBackground() {
    const background = document.querySelector('.popup-sale__background');
    if (background) {
        background.addEventListener('click', hidePopup);
    }
}

function initButtonClose() {
    const button = document.querySelector('.popup-sale__button-close');
    if (button) {
        button.addEventListener('click', hidePopup);
    }
}

function showPopup() {
    popup.classList.add('popup-sale--show');
    sessionStorage.setItem('popup-sale-shown', true);
}

function hidePopup() {
    popup.classList.remove('popup-sale--show');
}

export { init };