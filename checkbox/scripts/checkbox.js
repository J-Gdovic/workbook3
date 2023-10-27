"use strict";
// get html elements into variables
const activeCheckbox = document.getElementById ("activeCheckbox");
const displayButton = document.getElementById("displayButton");


//write functions that will handle (be called) when events on the page occur (event handlers)
function display(){
    // alert is the action in this function/ .checked shows true or false of the alert function
alert(activeCheckbox.checked);
}

// (this is the connection to the button) displays the function "display" - dont use ()
displayButton.onclick = display;