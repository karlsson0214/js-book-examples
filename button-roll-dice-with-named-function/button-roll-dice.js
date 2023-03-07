let button = document.getElementById("js-button");
let output = document.getElementById("js-output");

button.addEventListener('click', rollDice(e));

function rollDice(e)
{
    console.log("tryckt " + e.key);
    let number = Math.floor(Math.random() * 6 + 1);
    output.innerHTML = number;
}