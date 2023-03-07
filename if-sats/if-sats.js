let entry_div = document.getElementById("js-entry");

let number_1 = Math.floor(Math.random() * 6 + 1);
let number_2 = Math.floor(Math.random() * 6 + 1);
entry_div.innerHTML += "<p>Tärningarna visar:</p>";
entry_div.innerHTML += "<p>" + number_1 + " och " + number_2 + "</p>";

if (number_1 === number_2)
{
    entry_div.innerHTML += "<p>Tärningarna är lika.</p>";
}
if (number_1 === number_2 + 1 || number_1 + 1 === number_2)
{
    entry_div.innerHTML += "<p>Stege.</p>";
}
if (number_1 === 6 && number_2 === 6)
{
    entry_div.innerHTML += "<p>Båda visar 6.</p>";
}

entry_div.innerHTML += "<h2>Vinst?</h2>";
if (number_1 === 6 && number_2 === 6)
{
    entry_div.innerHTML += "<p>Högsta vinst.</p>";
}
else if (number_1 === number_2)
{
    entry_div.innerHTML += "<p>Liten vinst.</p>";
}
else if (number_1 === number_2 + 1 || number_1 + 1 === number_2)
{
    entry_div.innerHTML += "<p>Stegvinst.</p>";
}
else
{
    entry_div.innerHTML += "<p>Förlust</p>";
}
entry_div.innerHTML += "<h2>Spela igen?</h2>";
entry_div.innerHTML += "<p>Ladda om sidan för att kasta tärningen</p>";