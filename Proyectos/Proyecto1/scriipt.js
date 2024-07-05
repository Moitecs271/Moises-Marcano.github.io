function mostrarResultado(resultado) {
    document.querySelector(".resultado").style.color = "black";
    document.querySelector(".resultado").innerHTML = resultado;
}

function mensajeError(mensaje) {
    document.querySelector(".resultado").style.color = "red";
    document.querySelector(".resultado").innerHTML = mensaje;
}

// Boton sumar
document.querySelector(".sumar-boton").addEventListener('click', function () {
    let numeroA = Number(document.querySelector(".primer-numero").value);
    let numeroB = Number(document.querySelector(".segundo-numero").value);
    
    if (isNaN(numeroA) || isNaN(numeroB)) {
        return mensajeError("Error");
    }
    
    let resultado = numeroA + numeroB;
    return mostrarResultado(resultado);
});

// Boton restar
document.querySelector(".restar-boton").addEventListener('click', function () {
    let numeroA = Number(document.querySelector(".primer-numero").value);
    let numeroB = Number(document.querySelector(".segundo-numero").value);
    
    if (isNaN(numeroA) || isNaN(numeroB)) {
        return mensajeError("Error");
    }
    
    let resultado = numeroA - numeroB;
    return mostrarResultado(resultado);
});

// Boton multiplicar
document.querySelector(".multiplicar-boton").addEventListener('click', function () {
    let numeroA = Number(document.querySelector(".primer-numero").value);
    let numeroB = Number(document.querySelector(".segundo-numero").value);
    
    if (isNaN(numeroA) || isNaN(numeroB)) {
        return mensajeError("Error");
    }
    
    let resultado = numeroA * numeroB;
    return mostrarResultado(resultado);
});

// Boton dividir
document.querySelector(".dividir-boton").addEventListener('click', function () {
    let numeroA = Number(document.querySelector(".primer-numero").value);
    let numeroB = Number(document.querySelector(".segundo-numero").value);
    
    if (isNaN(numeroA) || isNaN(numeroB)) {
        return mensajeError("Error");
    }
    if (numeroB === 0) {
        return mensajeError("Error");
    }
    
    let resultado = numeroA / numeroB;
    return mostrarResultado(resultado);
});
