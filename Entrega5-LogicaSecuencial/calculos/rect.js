// Valida que los números ingresados no sean negativos o vacío
function validarInputs(base, altura) {
    if (isNaN(base) || isNaN(altura)) {
        alert("Por favor ingresa números válidos.");
        return false;
    } else if (base < 0 || altura < 0) {
        alert("No es válido. Por favor ingresa números positivos.");
        return false;
    }
    return true;
}

// Función para calcular el área del rectángulo
function areaRect() {
    let baseRect = parseFloat(document.getElementById('base-rect').value);
    let alturaRect = parseFloat(document.getElementById('altura-rect').value);    
    let resultAreaRect = baseRect * alturaRect;
    document.getElementById('resultado-area').value = resultAreaRect;    
}

// Función para calcular el perímetro del rectágulo
function perimetroRect() {
    let baseRect = parseFloat(document.getElementById('base-rect').value);
    let alturaRect = parseFloat(document.getElementById('altura-rect').value);
    let resultPerimetroRect = 2 * (baseRect + alturaRect);
    document.getElementById('resultado-perimetro').value = resultPerimetroRect;
}

// Función para calcular la diagonal del rectágulo
function diagonalRect(){
    let baseRect = parseFloat(document.getElementById('base-rect').value);
    let alturaRect = parseFloat(document.getElementById('altura-rect').value);
    let resultDiagonal = Math.sqrt(Math.pow(baseRect, 2) + Math.pow(alturaRect, 2));
    document.getElementById('resultado-diagonal').value = resultDiagonal.toFixed(2);
}

// Funcion para calcular área, perímetro y diagonal del rectángulo
function calcularAreaYPerimetro() {
    let baseRect = parseFloat(document.getElementById('base-rect').value);
    let alturaRect = parseFloat(document.getElementById('altura-rect').value);
    if (validarInputs(baseRect, alturaRect)) {
        areaRect();
        perimetroRect();
        diagonalRect();
    } else {
        // Limpiar los inputs si la validación falla
        document.getElementById('base-rect').value = "";
        document.getElementById('altura-rect').value = "";
    }
}