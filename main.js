// Celsius to other scales
function celciusToFarenheit(degree){
    return degree * 9 / 5 + 32;
}

function celciusToKelvin(degree){
    return degree + 273.15; 
}

function celciusToRankine(degree){
    return (degree + 273.15) * (9 / 5);
}

function celciusToReaumur(degree){
    return degree * (4 / 5);
}

// Fahrenheit to other scales
function farenheitToCelcius(degree){
    return (5 / 9) * (degree - 32);
}

function farenheitToKelvin(degree){
    return (5 / 9) * (degree - 32) + 273.15;
}

function farenheitToRankine(degree){
    return degree + 459.67;
}

function farenheitToReaumur(degree){
    return (4 / 9) * (degree - 32);
}

// Kelvin to other scales
function kelvinToCelcius(degree){
    return degree - 273.15;
}

function kelvinToFarenheit(degree){
    return (9 / 5) * (degree - 273.15) + 32;
}

function kelvinToRankine(degree){
    return degree * 1.8;
}

function kelvinToReaumur(degree){
    return (4 / 5) * (degree - 273.15);
}

// Rankine to other scales
function rankineToCelcius(degree){
    return (5 / 9) * (degree - 491.67);
}

function rankineToFarenheit(degree){
    return degree - 459.67;
}

function rankineToKelvin(degree){
    return degree / 1.8;
}

function rankineToReaumur(degree){
    return (4 / 9) * (degree - 491.67);
}

// Reaumur to other scales
function reaumurToCelcius(degree){
    return degree * (5 / 4);
}

function reaumurToFarenheit(degree){
    return (9 / 4) * degree + 32;
}

function reaumurToKelvin(degree){
    return degree * (5 / 4) + 273.15;
}

function reaumurToRankine(degree){
    return (degree * (5 / 4) + 273.15) * (9 / 5);
}

function convertTemperature() {
    const degree = parseFloat(document.getElementById('degree').value);
    const fromDegree = document.getElementById('fromdegree').value.toUpperCase();
    const toDegree = document.getElementById('todegree').value.toUpperCase();
    
    let result;

    if (fromDegree === 'C' && toDegree === 'F') {
        result = celciusToFarenheit(degree);
    } else if (fromDegree === 'C' && toDegree === 'K') {
        result = celciusToKelvin(degree);
    } else if (fromDegree === 'C' && toDegree === 'R') {
        result = celciusToRankine(degree);
    } else if (fromDegree === 'C' && toDegree === 'RE') {
        result = celciusToReaumur(degree);
    } else if (fromDegree === 'F' && toDegree === 'C') {
        result = farenheitToCelcius(degree);
    } else if (fromDegree === 'F' && toDegree === 'K') {
        result = farenheitToKelvin(degree);
    } else if (fromDegree === 'F' && toDegree === 'R') {
        result = farenheitToRankine(degree);
    } else if (fromDegree === 'F' && toDegree === 'RE') {
        result = farenheitToReaumur(degree);
    } else if (fromDegree === 'K' && toDegree === 'C') {
        result = kelvinToCelcius(degree);
    } else if (fromDegree === 'K' && toDegree === 'F') {
        result = kelvinToFarenheit(degree);
    } else if (fromDegree === 'K' && toDegree === 'R') {
        result = kelvinToRankine(degree);
    } else if (fromDegree === 'K' && toDegree === 'RE') {
        result = kelvinToReaumur(degree);
    } else if (fromDegree === 'R' && toDegree === 'C') {
        result = rankineToCelcius(degree);
    } else if (fromDegree === 'R' && toDegree === 'F') {
        result = rankineToFarenheit(degree);
    } else if (fromDegree === 'R' && toDegree === 'K') {
        result = rankineToKelvin(degree);
    } else if (fromDegree === 'R' && toDegree === 'RE') {
        result = rankineToReaumur(degree);
    } else if (fromDegree === 'RE' && toDegree === 'C') {
        result = reaumurToCelcius(degree);
    } else if (fromDegree === 'RE' && toDegree === 'F') {
        result = reaumurToFarenheit(degree);
    } else if (fromDegree === 'RE' && toDegree === 'K') {
        result = reaumurToKelvin(degree);
    } else if (fromDegree === 'RE' && toDegree === 'R') {
        result = reaumurToRankine(degree);
    } else {
        console.log("Invalid conversion scale");
        return;
    }

    document.getElementById('resultTemperature').innerHTML = `${degree.toFixed(2)} <sup>&deg;</sup> ${fromDegree} == ${result.toFixed(2)} <sup>&deg;</sup> ${toDegree}`;
}
