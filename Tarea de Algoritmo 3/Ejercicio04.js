//4.	Diseñar un algoritmo que lea el peso de un hombre en libras y nos devuelva su peso en kilogramos y  
// gramos(nota: una libra equivale a 0.453593 kilogramos)

// Leer el peso en libras del usuario
// Convertir el peso a kilogramos
// Convertir el peso a gramos
// Mostrar los resultados

const read = require('prompt-sync')();
const write = console.log

function Ejercicio04 () {

    let pesoLibras = parseFloat(read("Introduce el peso en libras: "));
    let pesoKilogramos = pesoLibras * 0.453593;
    let pesoGramos = pesoKilogramos * 1000;

    write("El peso en kilogramos es: " , pesoKilogramos.toFixed(2) , " kg");
    write("El peso en gramos es: " , pesoGramos.toFixed(0) , " g");
}

Ejercicio04();
