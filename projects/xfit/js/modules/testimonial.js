let paginationList,
    clientList,
    client = 0,
    reviews;

function init() {
    clientList = document.querySelectorAll('.testimonial__slider-client');
    if (clientList.length > 0) {
        reviews = document.querySelector('.testimonial__review-list');

        const pagination = document.querySelector('.testimonial__pagination');
        paginationList = Array.from(document.querySelectorAll('.testimonial__pagination-circle'));
        pagination.addEventListener('click', paginationSelect);

        const arrowLeft = document.querySelector('.testimonial__slider-arrow-left');
        const arrowRight = document.querySelector('.testimonial__slider-arrow-right');
        arrowLeft.addEventListener('click', prevClient);
        arrowRight.addEventListener('click', nextClient);
    }
}

function prevClient() {
    hideClient();
    client--;
    if (client == -1) {
        client = clientList.length - 1;
    }
    showClient();
}

function nextClient() {
    hideClient();
    client++;
    if (client == clientList.length) {
        client = 0;
    }
    showClient();
}

function paginationSelect(event) {
    hideClient();
    client = paginationList.indexOf(event.target);
    showClient();
}

function hideClient() {
    clientList[client].style.transitionDelay = '0s';
    clientList[client].classList.remove('testimonial__slider-client--show');
    paginationList[client].classList.remove('testimonial__pagination-circle--show');
}

function showClient() {
    clientList[client].style.transitionDelay = '.5s';
    clientList[client].classList.add('testimonial__slider-client--show');
    paginationList[client].classList.add('testimonial__pagination-circle--show');
    reviews.style.transform = `translate(-${client * reviews.clientWidth}px)`;
}

export { init };