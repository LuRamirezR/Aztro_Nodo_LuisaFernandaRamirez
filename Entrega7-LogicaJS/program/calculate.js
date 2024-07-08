// Función para calcular el promedio de tiempo de un nadador
function practicalExercise_1() {
    let testSwimmer1 = parseFloat(document.getElementById('test_1').value);
    let testSwimmer2 = parseFloat(document.getElementById('test_2').value);
    let testSwimmer3 = parseFloat(document.getElementById('test_3').value);
    let testSwimmer4 = parseFloat(document.getElementById('test_4').value);
    let testSwimmer5 = parseFloat(document.getElementById('test_5').value);

    let averageResult = (testSwimmer1 + testSwimmer2 + testSwimmer3 + testSwimmer4 + testSwimmer5) / 5;
    document.getElementById('promedio-nadador').value = averageResult.toFixed(2);
}

// Función para calcular área, perímetro de un trapezoide
function practicalExercise_2() {
    let baseTrapezoide1 = parseFloat(document.getElementById('trapezoide_base1').value);
    let baseTrapezoide2 = parseFloat(document.getElementById('trapezoide_base2').value);
    let alturaTrapezoide = parseFloat(document.getElementById('trapezoide_altura').value);
    let ladoTrapezoide1 = parseFloat(document.getElementById('trapezoide_lado1').value);
    let ladoTrapezoide2 = parseFloat(document.getElementById('trapezoide_lado2').value);

    // Calculo del área
    let areaTrapezoide = ((baseTrapezoide1 + baseTrapezoide2) * alturaTrapezoide) / 2;
    document.getElementById('trapezoide_area').value = areaTrapezoide.toFixed(2);

    // Cálculo de litros de pesticida
    let litrosPesticida = areaTrapezoide * 1.5;
    document.getElementById('litros_pesticida').value = litrosPesticida.toFixed(2);

    // Cálculo perímetro
    let perimetroTrapezoide = baseTrapezoide1 + baseTrapezoide2 + ladoTrapezoide1 + ladoTrapezoide2;
    document.getElementById('trapezoide_perimetro').value = perimetroTrapezoide.toFixed(2);
}

// Función para calcular cantidad de ladrillos en una pared
function practicalExercise_3() {
    // pared
    let alturaPared = parseFloat(document.getElementById('alturaPared').value);
    let anchoPared = parseFloat(document.getElementById('anchoPared').value);

    // ladrillo
    let altoLadrillo = parseFloat(document.getElementById('alturaLadrillo').value);
    let anchoLadrillo = parseFloat(document.getElementById('anchoLadrillo').value);
    let mortero = parseFloat(document.getElementById('mortero').value);

    // área de pared en metros
    let areaPared = alturaPared * anchoPared;
    document.getElementById('areaPared').value = areaPared.toFixed(2);

    // área de ladrillo en centimetros... cm² a m² divide el valor de Área entre 10000
    let areaLadrillo = (altoLadrillo + mortero) * (anchoLadrillo + mortero);
    document.getElementById('areaLadrillo').value = areaLadrillo.toFixed(2);

    // cantidad de ladrillos
    let cantidadLadrillos = areaPared / (areaLadrillo / 10000);
    document.getElementById('cantidadLadrillos').value = Math.ceil(cantidadLadrillos); // redondea al entero más alto
}


// Función para calcular el índice de masa corporal (IMC)
function practicalExercise_4() {
    let peso = parseFloat(document.getElementById('pesoPersona').value);
    let estatura = parseFloat(document.getElementById('estaturaPersona').value);

    let resultadoImc = peso / (estatura ** 2);
    document.getElementById('resultadoImc').value = resultadoImc.toFixed(2);

    // valida rangos
    if (resultadoImc < 18.5){
        document.getElementById('composicionCorporal').value = "Bajo peso";
    }else if (resultadoImc > 18.4 && resultadoImc < 24.9) {
        document.getElementById('composicionCorporal').value = "Peso saludable";
    }else if (resultadoImc > 25.0 && resultadoImc < 29.9) {
        document.getElementById('composicionCorporal').value = "Sobrepeso";
    }else {
        document.getElementById('composicionCorporal').value = "Obesidad";
    }
}

// Funcion para calcular el número de días trabajados en el mes
function practicalExercise_5() {
    function totalPagoSinHorasExtra() {
        let numDiasLaboradosMes = parseInt(document.getElementById('numDiasLaborados').value);
        // sin horas extras
        // calculo total horas al mes
        let totalHorasMes = numDiasLaboradosMes * 8;
        // pago total del mes, sin deduccion
        let pagoTotalSinDeduccion = numDiasLaboradosMes * 43000;
        // deducción de 4% + 4% + 3% = 11% (0.11)
        let deduccion = pagoTotalSinDeduccion * 0.11;
        let pagoTotalConDeduccion = pagoTotalSinDeduccion - deduccion;
        // se muestra
        document.getElementById('horasLaboradas').value = totalHorasMes;
        document.getElementById('pagoTotalSinDeduccion').value = `$${pagoTotalSinDeduccion}`;
        document.getElementById('pagoTotalConDeduccion').value = `$${pagoTotalConDeduccion}`;
        return { totalHorasMes, pagoTotalSinDeduccion };
    }
    // horas extras
    let horasExtraDiurna = parseInt(document.getElementById('extraDiurna').value) || 0;
    let horasExtraNocturna = parseInt(document.getElementById('extraNocturna').value) || 0;
    let horasExtraFestivo = parseInt(document.getElementById('extraFestivo').value) || 0;

    // constante para almacenar las variables del pago mes sin extras
    const sinExtras = totalPagoSinHorasExtra();

    // calculo de horas extra
    let totalExtraDiurna = horasExtraDiurna * 6915;
    let totalExtraNocturna = horasExtraNocturna * 9681;
    let totalExtraFestivo = horasExtraFestivo * 11064;

    // calculo el pago total sin deducciones: el inicial(sin extras) + extras
    let pagoTotalConExtras = sinExtras.pagoTotalSinDeduccion + totalExtraDiurna + totalExtraNocturna + totalExtraFestivo;
    // deducción de 4% + 4% + 3% = 11% (0.11)
    let deduccionConHorasExtra = pagoTotalConExtras * 0.11;
    let pagoTotalExtraConDeduccion = pagoTotalConExtras - deduccionConHorasExtra;
    let totalHorasExtra = horasExtraDiurna + horasExtraNocturna + horasExtraFestivo;

    document.getElementById('horasLaboradas').value = sinExtras.totalHorasMes + totalHorasExtra;
    document.getElementById('pagoTotalSinDeduccion').value = `$${pagoTotalConExtras}`;
    document.getElementById('pagoTotalConDeduccion').value = `$${pagoTotalExtraConDeduccion}`;
}