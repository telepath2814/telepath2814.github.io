function init() {
    const itemList = document.querySelectorAll('.faq__item');
    itemList.forEach(item => {
        item.addEventListener('click', () => {
            item.classList.toggle("faq__item--open");
        });
    });
}

export { init };