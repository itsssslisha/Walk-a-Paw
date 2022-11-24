const button = document.getElementById('button')
const toasts = document.getElementById('toasts')

const messages = [
    'message 1',
    'message 2',
    'message 3',
    'message 4',
]

button.addEventListener('click', ()=> createNotification())
function createNotification () {
    console.log("test")
    const notif = document.createElement('div')
    notif.classList.add('toast')

    notif.innerText = getRandomMessage()
    
    toasts.appendChild(notif)

    setTimeout(()=>{
        notif.remove()
    }, 3000)
}

function getRandomMessage () {
    return messages[Math.floor.random() * messages.length]
}