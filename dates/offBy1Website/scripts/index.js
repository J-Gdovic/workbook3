"use strict";
//input
let userInput = document.getElementById("userInput");
//button
let displayButton = document.getElementById("displayButton");
//paragraph
let displayDate = document.getElementById("displayDate");


function dateMessage() {
  let d = new Date(userInput.value);
  displayDate.innerText = d.toString();

}
function init(){
  displayButton.onclick = dateMessage;
}

window.onload = init;

