import { toggleHamburgerEventListener, toggleSubMenuEventListener } from "./_small_screen_menu.js";

toggleHamburgerEventListener();
toggleSubMenuEventListener();

const header = document.getElementsByTagName('header')[0];

window.addEventListener('resize', function(event) {
    // if (event.target.screen.width > 860 && header.classList.contains('fix-header')) {
    //     header.classList.remove('fix-header');
    // }

    // if (event.target.screen.width < 860 && header.classList.contains('open')) {
    //     header.classList.add('fix-header');
    // } 


    if (event.target.screen.width > 800 && document.body.style.overflow == 'hidden') {
        document.body.style.overflow = 'scroll';
    }

    if (event.target.screen.width <= 800 && header.classList.contains('open')) {
        document.body.style.overflow = 'hidden';
    }

});