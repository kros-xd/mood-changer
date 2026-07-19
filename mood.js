// Kris Lee | July 18, 2026
"use strict";

// Colors
const WHITE = "#F7F7F7";
const BLACK = "#001519";
const YELLOW = "#ffe563";
const BLUE = "#100075";
const RED = "#FF2200";
const PURPLE = "#2b0053";

// Mood Data
const MOODS = {
    happy: {
        bg: YELLOW,
        text: BLACK,
        name: "HAPPY"
    },
    sad: {
        bg: BLUE,
        text: WHITE,
        name: "SAD"
    },
    angry: {
        bg: RED,
        text: BLACK,
        name: "ANGRY"
    },
    sleepy: {
        bg: PURPLE,
        text: WHITE,
        name: "SLEEPY"
    }
}

function setMood(moodName) {
    let mood = MOODS[moodName];
    document.body.style.backgroundColor = mood.bg;
    document.body.style.color = mood.text;
    let moodTypeContainer = document.getElementById("quote");
    moodTypeContainer.textContent = mood.name;
}

const btnContainer = document.getElementById("btn-container");

// Change colors on click
btnContainer.addEventListener("click", (event) => {
    let moodName = event.target.textContent.trim().toLowerCase();
    setMood(moodName);
});

// Preview the mood's colors in the button on hover
btnContainer.addEventListener("mouseover", (event) => {
    let moodName = event.target.textContent.trim().toLowerCase();
    let mood = MOODS[moodName];
    event.target.style.backgroundColor = mood.bg; 
    event.target.style.color = mood.text;
});

btnContainer.addEventListener("mouseout", (event) => {
    event.target.style.backgroundColor = "";
    event.target.style.color = "";
});