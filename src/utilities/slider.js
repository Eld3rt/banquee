export default function slider (sliderContainer, sliderClassName, slideElement, selectorClassName, sectionContainer, activeSelectorClass) {

	const sliderWrapper = document.querySelector(sliderContainer);
	const slider = document.querySelector(sliderClassName);
	const slides = Array.from(document.querySelectorAll(slideElement));
	const slide = document.querySelector(slideElement);
	const selectors = document.querySelectorAll(selectorClassName);
	const container = document.querySelector(sectionContainer);

	let isDragging = false,
		prevent = false,
		startPosX = 0,
		startPosY = 0,
		currentTranslateX = 0,
		currentTranslateY = 0,
		prevTranslateX = 0,
		prevTranslateY = 0,
		movedByX = 0,
		movedByY = 0,
		animationID = 0,
		currentIndex = 0,
		marginsOfContainer = 0,
		paddingOfSlide = 0,
		deviationValue = 0;

	
	function sliderInit() {
		marginsOfContainer = window.getComputedStyle(container, null).getPropertyValue("margin-left");
		paddingOfSlide = window.getComputedStyle(slide, null).getPropertyValue("padding-right");
		deviationValue = parseFloat(marginsOfContainer) * 2 - parseFloat(paddingOfSlide);

		slides.forEach((slide, index) => {
		
			if (isNotDesktop()) {
			// Touch events
			slide.addEventListener('touchstart', touchStart(index))
			slide.addEventListener('touchend', touchEnd)
			slide.addEventListener('touchmove', touchMove)
		
			// Mouse events
			slide.addEventListener('mousedown', touchStart(index))
			slide.addEventListener('mouseup', touchEnd)
			slide.addEventListener('mousemove', touchMove)
			
			slider.style.cursor = "grab";
			}
		});
	}

	selectors.forEach((selector, index) => {
	
		selector.addEventListener('click', (e) => {
			e.preventDefault();
			currentIndex = index;
			setPositionByIndex(currentIndex);
			setSelector(currentIndex);
		})
	})
	
	function touchStart(index) {
			return function(event) {
				if (isNotDesktop()) {
					currentIndex = index
					startPosX = getPositionX(event)
					startPosY = getPositionY(event)
					isDragging = true
					prevent = false
					slider.style.cursor = "grabbing";
				}
			}
	}
	
	function touchMove(event) {
		if (isDragging) {
			
			let currentPositionX = getPositionX(event)
			currentTranslateX = prevTranslateX + currentPositionX - startPosX
			
			let currentPositionY = getPositionY(event)
			currentTranslateY = prevTranslateY + currentPositionY - startPosY
			
			movedByX = currentTranslateX - prevTranslateX
			movedByY = currentTranslateY - prevTranslateY

				if (!prevent) {
					if (Math.abs(movedByX) > Math.abs(movedByY)) {
						prevent = true;
						animationID = requestAnimationFrame(animation)
					}
				}

				if (prevent) {
					event.preventDefault();
				} else isDragging = false;
		}
	}

	function touchEnd() {
			isDragging = false
			cancelAnimationFrame(animationID)

			if (isMobile()) {
				if (movedByX < -25 && currentIndex < slides.length - 1) currentIndex += 1
			}

			if (isTablet()) {
				if (movedByX < -25 && currentIndex < slides.length - 2) currentIndex = Math.floor((currentIndex + 2) / 2); 
				else currentIndex = Math.floor(currentIndex / 2)
		}
			if (movedByX > 25 && currentIndex > 0) currentIndex -= 1

			setPositionByIndex(currentIndex);

			setSelector(currentIndex);
			
			slider.style.cursor = "grab";
	}
	
	function getPositionX(event) {
		return event.type.includes('mouse') ? event.pageX : event.touches[0].clientX
	}

	function getPositionY(event) {
		return event.type.includes('mouse') ? event.pageY : event.touches[0].clientY
	}
	
	function animation() {
		setSliderPosition()
		if (isDragging) requestAnimationFrame(animation)
	}
	
	function setSliderPosition() {
		slider.style.transform = `translateX(${currentTranslateX}px)`
	}
	
	function setPositionByIndex(currentIndex) {
		currentTranslateX = currentIndex * (-document.documentElement.clientWidth + deviationValue)
		prevTranslateX = currentTranslateX
		setSliderPosition()
	}

	function isNotDesktop() {
		if (document.documentElement.clientWidth <= 1040) return true;
	}

	function isMobile() {
		if (document.documentElement.clientWidth <= 640) return true;
	}

	function isTablet() {
		if (document.documentElement.clientWidth <= 1040 && document.documentElement.clientWidth > 640) return true;
	}

	function setSelector(currentIndex) {
		selectors.forEach (selector => {
			selector.classList.remove(activeSelectorClass);
		});
		selectors[currentIndex].classList.add(activeSelectorClass);
	}

	function resizeSliderReset() {
		let windowWidth = document.documentElement.clientWidth;

		window.addEventListener("resize", () => {
			if (document.documentElement.clientWidth != windowWidth) {
				setPositionByIndex(0);
				setSelector(0);
				slider.style.cursor = "auto";
				sliderInit();
				windowWidth = document.documentElement.clientWidth;
			}
		});
	}
	
	sliderInit();
	resizeSliderReset();
}