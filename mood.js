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

let setMood = (moodName) => {
    let mood = MOODS[moodName];
    document.body.style.backgroundColor = mood.bg;
    document.body.style.color = mood.text;
    let moodTypeContainer = document.getElementById("mood-type");
    moodTypeContainer.textContent = mood.name;
    moodTypeContainer.style = getComputedStyle("#quote");
}

const btnContainer = document.getElementById("btn-container");
btnContainer.addEventListener("click", (event) => {
    let moodName = event.target.textContent.trim().toLowerCase();
    setMood(moodName);
});