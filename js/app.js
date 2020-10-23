'use strict';

let menuItemsBlock = document.getElementsByClassName('menu_items')[0];
let menuButton = document.getElementsByClassName('menu_button')[0];
let isMobile = !(getComputedStyle(menuButton).display == 'none');
	
menuButton.addEventListener('click', () => {
	let isOpened = menuButton.parentElement.classList.contains('opened');
		menuItemsBlock.style.display = isOpened ? 'none' : 'flex';
	if (isOpened) {
		menuButton.parentElement.classList.remove('opened');
	} else {
		menuButton.parentElement.classList.add('opened');
	}
});

let menuItems = document.getElementsByClassName('menu_item');
let sections = {};

for(let i=0; i<menuItems.length; i++) {


	menuItems[i].addEventListener('click', (e) => {
		e.preventDefault();

		if (isMobile) {
			menuButton.click();
		}
	
		let sectionId = e.target.hash.substr(1);
		if (!(sectionId in sections)) {
			sections[sectionId] = document.getElementById(sectionId);
		}
		sections[sectionId].scrollIntoView(true);
		window.scrollBy(0, -64);
	});
}

window.addEventListener('orientationchange', () => {
	menuItemsBlock.style='flex';
	isMobile = getComputedStyle(menuButton).display == 'none';
});