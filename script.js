setInterval(setClock, 1000);

const hourHand = document.querySelector('[data-hour-hand]');
const minuteHand = document.querySelector('[data-minute-hand]');
const secondsHand = document.querySelector('[data-seconds-hand]');

function setClock(){
    const currentDate = new Date();
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