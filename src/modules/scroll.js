const scroll = () => {
	const menu = document.querySelector('menu'),
		menuItems = menu.querySelectorAll('ul > li > a'),
		main = document.querySelector('main'),
		scrollBtn = main.querySelector('a');

	const scrollFrom = (elem) => {
		const href = elem.getAttribute("href"),
			block = document.querySelector(href);

		block.scrollIntoView({
			behavior: "smooth",
			block: "start"
		});
	}
	
	menuItems.forEach((link) => {
		link.addEventListener('click', (e) => {
			e.preventDefault();
			scrollFrom(link);
		});
	});

	scrollBtn.addEventListener('click', (e) => {
		e.preventDefault();
		scrollFrom(scrollBtn);
	});
}

export default scroll