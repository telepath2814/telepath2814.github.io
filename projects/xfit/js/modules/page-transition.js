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
        setTimeout(() => {
            transition.classList.remove('page__transition--in');
        }, TRANSITION_DURATION_MS);
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
    transition.classList.add('page__transition--out');

    setTimeout(() => {
        transition.classList.remove('page__transition--out');
        location = linkURL;
    }, TRANSITION_DURATION_MS);
}

export { init };