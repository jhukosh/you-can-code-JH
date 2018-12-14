function startTime() {
  var today = new Date();
  var heure = today.getHours(),
    min = today.getMinutes(),
    sec = today.getSeconds();
  min = (min < 10 ? "0" : "") + min;
  sec = (sec < 10 ? "0" : "") + sec;
  document.getElementById("hourupdate").innerHTML = heure + "h";
  document.getElementById("minute").innerHTML = min + "m";
  document.getElementById("seconde").innerHTML = sec + "s";
}
setInterval(startTime, 1000);
