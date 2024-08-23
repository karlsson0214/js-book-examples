"use strict";

let entry_div = document.getElementById("js-entry");

entry_div.innerHTML += "<p>Tärningarna visar (obs sorterade):</p>";
let numbers = []; // tom lista som ska innehålla flera tal

for (let i = 0; i < 10; i = i + 1)
{
    numbers.push(Math.floor(Math.random() * 6 + 1));
    
}

numbers.sort((a, b) => a - b); // sorterar talen i stigande ordning

for (let i = 0; i < numbers.length; i = i + 1)
{
    entry_div.innerHTML += "<p>" + numbers[i] + "</p>";
}


