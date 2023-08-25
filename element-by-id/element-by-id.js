"use strict";

/* 
Hämta element i html-dokumentet som detta skript körs på.
Mer precist hämta elementet med angivet id.

Mer om document.getElementById()
https://developer.mozilla.org/en-US/docs/Web/API/Document/getElementById
*/

let entry_div = document.getElementById("js-entry");

/* 
number kan bli 1, 2, 3, 4, 5 eller 6
Math.random() ger slumptal som är 0.0 till nästan 1.0
Mer om Math.radom()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random

Math.floor(3.14) avrundar alltid ner till närmast mindre heltal.
Mer om Math.floor()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/floor
*/ 
let number = Math.floor(Math.random() * 6 + 1);
entry_div.innerHTML += "<p>Tärningen visar:</p>";
entry_div.innerHTML += "<p>" + number + "</p>";
entry_div.innerHTML += "<p>Ladda om sidan för att kasta tärningen</p>";