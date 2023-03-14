export default function slider (sliderContainer, sliderClassName, slideElement, selectorClassName, sectionContainer, activeSelectorClass) {

	const sliderWrapper = document.querySelector(sliderContainer);
	const slider = document.querySelector(sliderClassName);
	const slides = Array.from(document.querySelectorAll(slideElement));
	const slide = document.querySelector(slideElement);
	const selectors = document.querySelectorAll(selectorClassName);
	const container = document.querySelector(sectionContainer);

	let isDragging = false,
		startPos = 0,
		currentTranslate = 0,
		prevTranslate = 0,
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
		sliderWrapper.addEventListener('mouseleave', () => {
			if(isDragging == true) touchEnd()
		});
		
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
					startPos = getPositionX(event)
					isDragging = true
					animationID = requestAnimationFrame(animation)
					slider.style.cursor = "grabbing";
				}
			}
	}
	
	function touchMove(event) {
		if (isDragging) {
			const currentPosition = getPositionX(event)
			currentTranslate = prevTranslate + currentPosition - startPos
		}
	}

	function touchEnd() {
			isDragging = false
			cancelAnimationFrame(animationID)
	
			const movedBy = currentTranslate - prevTranslate

			if (isMobile()) {
				if (movedBy < -100 && currentIndex < slides.length - 1) currentIndex += 1
			}

			if (isTablet()) {
				if (movedBy < -100 && currentIndex < slides.length - 2) currentIndex = Math.floor((currentIndex + 2) / 2); 
				else currentIndex = Math.floor(currentIndex / 2)
		}
			if (movedBy > 100 && currentIndex > 0) currentIndex -= 1

			setPositionByIndex(currentIndex);

			setSelector(currentIndex);
			
			slider.style.cursor = "grab";
	}
	
	function getPositionX(event) {
		return event.type.includes('mouse') ? event.pageX : event.touches[0].clientX
	}
	
	function animation() {
		setSliderPosition()
		if (isDragging) requestAnimationFrame(animation)
	}
	
	function setSliderPosition() {
		slider.style.transform = `translateX(${currentTranslate}px)`
	}
	
	function setPositionByIndex(currentIndex) {
		currentTranslate = currentIndex * (-document.documentElement.clientWidth + deviationValue)
		prevTranslate = currentTranslate
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
		window.addEventListener("resize", () => {
			setPositionByIndex(0);
			setSelector(0);
			slider.style.cursor = "auto";
			sliderInit();
		});
	}
	
	sliderInit();
	resizeSliderReset();
}