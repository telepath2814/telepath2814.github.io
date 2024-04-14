function init() {
    const language = document.querySelector('.header__language');
    if (language) {
        language.addEventListener('click', () => {
            language.classList.toggle('header__language--open');
        });
    }
}

export { init };