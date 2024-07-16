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

function convertTemperature() {
    const degree = parseFloat(document.getElementById('degree').value);
    const fromDegree = document.getElementById('fromdegree').value.toUpperCase();
    const toDegree = document.getElementById('todegree').value.toUpperCase();
    
    if (isNaN(degree)) {
        document.getElementById('resultTemperature').innerHTML = "Please enter a valid number for temperature.";
        return;
    }

    if (!conversionFunctions[fromDegree] || !conversionFunctions[fromDegree][toDegree]) {
        document.getElementById('resultTemperature').innerHTML = "Invalid conversion scale.";
        return;
    }

    const result = conversionFunctions[fromDegree][toDegree](degree);

    document.getElementById('resultTemperature').innerHTML = `${degree.toFixed(2)} <sup>&deg;</sup> ${fromDegree} == ${result.toFixed(2)} <sup>&deg;</sup> ${toDegree}`;
}