'use strict'

const week = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'];

const greetingsDiv = document.querySelector('.greetings > span'),
	todayDiv = document.querySelector('.today'),
	timeDiv = document.querySelector('.time'),
	timeLeftDiv = document.querySelector('.time-left');

const getTimeDate = () => {
	let dateNow = new Date(),
		dateStop = new Date(2024, 0, 0),
		timeRemaining = (dateStop - dateNow) / 1000,
		days = Math.floor(timeRemaining / 60 / 60 / 24),
		calculateDay = (6 + new Date().getDay()) % 7,
		today = week[calculateDay],
		changeDay = week.splice(calculateDay, 1, today),
		timesOfDay = getTimesOfDay(dateNow.getHours());

	return {timeRemaining, changeDay, dateNow, days, timesOfDay};
}

const getTimesOfDay = (hour) => {
	let strDay = '';

	switch(true) {
		case 0 <= hour && hour < 6:
		return strDay = 'ночи'

		case 6 <= hour && hour < 12:
		return strDay = 'утра'

		case 12 <= hour && hour < 18:
		return strDay = 'день'

		case 18 <= hour && hour <= 23:
		return strDay = 'вечер'
	}
}

const renderDate = () => {
	let getTime = getTimeDate();

	greetingsDiv.textContent = ` ${getTime.timesOfDay}`;
	todayDiv.innerHTML = `Сегодня: ${getTime.changeDay}`;
	timeDiv.textContent = `Текущее время: ${getTime.dateNow.toLocaleTimeString('en-US')}`;
}

const startTimerDate = () => {
	let idTimerDate = setInterval(renderDate, 1000);
}

const startTimerLeft = () => {
	let getTime = getTimeDate();

	let idTimerLeft = setInterval(() => {
		timeLeftDiv.innerHTML = `До нового года осталось ${getTime.days} дней`;

		if(getTime.days == 0) clearInterval(idTimerLeft);

	}, 1000);
}

startTimerDate();
startTimerLeft();