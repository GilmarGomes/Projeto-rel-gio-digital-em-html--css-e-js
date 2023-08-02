function updateClock() {
  let hoursElement = document.querySelector("#hours");
  let minutesElement = document.querySelector("#minutes");
  let secondsElements = document.querySelector("#seconds");

  const now = new Date();
  const hours = now.getHours().toString().padStart(2, "0");
  const minutes = now.getMinutes().toString().padStart(2, "0");
  const seconds = now.getSeconds().toString().padStart(2, "0");

  hoursElement.textContent = hours;
  minutesElement.textContent = minutes;
  secondsElements.textContent = seconds;
}
setInterval(updateClock, 1000);
