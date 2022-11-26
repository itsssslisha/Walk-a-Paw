const sum_button = document.getElementById('submit')
const reset_button = document.getElementById('reset')
const proceed_pawsome = document.getElementById('proceed_pawsome')
const proceed_pawfection = document.getElementById('proceed_pawfection')
const pawsomeForm = document.getElementById('pawsomeForm')
const pawfectionForm = document.getElementById('pawfectionForm')
const toast1 = document.getElementById('toast1')
const toast2 = document.getElementById('toast2')
const toasts = document.getElementById('toasts')

let checker = true;

function checkForm() {
    var inputs = document.getElementsByTagName('input');
    var selects = document.getElementsByTagName('select');
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
    for (var i = 0; i < selects.length; i++) {
        if (selects[i].hasAttribute("required")) {
            if (selects[i].value.length == 0) {
                checker = false;
                return;
            }
        }
    }
}

function modalForms(form) {
    var inputs = form.getElementsByTagName('input');
    var selects = form.getElementsByTagName('select');
    var nextinputs = form.getElementsByTagName('textarea');
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
    for (var i = 0; i < selects.length; i++) {
        if (selects[i].hasAttribute("required")) {
            if (selects[i].value.length == 0) {
                checker = false;
                return;
            }
        }
    }
}

const messages = [
    'Thank you for submitting. Someone will get back to you shortly',
    'Form Cleared!',
    'Error! A field is left blank.',
    'Success, you bought the package!'
]

sum_button.addEventListener('click', () => submitFunction())
reset_button.addEventListener('click', () => resetFunction())
proceed_pawsome.addEventListener('click', () => buyPawsomeFunction())
proceed_pawfection.addEventListener('click', () => buyPawfectionFunction())

function submitFunction() {
    checker = true;
    checkForm();
    createNotification(toasts, messages[0]);
}

function resetFunction() {
    checker = true;
    createNotification(toasts, messages[1]);
}

function buyPawsomeFunction() {
    checker = true;
    modalForms(pawsomeForm);
    createNotification(toast1, messages[3]);
}

function buyPawfectionFunction() {
    checker = true;
    modalForms(pawfectionForm);
    createNotification(toast2, messages[3]);
}

function createNotification(toasts=null , message = null) {

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