const btnHumburger = document.getElementById('btnHamburger');
const btnHamburgerOpen = document.getElementById("btnHamburger__open");
const btnHamburgerClose = document.getElementById("btnHamburger__close");

const subMenus = Array.from(document.getElementsByClassName('submenu'));

export const toggleHamburger = () => {
    btnHumburger.addEventListener('click', () => {
        const navMenu = document.querySelector(".nav__menu");

        if (navMenu.classList.contains('open')) {

            btnHamburgerClose.classList.add('invisible');
            btnHamburgerClose.classList.remove('visible', 'fade-in');
            btnHamburgerOpen.classList.add('visible', 'fade-in');
            btnHamburgerOpen.classList.remove('invisible');

            navMenu.classList.add('close');       
            navMenu.classList.remove('open');

            setTimeout(() => {
                navMenu.classList.remove('close'); 
            }, 1000);

           //document.body.style.overflow = 'scroll';
        } else {

            btnHamburgerClose.classList.add('visible', 'fade-in');
            btnHamburgerClose.classList.remove('invisible');
            btnHamburgerOpen.classList.add('invisible');
            btnHamburgerOpen.classList.remove('visible', 'fade-in');

            navMenu.classList.remove('close');
            navMenu.classList.add('open');

           //document.body.style.overflow = 'hidden';
        
        }
    })
}    

export const toggleSubMenu = () => {

    subMenus.forEach(subMenu => {

        const hasSubMenuDiv = subMenu.parentElement;

        const collapseSpreadArrow = hasSubMenuDiv.querySelector('svg');

        hasSubMenuDiv.addEventListener('click', () => {
            

            if (subMenu.classList.contains('spread')) {
                
                collapseSpreadArrow.style.transform = null;
                subMenu.classList.remove('spread');
                subMenu.classList.add('collapsed');
            } else {
                collapseSpreadArrow.style.transform = "rotate(180deg)";
                collapseSpreadArrow.style.transition = "0.3s ease-in-out";
                subMenu.classList.remove('collapsed');
                subMenu.classList.add('spread');
            }
        })

    });
}
