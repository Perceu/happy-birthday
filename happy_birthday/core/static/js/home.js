var countDownDate = new Date("mar 18, 2022 08:30:15").getTime();

// var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the result in the element with id="demo"
  var html = '';

  html += '<div class="info"> <p>'+days.toString().padStart(2, '0')+'<p><p class="label">Dias</p></div>';
  html += '<div class="info"> <p>'+hours.toString().padStart(2, '0')+'<p><p class="label">Horas</p></div>';
  html += '<div class="info"> <p>'+minutes.toString().padStart(2, '0')+'<p><p class="label">Minutos</p></div>';
  html += '<div class="info"> <p>'+seconds.toString().padStart(2, '0')+'<p><p class="label">Segundos</p></div>';

  document.getElementById("counter").innerHTML = html

  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "EXPIRED";
  }
// }, 1000);

var update = function() {
  requestAnimationFrame(update);
};
requestAnimationFrame(update);