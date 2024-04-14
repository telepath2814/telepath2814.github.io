const TRANSITION_DURATION_MS = 500;
let transition;

function init() {
    console.log('init');
    inintTransition();
    inintLinks();
}

function inintTransition() {
    console.log('inintTransition');
    transition = document.querySelector('.page__transition');
    if (transition) {
        console.log('transition');
        transition.classList.add('page__transition--in');
    }
}

function inintLinks() {
    console.log('inintLinks');
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
        transition.classList.remove('page__transition--out');
        location = linkURL;
    }, TRANSITION_DURATION_MS);
}

export { init };