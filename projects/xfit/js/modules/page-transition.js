const TRANSITION_DURATION_MS = 500;
let transition;

function init() {
    initTransition();
    initLinks();
}

function initTransition() {
    transition = document.querySelector('.page__transition');
    if (transition) {
        console.log('transition');
    }
}

function initLinks() {
    const linkList = document.querySelectorAll('.page__link');
    if (linkList.length > 0) {
        console.log('linkList.length > 0');
        linkList.forEach(link => {
            link.addEventListener('click', changePage);
        });
    }
}

function changePage(event) {
    event.preventDefault();
    const linkNode = event.currentTarget;
    const linkURL = linkNode.attributes.href.value;
    transition.classList.replace('page__transition--in', 'page__transition--out');
    setTimeout(() => {
        transition.classList.replace('page__transition--out', 'page__transition--in');
        location = linkURL;
    }, TRANSITION_DURATION_MS);
}

export { init };