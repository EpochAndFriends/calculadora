function dividir(a, b) {
  // Verificamos si alguno de los parametros es cero y retornamos un mensaje de error en ese caso
  if ((a === 0) || (b === 0)) {
    return "No se puede dividir por cero";
  }
  return a / b; // Retorna la division de los dos parametros
}

// Exportamos la funcion para poder utilizarla en la calculadora
module.exports = dividir;