function hamburgerFunction() {
    const menu = document.getElementById('hamburger-menu-wrapper');
    const icon = document.getElementById('mobile-menu-md');
    if (menu.style.maxHeight == "0px" || menu.style.maxHeight == "0" || menu.style.maxHeight == "") {
        // Open
        menu.style.display = "flex";
        setTimeout(() => {
            menu.style.maxHeight = "500px";
        }, 0);
        icon.src = 'files/mobile-menu-inverted.png';
    } else {
        // Close
        menu.style.maxHeight = "0";
        setTimeout(() => {
            menu.style.display = "none";
        }, 200); //make sure it matches the transition speed of the hamburger menu wrapper
        icon.src = 'files/mobile-menu.png';
    }
}
function changeVisibility() {
    const menu = document.getElementById('hamburger-menu-wrapper');
    const icon = document.getElementById('mobile-menu-md');
    if (window.innerWidth > 1024) {
        menu.style.display = "none";
        icon.src = 'files/mobile-menu.png';
    }
}
function switchTab(tab) {
    if(tab == 'home'){
        window.location.href = "index.html"; 
    } else if(tab == 'about') {
        window.location.href = "about.html"; 
    } else if(tab == 'contact-us') {
        window.location.href = "contact.html"; 
    } else if(tab == 'cart') {
        window.location.href = "cart.html"; 
    }
}