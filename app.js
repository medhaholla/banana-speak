var btnTranslate = document.querySelector("#btn-translate");
var textInput = document.querySelector("#text-input");
// console.log(textInput);
var textOutput = document.querySelector("#text-output");

function clickHandler() {
  console.log("clicked");
  console.log("Hey there " + textInput.value);
  textOutput.innerText = "hjhhuf" + textInput.value;
}
btnTranslate.addEventListener("click", clickHandler);
