const $days = document.querySelector("#days");
const $hours = document.querySelector("#hours");
const $minutes = document.querySelector("#minutes");
const $seconds = document.querySelector("#seconds");

(() => {
  $days.innerHTML = `08`;
  $hours.innerHTML = `12`;
  $minutes.innerHTML = `44`;
  $seconds.innerHTML = `25`;
  countdown(
    Number($days.innerHTML),
    Number($hours.innerHTML),
    Number($minutes.innerHTML),
    Number($seconds.innerHTML)
  );
})();

function countdown(days, hours, minutes, seconds) {
  setInterval(() => {
    seconds--;
    seconds >= 10
      ? ($seconds.innerHTML = `${seconds}`)
      : ($seconds.innerHTML = `0${seconds}`);
    minutes >= 10
      ? ($minutes.innerHTML = `${minutes}`)
      : ($minutes.innerHTML = `0${minutes}`);
    hours >= 10
      ? ($hours.innerHTML = `${hours}`)
      : ($hours.innerHTML = `0${hours}`);
    days >= 10 ? ($days.innerHTML = `${days}`) : ($days.innerHTML = `0${days}`);
    if (seconds === -1) {
      seconds = 59;
      $seconds.innerHTML = `${seconds}`;
      minutes--;
      $minutes.innerHTML = `${minutes}`;
    }
    if (minutes === -1) {
      minutes = 59;
      $minutes.innerHTML = `${minutes}`;
      hours--;
      $hours.innerHTML = `${hours}`;
    }
    if (hours === -1) {
      hours = 59;
      $hours.innerHTML = `${hours}`;
      days--;
      $days.innerHTML = `${days}`;
    }
  }, 1000);
}
