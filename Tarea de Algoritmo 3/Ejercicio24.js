//24.	Dado un arreglo indicar cuantos elementos tiene, sin usar ciclos

//Solicitamos al usuario que ingrese los elementos del arreglo separados por comas
//Convertimos la cadena ingresada en un arreglo
//Obtenemos la longitud del arreglo
//Mostramos la cantidad de elementos en el arreglo

const read = require('prompt-sync')();
const write = console.log

function Ejercicio24() {

let elementos = read("Ingrese los elementos del arreglo separados por comas:");
let arreglo = elementos.split(",");//split(): Convertir cadena en arreglo para convertir las "," en espacios
let cantidadElementos = arreglo.length;

write("El arreglo tiene", cantidadElementos, "elementos.");


}
Ejercicio24()