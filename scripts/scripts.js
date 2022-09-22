let year = document.querySelector("#year");

year.textContent = new Date().getFullYear();

let date = document.querySelector("#currentdate");

date.textContent = new Date();

let currentDate = new Date();
let time = currentDate.getHours()
document.querySelector("#currenttime");

time.textContent = new Date().toLocaleTimeString();