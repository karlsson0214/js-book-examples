"use strict";

let input_element = document.getElementById("js-input");

// https://developer.mozilla.org/en-US/docs/Web/API/Element/keydown_event'
// lyssnar på att knapp trycks ner
input_element.addEventListener('keydown', function (e) {
    // variabeln e innehåller information om keydown-händelsen
    // körs när tangent trycks ner
    console.log("tryckt " + e.key);
    if (e.key === 'Enter') {
      let user_name = input_element.value;
      let output_element = document.getElementById("js-output");
      output_element.innerText = "Hej " + user_name + "!";

    }
});

