"use strict";

function displayMailingLable(myName, myAddress, myCity, myState, myZip) {
  console.log(myName, myAddress, myCity, myState, myZip);
}
displayMailingLable("Javier Gdovic", "5615 Phillips ave. apt.#4", "Pittsburgh", "Pa", "15217");

/////

function addNumbers(x, y) {
  console.log(x + y);
}
addNumbers(5, 7);
addNumbers(3, 3);
//////

function displayReceipt(amountPaid, totalDue) {
  let changeDue = amountPaid - totalDue;
  console.log(changeDue.toFixed(2) + " : Change Due");
}
displayReceipt(40.00, 35.76);
