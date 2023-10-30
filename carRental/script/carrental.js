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
//totalseperated
let carRentalCostParagraph = document.getElementById("carRentalCostParagraph")
let optionsCostParagraph = document.getElementById("optionsCostParagraph")
let under25SurchargeParagraph = document.getElementById("under25SurchargeParagraph")
let totalDueParagraph = document.getElementById("totalDueParagraph")

//make function for event
function estimateTotalCost() {
    let days = Number(numberOfDaysTextbox.value)
    let costPerDay = 29.99
    let carRentalTotal = days*costPerDay
    let optionsCost = 0;
 let under25cost = 0;

    
  // add if statement for tolltag + total cost
if(tollTagCheckbox.checked){
  optionsCost =   (3.95*days)
}


//add if statement for gps + total cost
if(gpsCheckbox.checked){
  optionsCost =  (2.95*days)
}

//add if statement for roadsideassistance + total cost
if(roadSideAssistanceCheckbox.checked){
optionsCost = (2.95*days)
}

//add if statement for under 25
if(yesRadio.checked){
  under25cost = ((.3)*carRentalTotal)
}
let totalDueCost = (carRentalTotal + optionsCost + under25cost);
//display at bottom
carRentalCostParagraph.innerText = carRentalTotal;
optionsCostParagraph.innerText = optionsCost;
under25SurchargeParagraph.innerText = under25cost;
totalDueParagraph.innerText = totalDueCost;

}
// alert
//alert("Car rental: $" + carRentalTotal.toFixed(2))


//wire up
estimatedCostButton.onclick = estimateTotalCost
