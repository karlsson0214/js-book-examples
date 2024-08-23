"use strict";

// en map har unika nycklar (eng. keys)

let ordlista = new Map();
// lägg till:
// par av nyckel (eng. key) och värde (eng. value)
ordlista.set("hej", "hello");
ordlista.set("hej då", "goodbye");
ordlista.set("ja", "yes");
ordlista.set("nej", "no");
ordlista.set("katt", "cat");
ordlista.set("hund", "dog");


let antal_rätt = 0;

// hämta alla nycklar
let glosor = ordlista.keys();
for (let ord of glosor)
{
    let svar = prompt("översätt till engelska: " + ord);
    if (svar === ordlista.get(ord))
    {
        alert("Rätt!");
        antal_rätt = antal_rätt + 1;
    }
    else
    {
        alert("Fel! Rätt svar är: " + ordlista.get(ord));
    }
}

alert("Du fick " + antal_rätt + " rätt av " + ordlista.size + " möjliga.");

