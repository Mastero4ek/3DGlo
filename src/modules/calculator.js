const calculator = () => {
	const calc = document.getElementById('calc'),
		calcInput = calc.querySelectorAll('input');

	calcInput.forEach((item) => {
		item.addEventListener('input', (e) => {
			e.target.value = e.target.value.replace(/\D+/, "")
		});
	});
}

export default calculator