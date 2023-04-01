import timer from './modules/timer'
import menu from './modules/menu'
import modal from './modules/modal'
import scroll from './modules/scroll'
import calculator from './modules/calculator'
import validation from './modules/validation'
import tabs from './modules/tabs'
import slider from './modules/slider'
import sendForm from './modules/sendForm'

timer('03 april 2023')
menu()
modal()
scroll()
calculator()
validation()
tabs()

slider('.portfolio-content', '.portfolio-item', '.portfolio-dots', 'portfolio-item-active', 'dot-active')

sendForm({
    formId: 'form1',
    someElem: [
        {
            type: 'block',
            id: 'total'
        }
    ]
})

sendForm({
    formId: 'form2',
    someElem: [
        {
            type: 'block',
            id: 'total'
        }
    ]
})

sendForm({
    formId: 'form3',
    someElem: [
        {
            type: 'block',
            id: 'total'
        }
    ]
})