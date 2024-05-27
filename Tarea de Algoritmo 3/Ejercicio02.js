//2.	Algoritmo que lea un numero entero, obtenga y presente el doble y el triple del número.

// Leer un número entero del usuario
// Calcular el doble y el triple del número
// Presentar los resultados

const read = require('prompt-sync')();
const write = console.log

function Ejercicio02() {
   
    let numero = read ("Ingresa un número entero: ");

    let doble = numero * 2;
    let triple = numero * 3;

    write("El doble de " , numero , " es " , doble );
    write("El triple de " , numero ," es " , triple );
}

Ejercicio02();
