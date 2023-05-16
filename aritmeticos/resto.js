function resto(dividendo, divisor) {
  // Verificamos si alguno de los parametros es cero y retornamos un mensaje de error en ese caso
  if (divisor === 0) {
    return "No se puede dividir por cero";
  }
  return dividendo % divisor; // Retorna el resultado de resto
}

// Exportamos la funcion para poder utilizarla en la calculadora
module.exports = resto;