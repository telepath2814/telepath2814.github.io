const TRANSITION_DURATION_MS = 500;
let transition;

function init() {
    inintTransition();
    inintLinks();
}

function inintTransition() {
    transition = document.querySelector('.page__transition');
    if (transition) {
        transition.classList.add('page__transition--in');
    }
}

function inintLinks() {
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
    transition.classList.replace('page__transition--in', 'page__transition--out');

    setTimeout(() => {
        transition.classList.replace('page__transition--out', 'page__transition--in');
        location = linkURL;
    }, TRANSITION_DURATION_MS);
}

export { init };