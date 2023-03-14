const validation = () => {
	const form1name = document.getElementById('form1-name'),
		form1email = document.getElementById('form1-email'),
		form1phone = document.getElementById('form1-phone'),

		form2name = document.getElementById('form2-name'),
		form2email = document.getElementById('form2-email'),
		form2phone = document.getElementById('form2-phone'),
		form2message = document.getElementById('form2-message'),

		form3name = document.getElementById('form3-name'),
		form3email = document.getElementById('form3-email'),
		form3phone = document.getElementById('form3-phone');

	const isCyrillic = /[^а-яёА-ЯЁ\s\-]/g,
		isEmail = /[^a-zA-Z0-9\'\*\~\!\.\_\-\@]/g,
		isPhone = /[^0-9()-]/g,
		cutSpaceHyphen = /^[\s\-]+$/g,
		trimSpace = /\s{2,}/g,
		trimHyphen = /\-{2,}/g;

	const validationString = (event) => {
		event.target.value = event.target.value.replace(trimSpace, " ");
		event.target.value = event.target.value.replace(cutSpaceHyphen, "");
		event.target.value = event.target.value.replace(trimHyphen, "-");
	};

	const capitalize = (event) => {
		event.target.value = event.target.value.replace(/(^|\s)\S/g, function(str) {
			return str.toUpperCase();
		});
	};

	form1name.addEventListener('blur', (e) => {
		event.target.value = event.target.value.replace(isCyrillic, "");
		validationString(e);
		capitalize(e);
	});
	form2name.addEventListener('blur', (e) => {
		event.target.value = event.target.value.replace(isCyrillic, "");
		validationString(e);
		capitalize(e);
	});
	form2message.addEventListener('blur', (e) => {
		event.target.value = event.target.value.replace(isCyrillic, "");
		validationString(e);
	});
	form3name.addEventListener('blur', (e) => {
		event.target.value = event.target.value.replace(isCyrillic, "");
		validationString(e);
		capitalize(e);
	});

	form1email.addEventListener('blur', (e) => {
		e.target.value = e.target.value.replace(isEmail, "");
		validationString(e);
	});
	form2email.addEventListener('blur', (e) => {
		e.target.value = e.target.value.replace(isEmail, "");
		validationString(e);
	});
	form3email.addEventListener('blur', (e) => {
		e.target.value = e.target.value.replace(isEmail, "");
		validationString(e);
	});

	form1phone.addEventListener('blur', (e) => {
		e.target.value = e.target.value.replace(isPhone, "");
		validationString(e);
	});
	form2phone.addEventListener('blur', (e) => {
		e.target.value = e.target.value.replace(isPhone, "");
		validationString(e);
	});
	form3phone.addEventListener('blur', (e) => {
		e.target.value = e.target.value.replace(isPhone, "");
		validationString(e);
	});
}

export default validation