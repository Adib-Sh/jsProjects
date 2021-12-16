const daysEl = document.getElementById('days')
const hoursEl = document.getElementById('hours')
const minutesEl = document.getElementById('minutes')
const secondsEl = document.getElementById('seconds')

const newYears = "1 jan 2022"

function countdown() {
    const newYearsDate = new Date(newYears)
    const currentDate  = new Date()
    

    const totalSeconds = new Date(newYearsDate - currentDate) / 1000;
    
    const days = Math.floor(totalSeconds / (3600 * 24));
    const hours = Math.floor(totalSeconds / 3600) % 24;
    const minutes = Math.floor(totalSeconds / 60) % 60;
    const seconds = Math.floor(totalSeconds%60)

    daysEl.innerText = timeFormat(days)
    hoursEl.innerText = timeFormat(hours)
    minutesEl.innerText = timeFormat(minutes)
    secondsEl.innerText = timeFormat(seconds)

}

function timeFormat (time) {
    return time < 10  ? `0${time}` : time;
}
setInterval(countdown, 1000)

document.getElementById("days").innerText = countdown()
