const hamburgerMenu = document.getElementById("hamburger-menu");
const mobileNavbar = document.getElementById("mobile-navbar");
const closeMobileMenu = document.getElementById("close-mobile-menu");

function openNav() {
    mobileNavbar.style.width = "100%";
}

function closeNav() {
    mobileNavbar.style.width = "0%";
}

function closeOnLink() {
    mobileNavbar.style.transition = "none";
}

hamburgerMenu.addEventListener("click", function () {
    openNav();
});

closeMobileMenu.addEventListener("click", function () {
    closeNav();
});
