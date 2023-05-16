function calcularResistencia(voltaje, corriente) {
    return voltaje / corriente;
}

// Exportamos la funcion para poder utilizarla en otros archivos
module.exports = calcularResistencia;