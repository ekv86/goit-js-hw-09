const startBtn = document.querySelector('[data-start]');
const stopBtn = document.querySelector('[data-stop]');

startBtn.addEventListener('click', onStart);
stopBtn.addEventListener('click', onStop);

let timerId = 0;
function onStart(evt) {
    timerId = setInterval(() => {
        const changeColor = getRandomHexColor();
        document.body.style.backgroundColor = changeColor;
    }, 1000);

    if (onStart) {
        startBtn.setAttribute('disabled', 'disabled');
    }
    
}

function onStop(evt) {
    clearInterval(timerId);
    if (onStop) {
        startBtn.removeAttribute('disabled');
    }
}

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
}
