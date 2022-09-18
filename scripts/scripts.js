document.getElementById(
    "currentdate"
).textContent = new Date().toLocaleDateString('en-US');

document.getElementById(
    "currenttime"
).textContent = new Date('GMT-06:00').toLocaleTimeString('en-US');