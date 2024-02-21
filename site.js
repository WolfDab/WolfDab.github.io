const hours = new Date().getHours(); // get the current hour

const isMorning = hours >= 4 && hours < 12; // is it morning?
const isAfternoon = hours >= 12 && hours < 17; // is it afternoon?
const isEvening = hours >= 17 || hours < 4; // is it evening?

const time = document.querySelector("#time");

if (isMorning) {
    time.textContent = "Good morning!";
} else if (isAfternoon) {
    time.textContent = "Good afternoon!";
} else {
    time.textContent = "Good evening!";
}

// Add a secret message to localStorage
localStorage.setItem("It's a secret to everybody", "The cake is a lie!"); // The key is "It's a secret to everybody" and the value is "The cake is a lie!"
