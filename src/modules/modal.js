const modal = () => {
	const modal = document.querySelector('.popup'),
		buttons = document.querySelectorAll('.popup-btn'),
		closeBtn = modal.querySelector('.popup-close'),
		popup = modal.querySelector('.popup-content');

	let count = 0,
		idDown;

	const fallingDown = () => {
		count++
		idDown = requestAnimationFrame(fallingDown);

		popup.style.top = `${count}%`;
		popup.style.opacity = `${count / 10}`;
		popup.style.transform = `scale(${count / 10})`;
		modal.style.opacity = `${count / 10}`;

		if(count == 10) cancelAnimationFrame(idDown);
	}

	const showModal = () => {
		if(innerWidth >= 768) {
			popup.style.top = '-65%';
			popup.style.opacity = '0';
			popup.style.transform = 'scale(0)'; 
			modal.style.opacity = '0';

			fallingDown();
		}

		modal.style.display = 'block';
		modal.style.opacity = '';
		popup.style.top = '';
		popup.style.opacity = '';
		popup.style.transform = ''; 
	}

	const hideModal = () => {
		modal.style.display = 'none';

		if(innerWidth >= 768) {
			count = 0;
			popup.style.top = '-65%';
			popup.style.opacity = '0';
			popup.style.transform = 'scale(0)'; 
			modal.style.opacity = '0';

			cancelAnimationFrame(idDown);
		}
	}

	buttons.forEach(btn => btn.addEventListener('click', showModal));
	closeBtn.addEventListener('click', hideModal);
}

export default modal