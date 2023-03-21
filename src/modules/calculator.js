const calculator = (price = 100) => {
	const calcBlock = document.getElementById('calc'),
		calcInputs = calcBlock.querySelectorAll('input'),
		calcType = calcBlock.querySelector('.calc-type'),
		calcSquare = calcBlock.querySelector('.calc-square'),
		calcCount = calcBlock.querySelector('.calc-count'),
		calcDay = calcBlock.querySelector('.calc-day'),
		total = document.getElementById('total');

//animation value

	const outNum = (num, elem) => {
		const duration = 500;

		let	step;
		
		let e = document.querySelector('#' + elem),
			n = +total.textContent,
			t = Math.round(duration / (num / step));

		if((num % 1 == 0 && num % 2 != 0) ||
			(n % 1 == 0 && n % 2 != 0)) {
			step = 15;
		} else {
			step = 10;
		}

		num = Math.round(num);

		let interval = setInterval(() => {
			switch(true) {
				case n < num:
					n = n + step;
				break;

				case n > num:
					n = n - step;
				break;
			}
			
			if (n == num) {
				clearInterval(interval);
			}
			e.innerHTML = n;
		}, t);
	}
	
//calculation

	calcInputs.forEach((input) => {
		input.addEventListener('input', (e) => {
			e.target.value = e.target.value.replace(/\D+/, "")
		});
	});

	const countCalc = () => {
		const calcTypeValue = +calcType.options[calcType.selectedIndex].value,
			calcSquareValue = calcSquare.value;

		let totalValue = 0,
			calcCountValue = 1,
			calcDayValue = 1;

		if(calcCount.value > 1) {
			calcCountValue += +calcCount.value / 10;
		}

		if(calcDay.value && calcDay.value < 5) {
			calcDayValue = 2;
		} else
		if(calcDay.value && calcDay.value < 10) {
			calcDayValue = 1.5;
		}

		if(calcType.value && calcSquare.value) {
			totalValue = price * calcTypeValue * calcSquareValue * calcCountValue * calcDayValue;
		} else {
			totalValue = 0;
		}

		outNum(totalValue, 'total');
	}

	calcBlock.addEventListener('input', (e) => {
		if(e.target === calcType || e.target === calcSquare ||
			e.target === calcCount || e.target === calcDay) {
				countCalc()
		}
	});
}

export default calculator