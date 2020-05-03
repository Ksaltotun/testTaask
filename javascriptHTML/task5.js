/*
    we use mok-server api jsonplaceholder for imitate client-server 
interaction
*/
async function submitHandler(data) {
    const resp = await (await fetch('https://jsonplaceholder.typicode.com/todos', {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
    })).json();
    console.log(resp);
}
// wait window load
window.onload = function () {

    class Person {
        constructor(fio, telephone, comment) {
            this.fio = fio;
            this.telephone = telephone;
            this.comment = comment;
        }

        async send(data = {
            "FIO": this.fio,
            "NUMBER": this.telephone,
            "COMMENT": this.comment
        }) {
            const resp = await (await fetch('https://jsonplaceholder.typicode.com/todos', {
                method: 'POST',
                body: JSON.stringify(data),
                headers: {
                    "Content-type": "application/json; charset=UTF-8"
                }
            })).json();
            console.log(resp);

        }
    }
    function makeMessage() {
        const data = {
            "FIO": nameInput.value,
            "NUMBER": numberInput.value,
            "COMMENT": commentInput.value
        }
        return data;
    }
    //create form markdown
    const form = document.createElement('div');
    form.style.position = 'absolute';
    form.style.top = '50%';
    form.style.left = '50%';
    form.style.transform = 'translate(-50%, -50%)';
    form.style.border = '1px solid black';

    const nameField = document.createElement('div');
    nameField.style.display = 'flex';
    nameField.style.alignItems = 'center';
    nameField.style.justifyContent = 'space-between';
    const nameMark = document.createElement('div');
    const nameInput = document.createElement('input');
    nameMark.innerText = 'ФИО';

    nameField.appendChild(nameMark);
    nameField.appendChild(nameInput);

    const numberField = document.createElement('div');
    numberField.style.display = 'flex';
    numberField.style.alignItems = 'center';
    numberField.style.justifyContent = 'space-between';
    const numberMark = document.createElement('div');
    const numberInput = document.createElement('input');
    numberMark.innerText = 'Телефон';

    numberField.appendChild(numberMark);
    numberField.appendChild(numberInput);

    const commentField = document.createElement('div');
    commentField.style.display = 'flex';
    commentField.style.alignItems = 'center';
    commentField.style.justifyContent = 'space-evenly';
    const commentMark = document.createElement('div');
    const commentInput = document.createElement('input');
    commentMark.innerText = 'Комментарий';

    commentField.appendChild(commentMark);
    commentField.appendChild(commentInput);

    form.appendChild(nameField);
    form.appendChild(numberField);
    form.appendChild(commentField);
    //handle submit click
    const submit = document.createElement('button');
    submit.innerText = 'Отправить';
    submit.onclick = function () {
        const person = new Person(nameInput.value ? nameInput.value : 'John',
            numberInput.value ? numberInput.value : '666-666',
            commentInput.value ? commentInput.value : 'Lorem ipsum');
        person.send();
    }

    form.appendChild(submit);

    document.body.appendChild(form);
}
