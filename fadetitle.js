
window.onload = init;

function init() {
    var title = document.querySelector("#title");

    var observer = new IntersectionObserver(function (entries) {
        if (entries[0].isIntersecting === true) {
            title.classList.remove('fade');
        }
        else {
            title.classList.add('fade');
        }
    }, { threshold: [0] });

    observer.observe(document.querySelector("#title-gap"))
}
