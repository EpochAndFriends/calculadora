function raiz(valor, indice) {
  // Verificamos si el indice es 2
  if (indice === 2) {
    console.log("Es una raiz cuadratica");
    return valor ** (1 / 2); // Retorna la raiz cuadrada del valor
  }
  // Verificamos si el indice es 3
  else if (indice === 3) {
    console.log("Es una raiz cubica");
    return valor ** (1 / 3); // Retorna la raiz cubica del valor
  }
  else {
    return valor ** (1 / indice); // Retorna la raiz en otros casos
  }
}

// Exportamos la funcion para poder utilizarla en otros archivos
module.exports = raiz;

