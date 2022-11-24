const sum_button = document.getElementById('submit')
const reset_button = document.getElementById('reset')
const toasts = document.getElementById('toasts')

let checker = true;

function checkForm() {
    var inputs = document.getElementsByTagName('input');
    var nextinputs = document.getElementsByTagName('textarea');
    for (var i = 0; i < inputs.length; i++) {
        if (inputs[i].hasAttribute("required")) {
            if (inputs[i].value.length == 0) {
                checker = false;
                return;
            }
        }
    }
    for (var i = 0; i < nextinputs.length; i++) {
        if (nextinputs[i].hasAttribute("required")) {
            if (nextinputs[i].value.length == 0) {
                checker = false;
                return;
            }
        }
    }
}

const messages = [
    'Thank you for submitting. Someone will get back to you shortly',
    'Form Cleared!',
    'Error! A field is left blank.'
]

sum_button.addEventListener('click', () => submitFunction())
reset_button.addEventListener('click', () => resetFunction())

function submitFunction() {
    checker = true;
    checkForm();
    createNotification(messages[0]);
}

function resetFunction() {
    checker = true;
    createNotification(messages[1]);
}


function createNotification(message = null) {

    const notif = document.createElement('div')
    notif.classList.add('toast')

    notif.innerText = message

    if (checker == false) {
        notif.innerText = messages[2]
    }

    toasts.appendChild(notif)

    setTimeout(() => {
        notif.remove()
    }, 3000)
}