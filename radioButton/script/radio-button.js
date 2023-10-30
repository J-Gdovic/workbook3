"use strict";
// get html elements
const autoRadio = document.getElementById("autoRadio");
const homeRadio = document.getElementById("homeRadio");
const lifeRadio = document.getElementById("lifeRadio");
const saveButton = document.getElementById("saveButton");

//function to handle the event
function save() {
  console.log("Auto: " + autoRadio.checked);
  console.log("Home: " + homeRadio.checked);
  console.log("Life: " + lifeRadio.checked);
}

//connect function to events(wire-up)
saveButton.onclick = save;
