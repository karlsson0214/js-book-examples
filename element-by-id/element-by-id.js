// Hämta element i html-dokumentet som detta skript körs på.
// Mer precist hämta elementet med angivet id.
let entry_div = document.getElementById("js-entry");

// number kan bli 1, 2, 3, 4, 5 eller 6
let number = Math.floor(Math.random() * 6 + 1);
entry_div.innerHTML += "<p>Tärningen visar:</p>";
entry_div.innerHTML += "<p>" + number + "</p>";
entry_div.innerHTML += "<p>Ladda om sidan för att kasta tärningen</p>";