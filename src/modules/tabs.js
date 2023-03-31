const tabs = () => {
	const tabContent = document.querySelectorAll('.service-tab'),
		tabPanel = document.querySelector('.service-header'),
		tabs = document.querySelectorAll('.service-header-tab');

	tabPanel.addEventListener('click', (e) => {
		if (e.target.closest('.service-header-tab')) {
			const tabBtn = e.target.closest('.service-header-tab');

			tabs.forEach((tab, index) => {
				if (tab === tabBtn) {
					tab.classList.add('active');
					tabContent[index].classList.remove('d-none');
				} else {
					tab.classList.remove('active');
					tabContent[index].classList.add('d-none');
				}
			});
		}
	});
}

export default tabs