export default function toggleHeaderMenu(mobileMenuClassName, navigationClassName, menuHamburgerClassName, menuXClassName) {

	const mobileMenu = document.querySelector(mobileMenuClassName);
	const navigation = document.querySelector(navigationClassName);
	const menuHamburger = document.querySelector(menuHamburgerClassName);
	const menuX = document.querySelector(menuXClassName);

	mobileMenu.addEventListener('click', () => {
		navigation.classList.contains('df') ?
		mobileMenu.setAttribute('aria-expanded', false) :
		mobileMenu.setAttribute('aria-expanded', true);
		navigation.classList.toggle('df');
		menuHamburger.classList.toggle('db');
		menuX.classList.toggle('db');
		document.body.classList.toggle('disable-scroll');
	});
}