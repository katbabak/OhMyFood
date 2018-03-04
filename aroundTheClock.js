'use strict';

document.addEventListener('DOMContentLoaded', makeItWork, false);
function makeItWork () {
    let currentState = 'clock',
        clockFormat = 'HH:MM',
        currentValue,
        dateFormat,
        container;
        
    
      container = document.querySelector('.clock-calendar');
     let body = document.body;  
 
    container.addEventListener ('contextmenu', function (event) {
       event.preventDefault();
        
        if (currentState === 'clock') {
        	currentState = 'calendar';
          dateFormat = 'DD.MM.YYYY';         
        } else if (currentState = 'calendar'){
        	currentState = 'clock';
          clockFormat = 'HH:MM';
        }

        
        updateClockCalendarValue();
    });

    container.addEventListener ('click', function (event) {
        if (currentState === 'clock') {
            clockFormat = clockFormat === 'HH:MM' ? 'HH:MM:SS' : 'HH:MM';
        } else if (currentState === 'calendar') {
            dateFormat = dateFormat === 'DD.MM.YYYY'? 'MM/DD/YY': 'DD.MM.YYYY';
        }

        updateClockCalendarValue();
    });
    container.addEventListener("mouseover", function(event){
     container.style.background = "#191970";
   });
     container.addEventListener("mouseleave", function(event){
     container.style.background = "";
   });
    function updateClockCalendarValue () {
        currentValue = getClockCalendarValue(currentState, clockFormat, dateFormat);

        if (currentValue !== container.innerHTML) {
            container.innerHTML = currentValue;
        }    
    }

    updateClockCalendarValue();

    setInterval(updateClockCalendarValue, 1000);
}

   function getClockCalendarValue (currentState, clockFormat, dateFormat) {
	let result;
 
	if (currentState === 'clock') {
		result = getTime(clockFormat);
	} else if (currentState === 'calendar') {
		result = getDate(dateFormat);
	}
		
	return result;
}

function getTime (clockFormat) {
	let result,
	    hours,
	    secs,
	    minutes;
	let date = new Date();	
       hours = date.getHours();
       minutes = date.getMinutes();
       secs = date.getSeconds();
       hours = hours<10? "0"+ hours: hours;
       minutes = minutes<10? "0"+minutes: minutes;
       secs = secs<10? "0"+secs: secs;
 

  // let span = document.createElement('span');
  //    span.innerHTML = ':';
  //   span.className = 'colon';
  // span.style.animation = 'colon  1s linear infinite';
  // let colon = span.innerHTML;
      //let colon = getColonAnimation();

  let colon = ':';
    	if (clockFormat === 'HH:MM') {
		    result = hours + colon + minutes;
	    } else {
		   result = hours +colon + minutes + colon + secs;
	   };
	
	return result;
}
/*
function getColonAnimation(colon){
   let span = document.createElement('span');
    span.innerHTML = ':';
    span.className = 'colon';
    span.style.animation = 'colon  1s linear infinite';
   colon = span.innerHTML;
  return colon;
}
*/
function getDate (dateFormat) {
	let result,
        day,
        month,
        dayNum,
        year;

	let date = new Date();

    dayNum = date.getDate();
    month = date.getMonth()+1;
    year  = date.getFullYear();
  /*  
// First variant of solving  
    dayNum = dayNum<10? "0"+ dayNum: dayNum;
    month = month<10? "0"+ month: month;

   if(dateFormat === 'DD.MM.YYYY'){
      result = dayNum + "." + month + "." + year;
   }else if(dateFormat === 'MM/DD/YY'){
      result = month + '/'+ dayNum + '/' + year;
 }
*/
// The second variant of presenting the time using 'toLocaleDateString'
let date_UA = date.toLocaleDateString('UA', {
    day: 'numeric',
    month: 'numeric',
    year: 'numeric'
});
let date_EU = date.toLocaleDateString('en-EU', {
    day: '2-digit',
    month: '2-digit',
    year: '2-digit'
});

  if(dateFormat === 'DD.MM.YYYY'){
      result = date_UA;
   }else if(dateFormat === 'MM/DD/YY'){
      result = date_EU;
 }

  return result;

}