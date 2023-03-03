

let input_element = document.getElementById("js-input");
let text = input_element.value;
let output_element = document.getElementById("js-output");
output_element.innerText = "Hej " + text + "!";

input_element.addEventListener('keypress', function (e) {
    console.log("tryckt " + e.key);
    if (e.key === 'Enter') {
      let user_name = input_element.text;
      let output_element = document.getElementById("js-output");
      output_element.text = "Hej " + user_name +"!";

    }
});

