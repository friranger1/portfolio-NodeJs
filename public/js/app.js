document.querySelectorAll('.price').forEach(node => {
    node.textContent = new Intl.NumberFormat('ru-RU', {
        currency: 'rub',
        style: 'currency'
    }).format(node.textContent)
})




const btn = document.querySelector('.btn');
const modalContainer = document.querySelector('.modal-container');
const formId = 'form';
const form = document.getElementById(formId);
const text = document.getElementById('text');


function toJSONString(form) {
    let obj = {}
    let elements = form.querySelectorAll('input, select, textarea')
    for (let i = 0; i < elements.length; ++i) {
        let element = elements[i]
        let name = element.name
        let value = element.value
        if (name) {
            obj[name] = value
        }
    }
    return JSON.stringify(obj)
}




if (form) {
    form.addEventListener('submit', event => {
        event.preventDefault();
        const json = toJSONString(form);
        const formReq = new XMLHttpRequest();

        formReq.open('POST', '/telegram', true);
        formReq.onload = function(oEvent) {
            if (formReq.status === 200) {
                // modal 
                modalContainer.classList.add('show');
                setTimeout(() => {
                    modalContainer.classList.remove('show');
                }, 2000);
                modalContainer.addEventListener('click', () => {
                    modalContainer.classList.remove('show');
                });
                text.innerText = 'Форма была отправлена'

                // form clear 
                let formInputs = document.querySelectorAll('.form__input')
                formInputs.forEach(formInput => {
                    formInput.value = ''
                });
            }
            if (formReq.status !== 200) {
                // modal 
                modalContainer.classList.add('show');
                setTimeout(() => {
                    modalContainer.classList.remove('show');
                }, 3000);
                modalContainer.addEventListener('click', () => {
                    modalContainer.classList.remove('show');
                });
                text.innerText = 'Форма не была отправлена =( Попробуйте снова';
                // form clear 
                let formInputs = document.querySelectorAll('.form__input');
                formInputs.forEach(formInput => {
                    formInput.value = ''
                });
            }
        }
        formReq.setRequestHeader("Content-type", "application/json");
        formReq.send(json);


    })
}