function startTimer(duration, display){

  var timer = duration, hours, minutes, seconds;

  setInterval(() => {
    hours    = parseInt(timer/ 3600, 10)
    minutes = parseInt(timer / 60 % 60, 10);
    seconds = parseInt(timer % 60, 10);

    hours    = hours < 10 ? `0${hours}` : hours
    minutes = minutes < 10 ? `0${minutes}` : minutes;
    seconds = seconds < 10 ? `0${seconds}` : seconds;

    display.textContent = `${hours}:${minutes}:${seconds}`;

    if(--timer < 0){
      timer = duration;
    }
  }, 1000);
};

window.onload = () => {
  var duration = 60 * 60 * 4;
  var display = document.getElementById('timer')

  startTimer(duration, display)
}
