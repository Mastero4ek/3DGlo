const menu = () => {
	const menu = document.querySelector('menu');

	const handleMenu = () => {
		menu.classList.toggle('active-menu');
	}

	document.addEventListener('click', (e) => {
		if (menu.classList.contains('active-menu') && !e.target.matches('menu')) {
			handleMenu();
		} else
			if (e.target.matches('.menu > img') ||
				e.target.matches('.menu > small') ||
				e.target.classList.contains('menu')) {
				handleMenu();
			}
	});
}

export default menu