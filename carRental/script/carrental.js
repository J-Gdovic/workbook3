"use strict";
// get element variables
let pickpDateTextbox = document.getElementById("pickpDateTextbox");
let numberOfDaysTextbox = document.getElementById("numberOfDaysTextbox");
//option id elements
let tollTagCheckbox = document.getElementById("tollTagCheckbox");
let gpsCheckbox = document.getElementById("gpsCheckbox");
let roadSideAssistanceCheckbox = document.getElementById("roadSideAssistanceCheckbox");
//under 25
let noRadio = document.getElementById("noRadio");
let yesRadio = document.getElementById("yesRadio");
//button
let estimatedCostButton = document.getElementById("estimatedCostButton")

//make function for event
function estimateTotalCost() {
    let days = Number(numberOfDaysTextbox.value)
    let costPerDay = 29.99
    let carRentalTotal = days*costPerDay
    
  // add if statement for tolltag + total cost
if(tollTagCheckbox.checked){
  carRentalTotal = carRentalTotal + (3.95*days)
}


//add if statement for gps + total cost
if(gpsCheckbox.checked){
  carRentalTotal = carRentalTotal + (2.95*days)
}

//add if statement for roadsideassistance + total cost
if(roadSideAssistanceCheckbox.checked){
carRentalTotal = carRentalTotal + (2.95*days)
}

//add if statement for under 25
if(yesRadio.checked){
  carRentalTotal = carRentalTotal + ((3/100)*carRentalTotal)
}

// alert
alert("Car rental: $" + carRentalTotal.toFixed(2))

}
//wire up
estimatedCostButton.onclick = estimateTotalCost
