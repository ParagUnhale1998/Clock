// set interval for every second code run infinity

    // setInterval(() => {

// first declare the variables for change the style of ratation

    const hourHand = document.getElementById('hour');
    const minuteHand = document.getElementById('minute');
    const secondHand = document.getElementById('second');

// first get the values of real time

    const Time = new Date();
    const hours = Time.getHours();
    const minutes = Time.getMinutes();
    const seconds = Time.getSeconds();
 
// calculate the values for how much degree all covers 
// It does this by multiplying the number of hours by 30 (since there are 12 hours on a clock and 360 degrees in a circle, 360 / 12 = 30) and adding half of the number of minutes (since each hour is divided into 60 minutes and the hour hand moves between hour marks as minutes pass).
    const hourRotation = ( hours * 30 ) + (minutes / 2);
// const hourRotation = (hours % 12) * 30 + (minutes / 2);
// It does this by multiplying the number of minutes by 6 (since there are 60 minutes on a clock and 360 degrees in a circle, 360 / 60 = 6).    
    const minuteRotation = minutes * 6;
// It does this by multiplying the number of seconds by 6 (since there are 60 seconds on a clock and 360 degrees in a circle, 360 / 60 = 6).    
    const secondRotation = seconds * 6;

// and finally assin the rotation property to all elemets 

    hourHand.style.transform = `rotate(${hourRotation}deg)`;
    minuteHand.style.transform = `rotate(${minuteRotation}deg)`;
    secondHand.style.transform = `rotate(${secondRotation}deg)`;
    // }, 1000);



// Second Methods With Simple Logic 


function updateClock(){
    
    const Time = new Date();
    const hours = Time.getHours();
    const minutes = Time.getMinutes();
    const seconds = Time.getSeconds();

    const hourDegRotation = (hours / 12 ) * 360 ;
    const minuteDegRotation = (minutes / 60 ) * 360 ;
    const secondDegRotation = (seconds / 60 ) * 360 ;
    
    hourHand.style.transform = `rotate(${hourDegRotation}deg)`;
    minuteHand.style.transform = `rotate(${minuteDegRotation}deg)`;
    secondHand.style.transform = `rotate(${secondDegRotation}deg)`;
}

setInterval(updateClock,1000)