function calcularCorriente(voltaje, resistencia) {
  return voltaje / resistencia;
}

// Exportamos la funcion para poder utilizarla en otros archivos
module.exports = calcularCorriente;