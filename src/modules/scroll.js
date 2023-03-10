const scroll = () => {
	const menu = document.querySelector('menu'),
		menuItems = menu.querySelectorAll('ul > li > a');

	menuItems.forEach((link) => {
		link.addEventListener('click', (e) => {
			e.preventDefault();

			const href = link.getAttribute("href"),
				block = document.querySelector(href);

			block.scrollIntoView({
				behavior: "smooth",
				block: "start"
			});
		});
	});
}

export default scroll