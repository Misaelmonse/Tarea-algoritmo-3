//19.	Dada una cadena presentar el primer carácter siempre y cuando sea una vocal

//Solicitamos al usuario que ingrese una cadena
//Obtenemos el primer carácter de la cadena y lo convertimos a minúsculas para hacer la comparación
//Verificamos si el primer carácter es una vocal
//Mostar la respuesta

const read = require('prompt-sync')();
const write = console.log

function Ejercicio19() {

let cadena = read("Ingrese una cadena:");
let primerCaracter = cadena.charAt(0).toLowerCase();//toLowerCase() para asegurarnos de que podamos hacer la comparación de manera insensible a mayúsculas y minúsculas.

if (["a", "e", "i", "o", "u"].includes(primerCaracter)) {
    write("El primer carácter es una vocal y es:", primerCaracter);
} else {
    write("El primer carácter no es una vocal.");
}

}
Ejercicio19()