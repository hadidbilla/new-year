const daysId = document.getElementById("day");
const hourId = document.getElementById("hour");
const minsId = document.getElementById("mins");
const secondId = document.getElementById("seconds");
const comingNewYear = new Date("january 1, 2022");
function getTime() {
  const currentDate = new Date();
  let difference = comingNewYear.getTime() - currentDate.getTime();
  let totalSecond = difference / 1000;
  let day = Math.floor(totalSecond / 3600 / 24);
  let hour = Math.floor((totalSecond / 3600) % 24);
  let minute = Math.floor(totalSecond / 60) % 60;
  let second = Math.floor(totalSecond % 60);
  daysId.innerHTML = setFormate(day);
  hourId.innerHTML = setFormate(hour);
  minsId.innerHTML = setFormate(minute);
  secondId.innerHTML = setFormate(second);
}
const setFormate = (time) => {
  return time < 10 ? `0${time}` : time;
};
getTime();
setInterval(getTime, 1000);
