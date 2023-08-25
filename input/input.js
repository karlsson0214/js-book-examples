"use strict";

let input_element = document.getElementById("js-input");
// läs innehållet i angivet html-element
let text = input_element.value;
let output_element = document.getElementById("js-output");
output_element.innerText = "Hej " + text + "!";