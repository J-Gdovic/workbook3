"use strict";

///exercise 1




function convertFtoC(farenheitTemperature) {
    const celsiusTemperature = (farenheitTemperature -32)*(5/9);
    return celsiusTemperature
    
}

const currentTemp =92;
const celsiusTemp = convertFtoC(currentTemp);
console.log(celsiusTemp.toFixed(2));