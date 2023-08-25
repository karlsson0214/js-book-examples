"use strict";

let button = document.getElementById("js-button");
let output = document.getElementById("js-output");

button.addEventListener('click', rollDice);

function rollDice(e)
{
    console.log("tryck info: " + e);
    let number = Math.floor(Math.random() * 6 + 1);
    output.innerHTML = number;
}