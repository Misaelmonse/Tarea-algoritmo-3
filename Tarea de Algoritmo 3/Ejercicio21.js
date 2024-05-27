//21.	Dado dos caracteres indicar si son iguales o si el primero es menor que el segundo o 
//mayor que el segundo

//Solicitamos al usuario que ingrese dos caracteres
//Comparamos los caracteres
//Mostramos la respuesta

const read = require('prompt-sync')();
const write = console.log

function Ejercicio21() {

let primerCaracter = read("Ingrese el primer carácter:");
let segundoCaracter = read("Ingrese el segundo carácter:");

if (primerCaracter === segundoCaracter) {
    write("Los caracteres son iguales.");
} else if (primerCaracter < segundoCaracter) {
    write("El primer carácter es menor que el segundo carácter.");
} else {
    write("El primer carácter es mayor que el segundo carácter.");
}

}
Ejercicio21()