const time = document.querySelector('.time')

function countdown() {
    const newYear = new Date(2025, 0, 1)
    const now = new Date()
    const difference = newYear - now

    const days = Math.floor(difference / 1000 / 60 / 60 / 24)
    const daysFormat = days < 10 ? `0${days}` : days

    const hours = Math.floor(
        (difference % (1000 * 60 * 60 * 24)) / 1000 / 60 / 60
    )
    const hoursFormat = hours < 10 ? `0${hours}` : hours

    const minutes = Math.floor((difference % (1000 * 60 * 60)) / 1000 / 60)
    const minutesFormat = minutes < 10 ? `0${minutes}` : minutes

    const seconds = Math.floor((difference % (1000 * 60)) / 1000)
    const secondsFormat = seconds < 10 ? `0${seconds}` : seconds

    time.innerHTML = `${daysFormat}:${hoursFormat}:${minutesFormat}:${secondsFormat}`
    if (difference > 0) {
        setTimeout(countdown, 1000)
    } else {
        time.innerHTML = 'Урааа!!!'
    }
}
countdown()
