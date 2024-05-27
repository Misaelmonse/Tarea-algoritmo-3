//13.	Dado 5 nombres almacenarlo en un arreglo y 
//luego presentar cada nombre del arreglo desde el ultimo al primero sin usar ciclos.

// Solicitamos al usuario que ingrese 5 nombres
// Mostramos cada nombre ingresado en desde el ultimo hasta el primero

const read = require('prompt-sync')();
const write = console.log

function Ejercicio13() {

let nombre1 = read("Ingrese el primer nombre:");
let nombre2 = read("Ingrese el segundo nombre:");
let nombre3 = read("Ingrese el tercer nombre:");
let nombre4 = read("Ingrese el cuarto nombre:");
let nombre5 = read("Ingrese el quinto nombre:");

write(nombre5);
write(nombre4);
write(nombre3);
write(nombre2);
write(nombre1);

}
Ejercicio13()
