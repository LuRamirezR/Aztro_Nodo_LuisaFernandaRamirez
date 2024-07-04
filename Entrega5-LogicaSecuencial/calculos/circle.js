// Valida que el número ingresado no sea negativo o vacío
function validaInputRadio(radio) {
    if(isNaN(radio)) {
        alert("Por favor ingresa números válidos.");
        return false;
    }else if(radio < 0) {
        alert("No es válido. Por favor ingresa números positivos.");
        return false;
    }
    return true;
}

// Función para calcular el área del circulo
function areaCircle() {
    const PI = 3.14
    let radioCircle = parseFloat(document.getElementById('radio-circle').value);
    let resultAreaCircle = PI * Math.pow(radioCircle, 2);
    document.getElementById('result-area-circle').value = resultAreaCircle;
}

// Función para calcular el perimetro del circulo
function perimetroCircle() {
    const PI = 3.14
    let radioCircle = parseFloat(document.getElementById('radio-circle').value);
    let resultPerimetroCircle = 2 * PI * radioCircle;
    document.getElementById('result-perimetro-circle').value = resultPerimetroCircle;
}

// Funcion para calcular área y perímetro del circulo
function calcularCircle() {
    let radioCircle = parseFloat(document.getElementById('radio-circle').value);
    if (validaInputRadio(radioCircle)) {
        areaCircle();
        perimetroCircle();
    }else {
        // Limpiar el input si la validación falla
        document.getElementById('radio-circle').value = "";
        document.getElementById('result-area-circle').value = "";
        document.getElementById('result-perimetro-circle').value = "";
    }
}