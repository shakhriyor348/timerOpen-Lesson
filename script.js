
const deadline = '2021-04-05T12:30:00'



function getTimeRemaining(endtime) {
    const t = Date.parse(endtime) - Date.parse(new Date()),
        days = Math.floor(t / (1000 * 60 * 60 * 24)),
        hours = Math.floor((t / (1000 * 60 * 60) % 24)),
        minutes = Math.floor((t / 1000 / 60) % 60),
        seconds = Math.floor((t / 1000) % 60)


    return {
        'total': t,
        days,
        hours,
        minutes,
        seconds
    }




}

function setClock(selector, endtime) {
    const timer = document.querySelector(selector),
        days = timer.querySelector('.days'),
        hours = timer.querySelector('.hours'),
        minutes = timer.querySelector('.minutes'),
        seconds = timer.querySelector('.seconds')
        timeInterval = setInterval(updateClock, 1000)

        updateClock()

    function updateClock() {
        const t = getTimeRemaining(endtime)


        days.innerHTML = t.days
        hours.innerHTML = t.hours
        minutes.innerHTML = t.minutes
        seconds.innerHTML = t.seconds


       if(t.total <= 0){
           clearInterval(timeInterval)
       }
    }
}

setClock('.timer', deadline)