import { ua } from './localization/ua.js';
import { ru } from './localization/ru.js';

const languageList = { ua, ru };
const DEFAULT_LANGUAGE = 'ua';
let currentLanguage;

function init() {
    initCurrentLanguage();
    initLanguageButtons();
}

function initCurrentLanguage() {
    const language = localStorage.getItem('language');

    if (language && language != DEFAULT_LANGUAGE) {
        setLanguage(language);
    }
    else {
        currentLanguage = DEFAULT_LANGUAGE;
    }
}

function initLanguageButtons() {
    const buttonsList = document.querySelectorAll('.language-ua, .language-ru');

    if (buttonsList.length > 0) {
        buttonsList.forEach(button => {
            button.addEventListener('click', selectLanguage);
        });
    }
}

function selectLanguage(event) {
    const button = event.currentTarget;

    if (button.classList.contains('language-ua') && currentLanguage != 'ua') {
        setLanguage('ua');
    }

    if (button.classList.contains('language-ru') && currentLanguage != 'ru') {
        setLanguage('ru');
    }
}

function setLanguage(language) {
    for (const [name, text] of Object.entries(languageList[language])) {
        const elementList = document.querySelectorAll(`.lang-${name}`);
        if (elementList.length > 0) {
            changeLanguage(elementList, text);
        }
    }
    currentLanguage = language;
    localStorage.setItem('language', currentLanguage);
}

function changeLanguage(elementList, text) {
    elementList.forEach(element => {
        if (element.hasAttribute('placeholder')) {
            element.placeholder = text;
        }
        else {
            element.innerHTML = text;
        }
    });
}

export { init };