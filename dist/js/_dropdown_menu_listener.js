const header = document.getElementsByTagName('header')[0];
const subMenus = Array.from(document.getElementsByClassName('submenu'));

const navItems = Array.from(document.getElementsByClassName('nav__item'));

export const dropdownMenuListener = () => {
    navItems.forEach(navItem => {

        let shouldCollapse = false;


        let enteredNavItem = false;
        let enteredSubMenu = false;

        let leftNavItem = false;
        let leftSubMenu = false;

        navItem.addEventListener("mouseenter", (event) => {
            enteredNavItem = true;

            const subMenu = event.target.querySelector(".submenu");

            if (subMenu != null) {
                header.classList.add("open");
                subMenu.classList.add("spread");
                subMenu.classList.remove("collapsed");
            }

            if (subMenu != null) {
                subMenu.addEventListener("mouseleave", (event) => {
                    header.classList.remove("open");
                    subMenu.classList.remove("spread");
                    subMenu.classList.add("collapsed");
                });
            }

        });

        navItem.addEventListener("mouseout", (event) => {
            const subMenu = event.target.querySelector(".submenu");

            console.log(event);

            if (subMenu != null) {
                header.classList.remove("open");
                subMenu.classList.remove("spread");
                subMenu.classList.add("collapsed");
            }
        })
    });
}