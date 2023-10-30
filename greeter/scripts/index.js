"use strict";
//get variables
let nameTextBox = document.getElementById("nameTextBox");

let greetButton = document.getElementById("greetButton");
let messageParagraph = document.getElementById("messageParagraph");

//make function to handle evenets
function greetByName() {
  let name = nameTextBox.value;
  let message = "Hello " + name;
  messageParagraph.innerText = message;
}

//wire up
greetButton.onclick = greetByName;
