
//current day is displayed at the top of the calendar
function getCurrentTimestamp () {
    let now = new Date().toLocaleDateString('en-us', { weekday:"long", month:"long", day:"numeric"});

    return now;
}
var container = document.getElementById('currentDay');

var currentDay = document.createElement('h3');
currentDay.innerHTML = getCurrentTimestamp();

container.appendChild(currentDay);

//time blocks for standard business hours
function addEvent(time){
//
 var eventTitle = window.prompt("Add Event Title");
 var event = document.createElement("h3");

 event.innerHTML = eventTitle;
 $('#' + time.toString()).append(event);
}
    
//color code for time blocks
var hours = new Date;
console.log 
currentHour = hours.getHours();
console.log(currentHour);

//Convert from military time to normal time
currentHour -= 12;

$('.colorcode').each(function(){
    var val = parseInt($(this).prop('id'));
    console.log(val)
    if(val > currentHour && val < currentHour+6){
        $(this).css('background-color','Grey');
    }else if(val < currentHour && val > currentHour-6){
        $(this).css('background-color','Purple');
    }else if(val === currentHour){
        $(this).css('background-color','Orange');
    }
});