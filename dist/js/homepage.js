import { toggleHamburger, toggleSubMenu } from "./_small_screen_menu.js";

toggleHamburger();
toggleSubMenu();

const navMenu = document.querySelector('.nav__menu');

window.addEventListener('resize', function(event) {

    if (event.target.screen.width > 860 && document.body.style.overflow == 'hidden') {
        document.body.style.overflow = 'scroll';
    }

    if (event.target.screen.width <= 860 && navMenu.classList.contains('open')) {
        document.body.style.overflow = 'hidden';
    }

});