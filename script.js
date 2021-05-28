setInterval(setClock, 1000);

const hourHand = document.querySelector('[data-hour-hand]');
const minuteHand = document.querySelector('[data-minute-hand]');
const secondsHand = document.querySelector('[data-seconds-hand]');

function setClock(){
    const currentDate = new Date();
    let hours = currentDate.getHours();
    let minute = currentDate.getMinutes();
    let seconds = currentDate.getSeconds();
    let session = "AM";
    if (hours > 12){
        hours = hours - 12;
        session = "PM";
    } 
    hours = (hours < 10 ) ? "0" + hours : hours;
    minute = (minute < 10 ) ? "0" + minute : minute;
    seconds = (seconds < 10) ? "0" + seconds : seconds;

    document.getElementById("hourSpan").innerHTML = hours;
    document.getElementById("minSpan").innerHTML = minute;
    document.getElementById("secondSpan").innerHTML = seconds;
    document.getElementById("sessionSpan").innerHTML = session;

    const secondsRatio = currentDate.getSeconds()/60;
    const minutesRatio = (secondsRatio + currentDate.getMinutes())/60
    const hoursRatio = (minutesRatio + currentDate.getHours()) /12;
    //alert(currentDate+ '<--------->' +secondsRatio +'<------------->'+ minutesRatio +'<------>'+hoursRatio);    
    setRatio(secondsHand, secondsRatio);
    setRatio(minuteHand, minutesRatio);
    setRatio(hourHand, hoursRatio);
}

function setRatio(element, ratio){
    element.style.setProperty('--rotate', ratio * 360);
}
setClock()