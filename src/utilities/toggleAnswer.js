export default function toggleAnswer(questionBlockClassName, faqButtonClassName, answerClassName, plusButtonClassName, xButtonClassName, activeClass) {
	
	const questionBlocks = document.querySelectorAll(questionBlockClassName);
	const faqButton = document.querySelectorAll(faqButtonClassName);
	const answers = document.querySelectorAll(answerClassName);
	const plusButtons = document.querySelectorAll(plusButtonClassName);
	const xButtons = document.querySelectorAll(xButtonClassName);

	questionBlocks.forEach((questionBlock, i) => {
		questionBlock.addEventListener('click', () => {
			if (answers[i].classList.contains(activeClass)) {
				faqButton[i].setAttribute('aria-expanded', false);
				answers[i].classList.remove(activeClass);
				plusButtons[i].classList.toggle('db');
				xButtons[i].classList.toggle('db');
			} else {
				faqButton[i].setAttribute('aria-expanded', true);
				answers.forEach(answer => {
					answer.classList.remove(activeClass);
				});
				answers[i].classList.add(activeClass);
				xButtons.forEach(xButton => {
					xButton.classList.remove('db');
				});
				plusButtons.forEach(plusButton => {
					plusButton.classList.add('db');
				});
				xButtons[i].classList.add('db');
				plusButtons[i].classList.remove('db');
			}
		});
	});
}