const validation = () => {
	const allInputs = document.querySelectorAll('input');

	const isCyrillic = /[^а-яёА-ЯЁ\s\-]/g,
		isEmail = /[^a-zA-Z0-9\'\*\~\!\.\_\-\@]/g,
		isPhone = /[^0-9()-]/g,
		cutSpaceHyphen = /^[\s\-]+$/g,
		trimSpace = /\s{2,}/g,
		trimHyphen = /\-{2,}/g;

	const trimSimbol = (e) => {
		e.target.value = e.target.value.replace(trimSpace, " ");
		e.target.value = e.target.value.replace(cutSpaceHyphen, "");
		e.target.value = e.target.value.replace(trimHyphen, "-");
	};

	const capitalize = (e) => {
		e.target.value = e.target.value.replace(/(^|\s)\S/g, function(str) {
			return str.toUpperCase();
		});
	};

	const validationInput = (item, e) => {
		trimSimbol(e);

		switch(true) {
			case item.name == 'user_name':
				e.target.value = e.target.value.replace(isCyrillic, "");
				capitalize(event);
			break;

			case item.name == 'user_message':
				e.target.value = e.target.value.replace(isCyrillic, "");
			break;

			case item.name == 'user_email':
				e.target.value = e.target.value.replace(isEmail, "");
			break;

			case item.name == 'user_phone':
				e.target.value = e.target.value.replace(isPhone, "");
			break;
		}
	};

	allInputs.forEach(input => input.addEventListener('blur', event => validationInput(input, event)));
}

export default validation