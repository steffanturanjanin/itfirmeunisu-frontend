const header = document.querySelector('#header');

const btnHamburger = document.querySelector('#btnHamburger');
const btnHamburgerOpen = document.querySelector("#btnHamburger__open");
const btnHamburgerClose = document.querySelector("#btnHamburger__close");

const subMenus = Array.from(document.querySelectorAll('#header .has-submenu .submenu'));

const debounce = (func) => {
	let timeout;

	return function () {
		const context = this;
		const args = arguments;

		if (timeout) {
			clearTimeout(timeout);
		}

		timeout = setTimeout(function () {
			func.apply(context, args);
		}, 500);
	}
};

const onWindowResize = (event) => {

    if (!header.classList.contains('open')) {
        return;
    }

    if (event.target.screen.width > 800 && document.body.style.overflow == 'hidden') {
        document.body.style.overflow = 'scroll';
    }

    if (event.target.screen.width <= 800 && document.body.style.overflow == 'scroll') {
        document.body.style.overflow = 'hidden';
    }
}

const onWindowResizeDebounce = debounce((event) => { onWindowResize(event) });

window.addEventListener('resize', (event) => { onWindowResizeDebounce(event); });

const toggleHamburgerEventCallback = () => {

    if (header.classList.contains('open')) {
        btnHamburgerClose.classList.add('invisible');
        btnHamburgerClose.classList.remove('visible', 'fade-in');
        btnHamburgerOpen.classList.add('visible', 'fade-in');
        btnHamburgerOpen.classList.remove('invisible');

        header.classList.add('close');       
        header.classList.remove('open');

        document.body.style.overflow = 'auto';

        setTimeout(() => {
            header.classList.remove('close'); 
        }, 1000);

    } else {
        btnHamburgerClose.classList.add('visible', 'fade-in');
        btnHamburgerClose.classList.remove('invisible');
        btnHamburgerOpen.classList.add('invisible');
        btnHamburgerOpen.classList.remove('visible', 'fade-in');

        header.classList.remove('close');
        header.classList.add('open');    

        document.body.style.overflow = 'hidden';
    }
}

const toggleSubmenuEventCallback = (subMenu, collapseSpreadArrow) => {

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

}

btnHamburger.addEventListener('click', toggleHamburgerEventCallback);
   
subMenus.forEach(subMenu => {
    const hasSubMenuDiv = subMenu.parentElement;
    const collapseSpreadArrow = hasSubMenuDiv.querySelector('svg');

    if (collapseSpreadArrow == null) {
        return;
    }

    hasSubMenuDiv.addEventListener('click', () => { toggleSubmenuEventCallback(subMenu, collapseSpreadArrow) });
});


const faders = document.querySelectorAll(".slide-up");

const appearOptions = {
    threshold: 0.5,
  };

const appearOnScroll = new IntersectionObserver((entries => {
    entries.forEach(entry => {
        if (!entry.isIntersecting) {
            return;
        } 

        entry.target.classList.add("appear");
        appearOnScroll.unobserve(entry.target);
    });
  }), appearOptions);

faders.forEach((fader) => {
    appearOnScroll.observe(fader);
});
  