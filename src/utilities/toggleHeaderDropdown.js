export default function toggleHeaderDropdown() {
	
	const dropdownCompareTrigger = document.querySelector('.link-dropdown--compare');
	const dropdownBlogTrigger = document.querySelector('.link-dropdown--blog');
	const dropdownMenuCompare = document.querySelector('.header__compare');
	const dropdownMenuBlog = document.querySelector('.header__blog');

	dropdownCompareTrigger.addEventListener('mouseenter', () => {
		dropdownMenuCompare.classList.toggle('header__compare--active');
	});

	dropdownCompareTrigger.addEventListener('mouseleave');
	dropdownMenuCompare.addEventListener('mouseleave');
	dropdownCompareTrigger.onmouseleave & dropdownMenuCompare.onmouseleave

	dropdownBlogTrigger.addEventListener('mouseenter', () => {
		dropdownMenuBlog.classList.toggle('header__blog--active');
	});

	dropdownBlogTrigger.addEventListener('mouseleave', () => {
		dropdownMenuBlog.classList.toggle('header__blog--active');
	});
}