//3.	Diseñar un Algoritmo que lea 4 variables y calcule e imprima su producto, 
//su suma y su media aritmética.

//Pedir al usuario 4 variables
// Leer cuatro variables del usuario
// Calcular el producto de las cuatro variables
// Calcular la suma de las cuatro variables
// Calcular la media aritmética de las cuatro variables
// Mostrar los resultados

const read = require('prompt-sync')();
const write = console.log

function Ejercicio03() {
    
    let variable1 = parseFloat(read("Introduce la primera variable: "));
    let variable2 = parseFloat(read("Introduce la segunda variable: "));
    let variable3 = parseFloat(read("Introduce la tercera variable: "));
    let variable4 = parseFloat(read("Introduce la cuarta variable: "));


    let producto = variable1 * variable2 * variable3 * variable4;

    let suma = variable1 + variable2 + variable3 + variable4;

    let media = suma / 4;

    write("El producto de las variables es: " , producto);
    write("La suma de las variables es: " , suma);
    write("La media aritmética de las variables es: " , media);
}

Ejercicio03();
