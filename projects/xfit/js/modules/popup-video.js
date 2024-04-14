let popup,
    video;

function init() {
    popup = document.querySelector('.popup-video');
    if (popup) {
        video = document.querySelector('.popup-video__video');
        initButtonPlayVideo();
        initPopupBackground();
    }
}

function initButtonPlayVideo() {
    const button = document.querySelector('.history__button-play');
    if (button) {
        button.addEventListener('click', () => {
            popup.classList.add('popup-video--show');
            video.style.display = "block";
        });
    }
}

function initPopupBackground() {
    const background = document.querySelector('.popup-video__background');
    if (background) {
        background.addEventListener('click', () => {
            popup.classList.remove('popup-video--show');
            video.contentWindow.postMessage('{"event":"command","func":"stopVideo","args":""}', '*');
            video.style.display = "none";
        });
    }
}

export { init };