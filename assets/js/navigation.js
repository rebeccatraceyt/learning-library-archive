// Add click handlers to mobile nav hamburger and close buttons
document.getElementById("mobile-nav").addEventListener("click", toggleNav);
document.getElementById("nav-close").addEventListener("click", toggleNav);

// Toggle to open and close the mobile nav
function toggleNav() {
    let nav = document.getElementById("nav-menu");
    console.log(nav.classList);
    nav.classList.toggle("nav-hidden");
    nav.classList.toggle("nav-open");
}

// Remove resources dropdown on mobile view / add back at +700vw
if (window.innerWidth<700) {
    document.getElementById("resources-dropdown").removeEventListener("click", toggleResources);
    }
if (window.innerWidth>700) {
    document.getElementById("resources-dropdown").addEventListener("click", toggleResources);
    }

// Toggle to open and close the resources sub-menu
function toggleResources() {
    let resourcesMenu = document.getElementById("resources-menu");
    let resourcesDropdown = this.closest("#resources-dropdown").children[0];
    let resourcesChev = resourcesDropdown.firstElementChild;
    resourcesChev.classList.toggle("nav-down-clicked");
    resourcesChev.classList.contains("nav-down-clicked") ? resourcesMenu.style.display = "flex" : resourcesMenu.style.display = "none";
}

// Add expandable functionality to footer mnenu
let footerMenus = document.getElementsByClassName("footer-header");

Array.from(footerMenus).forEach(function(footerMenu) {
    footerMenu.addEventListener("click", toggleFooter);
});

function toggleFooter() {
    let menu = this.closest(".footer-section").children[1];
    let chev = menu.previousElementSibling;
    chev.classList.toggle("footer-down-clicked");
    menu.classList.toggle("menu");
    menu.classList.toggle("menu-open");
    }

// Optimise functionality for all navigation on screensize change:


window.addEventListener('resize', e => {
    e.preventDefault();
    let nav = document.getElementById("nav-menu");

    let chevDown = document.getElementsByClassName("footer-down-clicked");
    
    // Entering >700 vw:
    if (window.matchMedia(`(min-width: 700px)`).matches) {
        // reources sub-menu:
        document.getElementById("resources-dropdown").addEventListener("click", toggleResources);
        
        // mobile nav:
        nav.classList.remove("nav-open");
        nav.classList.add("nav-hidden");
        
        // expandable footer sections:
        Array.from(chevDown).forEach(function(chev) {
        console.log(chev.classList);
        chev.classList.remove("footer-down-clicked");
        });
        
        Array.from(footerMenus).forEach(function(footerMenu) {
        footerMenu.closest(".footer-section").children[1].classList.remove("menu-open");
        footerMenu.closest(".footer-section").children[1].classList.add("menu");
        });
    }
    // Entering <700 vw:
    if (window.matchMedia(`(max-width: 700px)`).matches) {
        // resources sub-menu:
        document.getElementById("resources-dropdown").removeEventListener("click", toggleResources);
    }
});