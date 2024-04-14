const TRANSITION_DURATION_MS = 500;
let transition;

function init() {
    initTransition();
    initLinks();

    window.addEventListener('popstate', hideTransition);
}

function initTransition() {
    transition = document.querySelector('.page__transition');
    if (transition) {
        hideTransition();
    }
}

function showTransition() {
    transition.classList.replace('page__transition--hide', 'page__transition--show');
}

function hideTransition() {
    transition.classList.replace('page__transition--show', 'page__transition--hide');
}

function initLinks() {
    const linkList = document.querySelectorAll('.page__link');
    if (linkList.length > 0) {
        linkList.forEach(link => {
            link.addEventListener('click', changePage);
        });
    }
}

function changePage(event) {
    event.preventDefault();
    const linkNode = event.currentTarget;
    const linkURL = linkNode.attributes.href.value;
    showTransition();

    setTimeout(() => {
        location = linkURL;
    }, TRANSITION_DURATION_MS);
}

export { init };