import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";

import Notiflix from 'notiflix';

const startBtn = document.querySelector('[data-start]');
const daysEl = document.querySelector('[data-days]');
const hoursEl = document.querySelector('[data-hours]');
const minutesEl = document.querySelector('[data-minutes]');
const secondsEl = document.querySelector('[data-seconds]');

let selectedDate;

const options = {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose(selectedDates) {

        if (selectedDates[0] < options.defaultDate) {
            startBtn.setAttribute('disabled', 'disabled');
            Notiflix.Notify.warning('Please choose a date in the future');
        } else {
            startBtn.removeAttribute('disabled');
        }
        console.log(selectedDates[0]);
        selectedDate = selectedDates[0].getTime();

    },
};

flatpickr("#datetime-picker", options);

startBtn.addEventListener('click', onClick);

function onClick(evt) {
    const idInterval = setInterval(() => {
        startBtn.setAttribute('disabled', 'disabled');
        const deltaTime = selectedDate - Date.now();
        const deltaTimeObj = convertMs(deltaTime);
        daysEl.textContent = deltaTimeObj.days;
        hoursEl.textContent = deltaTimeObj.hours;
        minutesEl.textContent = deltaTimeObj.minutes;
        secondsEl.textContent = deltaTimeObj.seconds;
        // console.log(deltaTime)
        if (deltaTime < 1000) {
            clearInterval(idInterval);
        }
    }, 1000);
}

function addLeadingZero(value) {
    return String(value).padStart(2, '0');
}

function convertMs(ms) {
    // Number of milliseconds per unit of time
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;

    // Remaining days
    const days = addLeadingZero(Math.floor(ms / day));
    // Remaining hours
    const hours = addLeadingZero(Math.floor((ms % day) / hour));
    // Remaining minutes
    const minutes = addLeadingZero(Math.floor(((ms % day) % hour) / minute));
    // Remaining seconds
    const seconds = addLeadingZero(Math.floor((((ms % day) % hour) % minute) / second));

    return { days, hours, minutes, seconds };
}
