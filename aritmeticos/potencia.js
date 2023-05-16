function potencia(base, exponente) {
    if (exponente === 2) {
        console.log("Es una potencia al cuadrado");
        return base ** exponente;
    }
    else if (exponente === 3) {
        console.log("Es una potencia al cubo");
        return base ** exponente;
    }
    else {
        return base ** exponente;
    }
}

// Exportamos la función para poder utilizarla en otros archivos
module.exports = potencia;
