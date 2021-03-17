const hamburgerMenu = document.getElementById("hamburger-menu");
const mobileNavbar = document.getElementById("mobile-navbar");
const closeMobileMenu = document.getElementById("close-mobile-menu");
const mobileNavItems = document.querySelectorAll(".mobile-nav-item");

function openNav() {
    mobileNavbar.style.width = "100%";
}

function closeNav() {
    mobileNavbar.style.width = "0%";
}

function closeOnLink() {
    mobileNavbar.style.width = "0%";
    mobileNavbar.style.transition = "none";
}

mobileNavItems.forEach((element) => {
    element.addEventListener("click", function () {
        closeNav();
    });
});

hamburgerMenu.addEventListener("click", function () {
    openNav();
});

closeMobileMenu.addEventListener("click", function () {
    closeNav();
});
