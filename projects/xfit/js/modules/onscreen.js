const OFFSET_PX = 150;
let nodeList;

function init() {
    nodeList = document.querySelectorAll('.onscreen');
    if (nodeList.length > 0) {
        addEventListener('scroll', showNodes);
        showNodes();
    }
}

function showNodes() {
    nodeList.forEach(node => {
        const nodeTop = node.getBoundingClientRect().top + window.scrollY;
        const scrollTop = window.scrollY + window.innerHeight - OFFSET_PX;
        
        if(nodeTop <= scrollTop) {
            node.classList.add('onscreen--show');
        }
    });
}

export { init };