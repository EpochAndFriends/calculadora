// Importamos las funciones de los archivos sumar.js, restar.js, multiplicar.js, dividir.js
const sumar = require("./basicas/sumar.js");
const restar = require("./basicas/restar.js");
const multiplicar = require("./basicas/multiplicar.js");
const dividir = require("./basicas/dividir.js");
const potencia = require("./aritmeticos/potencia.js");
const raiz = require("./aritmeticos/raiz");
const resto = require("./aritmeticos/resto");
const calcularResistencia = require("./leyOHM/resistencia");
const calcularCorriente = require("./leyOHM/corriente.js");
const calcularVoltaje = require("./leyOHM/voltaje");


console.log("---------Funciones Basicas---------")

// Ejecutamos la funcion de suma
const resultadoSuma = sumar(10, 5);
console.log("Resultado de la suma:", resultadoSuma); // Devuelve el resultado de la suma

// Ejecutamos la funcion de resta
const resultadoResta = restar(10, 5);
console.log("Resultado de la resta:", resultadoResta); // Devuelve el resultado de la resta

// Ejecutamos la funcion de multiplicacion
const resultadoMultiplicacion = multiplicar(10, 5);
console.log("Resultado de la multiplicacion:", resultadoMultiplicacion); // Devuelve el resultado de la multiplicacion

// Ejecutamos la funcin de multiplicacion con uno de los argumentos igual a cero
const resultadoMultiplicacionCero = multiplicar(10, 0);
console.log("Resultado de la multiplicacion con cero:", resultadoMultiplicacionCero); // Devuelve el resultado de la multiplicación con cero

// Ejecutamos la funcion de division
const resultadoDivision = dividir(10, 5);
console.log("Resultado de la division:", resultadoDivision); // Devuelve el resultado de la division

// Ejecutamos la funcion de division con uno de los argumentos igual a cero
const resultadoDivisionCero = dividir(0, 10);
console.log("Resultado de la division con cero:", resultadoDivisionCero); // Devuelve el resultado de la division con cero

console.log("---------Funciones Aritmeticas--------")

// Ejecutamos la funcion de potencia
const base = 4;
const exponente = 2; // Texto extra si se coloca 2 o 3
const resultadoPotencia = potencia(base, exponente);
if (exponente === 2) {
    console.log("La potencia de", base, "al cuadrado es", resultadoPotencia);
}
else if (exponente === 3) {
    console.log("La potencia de", base, "al cubo es", resultadoPotencia);
}
else { console.log("La potencia de", base, "es", resultadoPotencia) } //Devuelve el resultado de la ootencia, y tambien especifica si es al cuadrado o al cubo


// Ejecutamos la funcion de raiz
const valor = 16;
const indice = 3; // Texto extra si se coloca 2 o 3
const resultadoRaiz = raiz(valor, indice);
if (indice === 2) {
    console.log("La raiz de", valor, "al cuadrado es", resultadoRaiz);
}
else if (indice === 3) {
    console.log("La raiz de", valor, "al cubo es", resultadoRaiz);
}
else { console.log("La raiz de", valor, "es", resultadoRaiz) } //Devuelve el resultado de la raiz, y tambien especifica si es cuadratica o cubica

// Ejecutamos la funcion de resto
const dividendo = 13
const divisor = 3
const resultadoResto = resto(dividendo, divisor);
console.log("Resultado de resto entre", dividendo, "y", divisor, "es", resultadoResto); // Devuelve el resultado de Resto

// Ley de OHM
console.log("---------Ley de OHM---------")
const resistencia = 6;
const voltaje = 8;
const corriente = 2.5;

const resultadoResistencia = calcularResistencia(voltaje, corriente);
console.log("Resistencia:", resultadoResistencia);

const resultadoCorriente = calcularCorriente(voltaje, resistencia);
console.log("Corriente:", resultadoCorriente);

const resultadoVoltaje = calcularVoltaje(corriente, resistencia);
console.log("Voltaje:", resultadoVoltaje);

/*
a) ¿Qué hubiese sucedido si, en vez de generar un archivo por cada operación 
matemática, hubiésemos programado todo en un mismo archivo?

b) ¿Por qué el mejor camino es generar distintos archivos y luego requerirlos en uno solo?

c) ¿Será esta metodología de trabajo una constante de aquí en adelante?

A- Se podria generar todo el codigo dentro del mismo archivo, pero la gran cantidad de codigo volveria muy complicado de leer y de corregir el archivo a futuro.
(Y seria casi imposible de utilizar debido a la gran cantidad de lineas de texto)

B- Facilita el manejo de cada funcion al tener un acceso individual, en cuanto a modificaciones directas y lectura, y el poder exportar ese mismo codigo para otros proyectos.

C- Para mi seria lo ideal. No tiene ninguna contra inmediata (que pueda pensar) trabajar de esta forma
*/