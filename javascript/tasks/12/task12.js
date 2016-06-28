var container = document.getElementById('container');
var cont;

function eventModel() {
    var buttons = document.getElementsByClassName('button');
    var contents = document.getElementsByClassName('content');

    try {
        if (typeof cont !== 'string' && typeof cont !== 'object') {
            throw new Error('Invalid content type!');
        }
        if (!(cont)) {
            throw new Error('Invalid dom element or id');
        }
        if (!(cont instanceof HTMLElement)) {
            throw new Error('DOM element is non-existant');
        }
    } catch (e) {
        console.log(e);
    }

    var i, len;
    for (i = 0, len = buttons.length; i < len; i += 1) {

        buttons[i].innerHTML = 'Hide';
        buttons[i].addEventListener('click', function(ev) {
            var clickedButton = ev.target;
            var nextElement = clickedButton.nextElementSibling;
            while (nextElement) {
                if (nextElement.className === 'button') {
                    return 0;
                }
                if (nextElement.className === 'content') {
                    if (nextElement.style.display === '') {

                        clickedButton.innerHTML = 'Show';
                        nextElement.style.display = 'none';
                    } else {

                        clickedButton.innerHTML = 'Hide';
                        nextElement.style.display = '';
                    }
                    break;
                } else {
                    nextElement = nextElement.nextElementSibling;
                }
            }

        }, false);

    }
}
eventModel()
