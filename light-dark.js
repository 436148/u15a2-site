


function lightDarkToggle() {
    var toggle = document.querySelector("#toggle");
    var root = document.querySelector(":root");
    if (toggle.checked) {
        /* Make dark */
        root.style.setProperty('--white', 'black');
        root.style.setProperty('--blue', '#aaaa90');
        root.style.setProperty('--black', 'white');
    }
    else {
        /* Make light */
        root.style.setProperty('--white', 'white');
        root.style.setProperty('--blue', '#4672C4');
        root.style.setProperty('--black', 'black');
    }
}
