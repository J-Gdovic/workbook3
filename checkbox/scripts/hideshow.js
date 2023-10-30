"use strict";
//get elements in variables
let clickH3 = document.getElementById("clickH3");
let detailsPagrpaph = document.getElementById("detailsPagrpaph");


//write function to handle events
function toggleParagraph() {

    let display = detailsPagrpaph.style.display
    
    if (display == "none"){
        detailsPagrpaph.style.display = "block";
    }

    else{
        detailsPagrpaph.style.display = "none";
    }
} 


// connect the functions to the  events(wire up)
clickH3.onclick = toggleParagraph;

