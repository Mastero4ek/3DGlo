import { showLoader, hideLoader } from "./loader"
import { validateEmail } from "./helpers"

const sendForm = ({ formId, someElem = [] }) => {
    const form = document.getElementById(formId),
        errorBlock = document.createElement('div');

    errorBlock.style.color = "#dc3545"

    const validate = (list) => {
        let success = true

        const userName = form.querySelector('[name="user_name"]'),
            userEmail = form.querySelector('[name="user_email"]'),
            userPhone = form.querySelector('[name="user_phone"]');

        if (userName.value.length < 2 || userPhone.value.length < 11 || !validateEmail(userEmail.value)) {
            success = false
        }

        return success
    }

    const sendData = (data) => {
        return fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json"
            }
        }).then(res => res.json())
    }

    const submitForm = () => {
        const formData = new FormData(form);
        const formBody = {};
        const formElements = form.querySelectorAll('input');

        showLoader(form)

        formData.forEach((val, key) => {
            if (val != '') {
                formBody[key] = val
            }
        })

        someElem.forEach(elem => {
            const element = document.getElementById(elem.id)

            switch (true) {
                case elem.type === 'block':
                    formBody[elem.id] = element.textContent
                    if (formBody[elem.id] == '0') delete formBody[elem.id]
                    break

                case elem.type === 'input':
                    formBody[elem.id] = element.value
                    break
            }
        })

        if (validate(formElements)) {
            sendData(formBody)
                .then(data => {
                    hideLoader()
                    console.log(formBody)

                    formElements.forEach(input => {
                        input.value = ''
                    })
                })
                .catch(error => {
                    errorBlock.innerHTML = 'Ошибка! Не удалось отправить данные!'
                    form.append(errorBlock)

                    setTimeout(() => {
                        hideLoader()
                        errorBlock.remove()
                        errorBlock.innerHTML = ''
                    }, 3000)
                })
        } else {
            hideLoader(form)
            errorBlock.innerHTML = 'Ошибка! Введите верные данные!'
            form.append(errorBlock)

            setTimeout(() => {
                errorBlock.remove()
                errorBlock.innerHTML = ''
            }, 3000)
        }
    }

    try {
        if (!form) {
            throw new Error('Верните форму на место, пожалуйста')
        }

        form.addEventListener('submit', (e) => {
            e.preventDefault();

            submitForm();
        })
    } catch (error) {
        console.log(error.message)
    }
}

export default sendForm