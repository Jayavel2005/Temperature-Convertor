const conversionFunctions = {
    'C': {
        'F': degree => degree * 9 / 5 + 32,
        'K': degree => degree + 273.15,
        'R': degree => (degree + 273.15) * 9 / 5,
        'RE': degree => degree * 4 / 5
    },
    'F': {
        'C': degree => (degree - 32) * 5 / 9,
        'K': degree => (degree - 32) * 5 / 9 + 273.15,
        'R': degree => degree + 459.67,
        'RE': degree => (degree - 32) * 4 / 9
    },
    'K': {
        'C': degree => degree - 273.15,
        'F': degree => (degree - 273.15) * 9 / 5 + 32,
        'R': degree => degree * 1.8,
        'RE': degree => (degree - 273.15) * 4 / 5
    },
    'R': {
        'C': degree => (degree - 491.67) * 5 / 9,
        'F': degree => degree - 459.67,
        'K': degree => degree / 1.8,
        'RE': degree => (degree - 491.67) * 4 / 9
    },
    'RE': {
        'C': degree => degree * 5 / 4,
        'F': degree => degree * 9 / 4 + 32,
        'K': degree => degree * 5 / 4 + 273.15,
        'R': degree => (degree * 5 / 4 + 273.15) * 9 / 5
    }
};

const conversionUnit = ['C','F','K','R','RE'];




const resultTemperature = document.getElementById('resultTemperature');
let temp;


function convertTemperature() {
   
    const degree = parseFloat(document.getElementById('degree').value);
    const fromDegree = document.getElementById('fromdegree').value.toUpperCase();
    const toDegree = document.getElementById('todegree').value.toUpperCase();
    
    

    

    if(conversionUnit.includes(fromDegree) && conversionUnit.includes(toDegree) ){
        temp = conversionFunctions[fromDegree][toDegree](degree);
        resultTemperature.innerHTML = `${degree.toFixed(2)} <sup>&deg;</sup> ${fromDegree} == ${temp.toFixed(2)} <sup>&deg;</sup> ${toDegree}`;
        localStorage.setItem("temperature", JSON.stringify(resultTemperature.textContent))
    }
    else{
        document.getElementById('resultTemperature').innerHTML = "Fill up the above details";
    }

    
}

resultTemperature.innerHTML = JSON.parse(localStorage.getItem("temperature")) || 'Enter a Degree <i class="fa-solid fa-temperature-full fa-shake">';


