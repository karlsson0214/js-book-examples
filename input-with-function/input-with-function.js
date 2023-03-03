let input_element = document.getElementById("js-input");

// https://developer.mozilla.org/en-US/docs/Web/API/Element/keydown_event
input_element.addEventListener('keydown', function (e) {
    console.log("tryckt " + e.key);
    if (e.key === 'Enter') {
      let user_name = input_element.value;
      let output_element = document.getElementById("js-output");
      output_element.innerText = "Hej " + user_name + "!";

    }
});

