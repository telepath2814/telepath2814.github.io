function init() {
    const tickerList = document.querySelectorAll('.ticker__content');
    tickerList.forEach(ticker => {
        const items = ticker.querySelector('.ticker__item-list');
        items.style.animationPlayState = 'running';
        ticker.prepend(items.cloneNode(true));
    });
}

export { init };