"use strict";

let entry_div = document.getElementById("js-entry");

entry_div.innerHTML += "<p>Tärningarna visar:</p>";

let i = 0;
while (i < 5)
{
    let number = Math.floor(Math.random() * 6 + 1);
    entry_div.innerHTML += "<p>" + number + "</p>";
    i = i + 1;
}

