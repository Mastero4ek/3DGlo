const menu = () => {
	const menu = document.querySelector('menu'),
		closeBtn = document.querySelector('.close-btn');

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

	closeBtn.addEventListener('click', (e) => {
		e.preventDefault()

		handleMenu();
	});
}

export default menu