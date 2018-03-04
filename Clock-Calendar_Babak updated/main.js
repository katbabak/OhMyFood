'use strict';

document.addEventListener('DOMContentLoaded', makeItWork, false);

function makeItWork() {
  let dateFormat;
  let currentState = 'clock';
  let clockFormat = 'HH:MM'; 
  let container = document.querySelector('.clock-calendar');
      
    container.addEventListener ('contextmenu', function(event) {
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

    container.addEventListener ('click', function(event) {
        if (currentState === 'clock') {
          clockFormat = clockFormat === 'HH:MM' ? 'HH:MM:SS' : 'HH:MM';
        } else if (currentState === 'calendar') {
          dateFormat = dateFormat === 'DD.MM.YYYY'? 'MM/DD/YY': 'DD.MM.YYYY';
        }

        updateClockCalendarValue();
      });

  function updateClockCalendarValue() {
    let currentValue = getClockCalendarValue(currentState, clockFormat, dateFormat);
    if (currentValue !== container.innerHTML) {
       container.innerHTML = currentValue;
    }  
  }

  updateClockCalendarValue();

  setInterval(updateClockCalendarValue, 1000);
}