const slider = () => {
	const sliderBlock = document.querySelector('.portfolio-content'),
		slides = document.querySelectorAll('.portfolio-item'),
		dotsBlock = document.querySelector('.portfolio-dots'),

		timeInterval = 2000;

	let currentSlide = 0,
		interval;

	const renderDots = () => {
		for(let i = 0; i < slides.length; i++) {
			const dot = document.createElement('li');

			dot.classList.add('dot');
			dotsBlock.append(dot);
		}
	}

	const prevSlide = (elems, index, strClass) => elems[index].classList.remove(strClass);
	const nextSlide = (elems, index, strClass) => elems[index].classList.add(strClass);

	const autoSlide = () => {
		const dots = document.querySelectorAll('.dot');

		prevSlide(slides, currentSlide, 'portfolio-item-active');
		prevSlide(dots, currentSlide, 'dot-active');
		currentSlide++

		if(currentSlide >= slides.length) currentSlide = 0;

		nextSlide(slides, currentSlide, 'portfolio-item-active');
		nextSlide(dots, currentSlide, 'dot-active');
	}

	const startSlide = (timer = 1500) => interval = setInterval(autoSlide, timer);
	const stopSlide = () => clearInterval(interval);

	sliderBlock.addEventListener('click', (e) => {
		const dots = document.querySelectorAll('.dot');

		e.preventDefault();

		if(!e.target.matches('.dot, .portfolio-btn')) return;

		prevSlide(slides, currentSlide, 'portfolio-item-active');
		prevSlide(dots, currentSlide, 'dot-active');

		if(e.target.matches('#arrow-right')) {
			currentSlide++
		} else
		if(e.target.matches('#arrow-left')) {
			currentSlide--
		} else
		if(e.target.classList.contains('dot')) {
			dots.forEach((dot, index) => {
				if(e.target === dot) currentSlide = index;
			});
		}

		if(currentSlide >= slides.length) currentSlide = 0;
		if(currentSlide < 0) currentSlide = slides.length - 1;

		nextSlide(slides, currentSlide, 'portfolio-item-active');
		nextSlide(dots, currentSlide, 'dot-active');
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