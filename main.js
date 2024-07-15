//Celius to other scales

function celciusToFarenheit(degree){
    return degree * 9 / 5 + 32;
}

function celciusToKelvin(degree){
    return degree + 273.15; 
}

function celciusToRankine(degree){
    return  (degree + 273.15) * (9/5)
}

function celciusToReaumer(degree){
    return degree * ( 4 / 5)
}


// Fareheit to other scales
function farenheitToCelcius(degree){
    return (5 / 9) * (degree - 32);
}

function farenheitToKelvin(degree){
    return (5 / 9) * (degree - 32) + 273.15;
}

function farenheitToRankine(degree){
    return degree + 459.67;
}

function farenheitToReaumer(degree){
    return (4 / 9)*(degree - 32);
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
function kelvinToReaumer(degree){
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


// Reaumer to other scales

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
    return (degree * (5 / 4 )+ 273.15) * (9 / 5);
}

function convertTemperature(degree, from, to){

    //Celcius to Other 
    if (from === 'C' && to === 'F') {
        console.log(celciusToFarenheit(degree))
    }
    else if (from === 'C' && to === 'K') {
        console.log(celciusToKelvin(degree))
    }
    else if(from ==="C" && to === "R"){
        console.log(celciusToRankine(degree))
    }
    else if(from === "C" && to === "Re"){
        console.log(celciusToReaumer(degree))
    }
   

    // Farenheit to other scales
    else if ( from === "F" && to === "C"){
        console.log(farenheitToCelcius(degree))
    }
    else if (from === "F" && to === "K"){
        console.log(farenheitToKelvin(degree))
    }
    else if (from === "F" && to === "R"){
        console.log(farenheitToRankine(degree))
    }
    else if (from === "F" && to === "Re"){
        console.log(farenheitToReaumer(degree));
    }
    

    // kelvin to other scales
    else if (from === "K" && to === "C"){
        console.log(kelvinToCelcius(degree))
    }
    else if (from === "K" && to ==="F"){
        console.log(kelvinToFarenheit(degree))
    }
    else if (from === "K" && to === "R"){
        console.log(kelvinToRankine(degree))
    }
    else if (from === "K" && to === "Re"){
        console.log(kelvinToReaumer(degree))
    }

    // Rankine to the scales
    else if (from === "R" && to === "C"){
        console.log(rankineToCelcius(degree))
        }
    else if (from === "R" && to === "F"){
        console.log(rankineToFarenheit(degree))
        }
    else if (from === "R" && to === "K"){
        console.log(rankineToKelvin(degree))
        }
    else if (from === "R" && to === "Re"){
        console.log(rankineToReaumur(degree))
        }
    
        // Reaumer to the scales
    else if (from === "Re" && to === "C"){
        console.log(reaumurToCelcius(degree))
    }
    else if(from === "Re" && to === "F"){
        console.log(reaumurToFarenheit(degree))
    }
    else if(from === "Re" && to === "K"){
        console.log(reaumurToKelvin(degree))
    }
    else if(from === "Re" && to === "R"){
            console.log(reaumurToRankine(degree))
    }


}

convertTemperature(30, 'Re', 'R')