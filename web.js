function toggleMenu() {
    document.querySelector('.left-menu').classList.toggle('collapsed');
}

function adjustScreenSize() {
    let screenWidth = window.innerWidth;
    let scale = 1;

    if (screenWidth >= 992 && screenWidth <= 1600) {
        scale = 0.9;
    } else if (screenWidth >= 700 && screenWidth <= 767) {
        scale = 0.8;
    } else if (screenWidth >= 600 && screenWidth < 700) {
        scale = 0.75;
    } else if (screenWidth <= 600) {
        scale = 0.5;
    }

    document.querySelector('.content-wrapper').style.transform = `scale(${scale})`;
    document.querySelector('.content-wrapper').style.transformOrigin = 'top';
}

window.addEventListener('resize', adjustScreenSize);
window.addEventListener('load', adjustScreenSize);