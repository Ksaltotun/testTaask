/*
    for using this script just add it for you html page
    example:
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
        <script src="task2.js"></script>
    </head>
*/
//this functions made 20 rows with 80 symbols text
function completeColor() {
    var x = '';
    for (var i = 0; i < 1600; i++) {
        if (i > 0 && i % 80 == 0) {
            x += '\n';
        }
        x += 'O'
    }
    return x;
}
//this function create box for colored text
function createColor(text, color) {
    const line = document.createElement('div');
    line.style.color = color;
    line.innerText = text;
    return line;
}
//wait until DOM will be created
window.onload = function () {
    const flagBox = document.createElement('div');
    //some style
    flagBox.style.position = 'absolute';
    flagBox.style.top = '50%';
    flagBox.style.left = '50%';
    flagBox.style.transform = 'translate(-50%, -50%)';
    flagBox.style.border = '1px solid black';
    //fill flag box with colored 'O'
    flagBox.appendChild(createColor(completeColor(), 'white'));
    flagBox.appendChild(createColor(completeColor(), 'blue'));
    flagBox.appendChild(createColor(completeColor(), 'red'));
    document.body.appendChild(flagBox);
}
