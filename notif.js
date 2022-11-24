const sum_button = document.getElementById('submit')
const reset_button = document.getElementById('reset')
const toasts = document.getElementById('toasts')

const messages = [
    'Thank you for submitting. Someone will get back to you shortly',
    'Form Cleared!'
]

sum_button.addEventListener('click', ()=> createNotification(messages[0]))
reset_button.addEventListener('click', ()=> createNotification(messages[1]))

function createNotification (message = null) {
    // if (checker == false){
    //    return; 
    // }
    const notif = document.createElement('div')
    notif.classList.add('toast')

    notif.innerText = message

    toasts.appendChild(notif)

    setTimeout(()=>{
        notif.remove()
    }, 3000)
}