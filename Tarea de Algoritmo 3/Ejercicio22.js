//22.	Dado dos nombres indicar si son iguales o si el primero es menor que el segundo o mayor que el segundo

//Solicitamos al usuario que ingrese dos nombres
//Comparamos los nombres
//Mostramos el resultado de la comparación

const read = require('prompt-sync')();
const write = console.log

function Ejercicio22() {

let primerNombre = read("Ingrese el primer nombre:");
let segundoNombre = read("Ingrese el segundo nombre:");

let comparacion = primerNombre.localeCompare(segundoNombre);//localeCompare(): Este método devuelve un número negativo si el primer nombre es menor que el segundo, cero si son iguales, y un número positivo si el primer nombre es mayor que el segundo en orden alfabético.

if (comparacion === 0) {
    write("Los nombres son iguales.");
} else if (comparacion < 0) {
    write("El primer nombre es menor que el segundo nombre.");
} else {
    write("El primer nombre es mayor que el segundo nombre.");
}

}
Ejercicio22()