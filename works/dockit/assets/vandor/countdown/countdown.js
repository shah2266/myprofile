// Set the date we're counting down to
var countDownDate = new Date();
// add a day
countDownDate.setDate(countDownDate.getDate() + 1);
// Update the count down every 1 second
var x = setInterval(function() {

    // Get todays date and time
    var now = new Date().getTime();
    
    // Find the distance between now an the count down date
    var distance = countDownDate - now;
    
    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
    if(days>0){
        hours = hours + (days*24);
        days = 0;
    }
    days = zeroPad(days,2);
    hours = zeroPad(hours,2);
    minutes = zeroPad(minutes,2);
    seconds = zeroPad(seconds,2);

    days = days.split('');
    hours = hours.split('');
    minutes = minutes.split('');
    seconds = seconds.split('');
    // Output the result in an element with id="demo"
    jQuery('.days_0').html(days[0]);
    jQuery('.days_1').html(days[1]);
    jQuery('.hours_0').html(hours[0]);
    jQuery('.hours_1').html(hours[1]);
    jQuery('.minutes_0').html(minutes[0]);
    jQuery('.minutes_1').html(minutes[1]);
    jQuery('.seconds_0').html(seconds[0]);
    jQuery('.seconds_1').html(seconds[1]);
    // If the count down is over, write some text 
    if (distance < 0) {
        clearInterval(x);
        document.getElementById("demo").innerHTML = "EXPIRED";
    }
}, 1000);

function zeroPad(num, places) {
  var zero = places - num.toString().length + 1;
  return Array(+(zero > 0 && zero)).join("0") + num;
}