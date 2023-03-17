const slider = (slider, slides, pagination, slideActive = 'slide-active', paginationDotActive = 'dot-active') => {
	const sliderBlock = document.querySelector(slider),
		allSlides = document.querySelectorAll(slides),
		dotsBlock = document.querySelector(pagination),

		timeInterval = 2000;

	let currentSlide = 0,
		interval;

	if(sliderBlock === null) return;

	const renderDots = () => {
		for(let i = 0; i < allSlides.length; i++) {
			const dot = document.createElement('li');

			dot.classList.add('dot');
			dotsBlock.append(dot);
		}
	}

	const prevSlide = (elems, index, strClass) => {
		if(elems[index] === undefined) return;
		elems[index].classList.remove(strClass);
	}

	const nextSlide = (elems, index, strClass) => {
		if(elems[index] === undefined) return;
		elems[index].classList.add(strClass);
	}

	const autoSlide = () => {
		const allDots = document.querySelectorAll('.dot');

		prevSlide(allSlides, currentSlide, slideActive);
		prevSlide(allDots, currentSlide, paginationDotActive);
		currentSlide++

		if(currentSlide >= allSlides.length) currentSlide = 0;

		nextSlide(allSlides, currentSlide, slideActive);
		nextSlide(allDots, currentSlide, paginationDotActive);
	}

	const startSlide = (timer = 1500) => interval = setInterval(autoSlide, timer);
	const stopSlide = () => clearInterval(interval);

	sliderBlock.addEventListener('click', (e) => {
		const allDots = document.querySelectorAll('.dot');

		e.preventDefault();

		if(!e.target.matches('.dot, .portfolio-btn')) return;

		prevSlide(allSlides, currentSlide, slideActive);
		prevSlide(allDots, currentSlide, paginationDotActive);

		if(e.target.matches('#arrow-right')) {
			currentSlide++
		} else
		if(e.target.matches('#arrow-left')) {
			currentSlide--
		} else
		if(e.target.classList.contains('dot')) {
			allDots.forEach((dot, index) => {
				if(e.target === dot) currentSlide = index;
			});
		}

		if(currentSlide >= allSlides.length) currentSlide = 0;
		if(currentSlide < 0) currentSlide = allSlides.length - 1;

		nextSlide(allSlides, currentSlide, slideActive);
		nextSlide(allDots, currentSlide, paginationDotActive);
	});

	sliderBlock.addEventListener('mouseenter', (e) => {
		if(e.target.matches('.dot, .portfolio-btn')) stopSlide();
	}, true);

	sliderBlock.addEventListener('mouseleave', (e) => {
		if(e.target.matches('.dot, .portfolio-btn')) startSlide(timeInterval);
	}, true);

	

	renderDots();
	startSlide(timeInterval);
}

export default slider