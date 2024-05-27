//18.	Dada una cadena presentar el ultimo carácter siempre y cuando sea una letra

//Solicitamos al usuario que ingrese una cadena
//Obtenemos el último carácter de la cadena
//Verificamos si el último carácter es una letra
//Mostramos la respuesta

const read = require('prompt-sync')();
const write = console.log

function Ejercicio18() {

let cadena = read("Ingrese una cadena:");
let ultimoCaracter = cadena.charAt(cadena.length - 1);//cadena.length - 1: Restamos 1 a la longitud de la cadena porque los índices de caracteres en JavaScript comienzan desde 0. 

if (isNaN(ultimoCaracter)) {
    write("El último carácter es una letra y es:", ultimoCaracter);
} else {
    write("El último carácter no es una letra.");
}


}
Ejercicio18()