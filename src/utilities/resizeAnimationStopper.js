export default function resizeAnimationStopper(contentClassName, stopperClass) {

let resizeTimer;
const content = document.querySelectorAll(contentClassName);

window.addEventListener("resize", () => {
	content.forEach (item => {
		item.classList.add(stopperClass);
		clearTimeout(resizeTimer);
		resizeTimer = setTimeout(() => {
			content.forEach (item => {
				item.classList.remove(stopperClass);
			}, 100);
		});
	});
});

}