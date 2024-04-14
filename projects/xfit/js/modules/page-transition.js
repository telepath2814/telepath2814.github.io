const TRANSITION_DURATION_MS = 500;
let transition;

function init() {
    initTransition();
    initLinks();
}

function initTransition() {
    transition = document.querySelector('.page__transition');
    if (transition) {
        console.log('transition ' + new Date());
        transition.classList.add('page__transition--in');
        transition.style.visibility = 'hidden';
    }
}

function initLinks() {
    const linkList = document.querySelectorAll('.page__link');
    if (linkList.length > 0) {
        console.log('linkList.length > 0' + new Date());
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
    transition.style.visibility = 'visible';

    setTimeout(() => {
        transition.classList.remove('page__transition--out');
        transition.style.visibility = 'hidden';
        location = linkURL;
    }, TRANSITION_DURATION_MS);
}

export { init };