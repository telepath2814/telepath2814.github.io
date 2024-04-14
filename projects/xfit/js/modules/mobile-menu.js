let menu,
    button,
    language,
    background;

function init() {
    menu = document.querySelector('.mobile-menu');
    if (menu) {
        initButton();
        initLanguage();
        initBackground();
    }
}

function initButton() {
    button = document.querySelector('.header__mobile-menu-button');
    if (button) {
        button.addEventListener('click', toggleMenu);
    }
}

function initBackground() {
    background = document.querySelector('.mobile-menu__background');
    if (background) {
        background.addEventListener('click', toggleMenu);
    }
}

function toggleMenu() {
    menu.classList.toggle('mobile-menu--open');
    background.classList.toggle('mobile-menu__background--show');

    if (language &&
        language.classList.contains('mobile-menu__language--open')) {
        language.classList.remove('mobile-menu__language--open');
    }

    if (button.classList.contains('header__mobile-menu-button--open')) {
        button.classList.replace(
            'header__mobile-menu-button--open',
            'header__mobile-menu-button--close'
        );
    } else if (button.classList.contains('header__mobile-menu-button--close')) {
        button.classList.replace(
            'header__mobile-menu-button--close',
            'header__mobile-menu-button--open'
        );
    } else {
        button.classList.add('header__mobile-menu-button--open');
    }
}

function initLanguage() {
    language = document.querySelector('.mobile-menu__language');
    if (language) {
        language.addEventListener('click', () => {
            language.classList.toggle('mobile-menu__language--open');
        });
    }
}

export { init };