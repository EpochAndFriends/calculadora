function calcularVoltaje(corriente, resistencia) {
  return corriente * resistencia;
}

// Exportamos la funcion para poder utilizarla en otros archivos
module.exports = calcularVoltaje;