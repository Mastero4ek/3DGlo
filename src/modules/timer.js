const timer = (deadline) => {
	const timerHours = document.getElementById('timer-hours'),
		timerMinutes = document.getElementById('timer-minutes'),
		timerSeconds = document.getElementById('timer-seconds');
	
	const getTimeRemaining = () => {
		let dateStop = new Date(deadline).getTime(),
			dateNow = new Date().getTime(),
			timeRemaining = (dateStop - dateNow) / 1000,
			days = Math.floor(timeRemaining / 60 / 60 / 24),
			hours = Math.floor((timeRemaining / 60 / 60)),
			minuts = Math.floor((timeRemaining / 60) % 60),
			seconds = Math.floor(timeRemaining % 60);

		return {timeRemaining, hours, minuts, seconds};
	}

	const editTime = num => (num < 10) ? `0${num}` : num;

	const updateClock = () => {
		let getTime = getTimeRemaining();

		timerHours.textContent = editTime(getTime.hours);
		timerMinutes.textContent = editTime(getTime.minuts);
		timerSeconds.textContent = editTime(getTime.seconds);
	}

	const startTimer = () => {
		let idTimer = setInterval(() => {
			let getTime = getTimeRemaining();

			if(getTime.timeRemaining > 0) {
				updateClock();

				if(getTime.timeRemaining == 0) {
					clearTimeout(idTimer);
				}
			}
		}, 1000);
	}

	startTimer();
}

export default timer