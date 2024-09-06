const yearDate = "21 August 2025";
const daysValue = document.getElementById("days");
const hoursValue = document.getElementById("hours");
const minutesValue = document.getElementById("minutes");
const secondsValue = document.getElementById("seconds");
function countDown() {
  const newYearsDate = new Date(yearDate);
  const currentDate = new Date();
  const totalSeconds = (newYearsDate - currentDate) / 1000;
  const days = Math.floor(totalSeconds / 3600 / 24);
  const hours = Math.floor(totalSeconds / 3600) % 24;
  const minutes = Math.floor(totalSeconds / 3600) % 60;
  const seconds = Math.floor(totalSeconds % 60);
  console.log(days, hours, minutes, seconds);

  daysValue.innerHTML = formatNum(days);
  hoursValue.innerHTML = formatNum(hours);
  minutesValue.innerHTML = formatNum(minutes);
  secondsValue.innerHTML = formatNum(seconds);
}

setInterval(countDown, 1000);

const formatNum = (time) => {
  return time < 10 ? `0${time}` : time;
};
