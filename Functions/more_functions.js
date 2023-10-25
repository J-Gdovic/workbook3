"use strict";

/////#1


function displayMailingLable(myName, myAddress, myCity, myState, myZip) {
  console.log(myName);
  console.log(myAddress);
  console.log(myCity + ",",myState,myZip)
}
displayMailingLable("Javier Gdovic", "5615 Phillips Ave. apt.#4", "Pittsburgh", "Pa", "15217");
console.log()
displayMailingLable("Kenny Pickett", "412 Heinz Ave.", "Pittsburgh", "Pa", "4128214");
console.log()

/////#2

function addNumbers(x, y) {
  console.log(x + y);
}
addNumbers(5, 7);
console.log()
addNumbers(3, 3);
console.log()


//////#3

function displayReceipt(amountPaid, totalDue) {
  let changeDue = amountPaid - totalDue;
  console.log(changeDue.toFixed(2) + " : Change Due");
}
displayReceipt(40.00, 35.76);
console.log()
displayReceipt(50.00,50.00);
console.log()
displayReceipt(45.76,60.00)
