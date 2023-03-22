import {animate} from './helpers'

const modal = () => {
	const modal = document.querySelector('.popup'),
		buttons = document.querySelectorAll('.popup-btn'),
		popup = modal.querySelector('.popup-content');

	const showModal = () => {
		modal.style.display = 'block';
		
		if(innerWidth >= 768) {
			popup.style.top = '-100%';
			popup.style.opacity = '0';

			animate({
				duration: 250,
				timing(timeFraction) {
					return timeFraction;
				},
				draw(progress) {
					popup.style.top = progress * 10 + '%';
					popup.style.opacity = progress;
				}
			});
		}
	}

	const hideModal = () => {
		if(innerWidth >= 768) {
			modal.style.display = 'none';
			popup.style.top = '';
			popup.style.opacity = '';
		}
	}

	buttons.forEach(btn => btn.addEventListener('click', showModal));

	modal.addEventListener('click', (e) => {
		if(!e.target.closest('.popup-content') ||
			e.target.classList.contains('popup-close')) {
			hideModal();
		}
	});
}

export default modal