'use strict';

function getClockCalendarValue(currentState, clockFormat, dateFormat) {
	let result;
 	if (currentState === 'clock') {
		result = getTime(clockFormat);
	} else if (currentState === 'calendar') {
		result = getDate(dateFormat);
	}
		
	return result;
}

function getTime(clockFormat) {
	let date = new Date();	
  let hours = date.getHours();
      hours = hours < 10 ? '0'+ hours: hours;
  let minutes = date.getMinutes();
      minutes = minutes < 10 ? '0' + minutes: minutes;
  let seconds = date.getSeconds();
      seconds = seconds < 10 ? '0' + seconds: seconds;
  
  let colon = ':';
  let result;
  if (clockFormat === 'HH:MM') {
		result = hours + colon + minutes;
  } else {
		result = hours +colon + minutes + colon + secs;
  }
	
	return result;
}

function getDate(dateFormat) {
	let date = new Date();
  let dayNum = date.getDate();
  let month = date.getMonth()+1;
  let year  = date.getFullYear();
  let date_UA = date.toLocaleDateString('uk', {
     day: '2-digit',
     month: '2-digit',
     year: 'numeric'
  });
  let date_EU = date.toLocaleDateString('en-EU', {
     day: '2-digit',
     month: '2-digit',
     year: '2-digit'
  });

  let result;
  if(dateFormat === 'DD.MM.YYYY'){
    result = date_UA;
  } else if(dateFormat === 'MM/DD/YY'){
    result = date_EU;
  }

  return result;

}