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
    const NUMBERS = [];
    let N = 1;
    //handler '+' click
    function createNewNumber() {
        const number = document.createElement('div');
        number.style.display = 'flex';
        number.style.alignItems = 'center';
        number.style.justifyContent = 'space-between';
        const numberMark = document.createElement('div');
        const numberInput = document.createElement('input');
        numberInput.id = N;
        numberMark.innerText = 'Телефон ' + N;
        number.appendChild(numberMark);
        number.appendChild(numberInput);
        number.appendChild(plus);
        NUMBERS.push(N);
        N += 1;
        commentField.before(number);
    }


    function makeMessage() {

        const data = {
            "FIO": nameInput.value,
            "NUMBERS": [...NUMBERS.map(num => {
                console.dir(document.getElementById(num));
                return document.getElementById(num).value;
            })],
            "COMMENT": commentInput.value
        }
        return data;
    }
    //create form markdown
    const form = document.createElement('div');
    form.style.position = 'absolute';
    form.style.top = '50%';
    form.style.left = '50%';
    form.style.width = '300px';
    form.style.transform = 'translate(-50%, -50%)';
    form.style.border = '1px solid black';

    const plus = document.createElement('button');
    plus.innerText = '+';
    plus.onclick = createNewNumber;

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
    numberInput.id = 0;
    numberMark.innerText = 'Телефон';
    NUMBERS.push(0);

    numberField.appendChild(numberMark);
    numberField.appendChild(numberInput);
    numberField.appendChild(plus);

    const commentField = document.createElement('div');
    commentField.style.display = 'flex';
    commentField.style.alignItems = 'center';
    commentField.style.justifyContent = 'space-between';
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
        submitHandler(makeMessage());
    }

    form.appendChild(submit);

    document.body.appendChild(form);
}
