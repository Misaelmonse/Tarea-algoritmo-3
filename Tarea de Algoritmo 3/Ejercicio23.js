//23.	Dado una cadena indicar cuantos elementos tiene, sin usar ciclos 

//Solicitamos al usuario que ingrese una cadena
//Obtenemos la longitud de la cadena
// Paso 3: Mostramos la cantidad de elementos en la cadena

const read = require('prompt-sync')();
const write = console.log

function Ejercicio23() {

let cadena = read("Ingrese una cadena:");

let cantidadElementos = cadena.length;//length: se usa para obtener la cantidad de elementos en la cadena.

write("La cadena tiene", cantidadElementos, "elementos.");

}
Ejercicio23()