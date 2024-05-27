//14.	Dado una dirección cualquiera presentar la dirección, 
//el primer carácter, el del medio y el ultimo de dicha dirección.

// Solicitamos al usuario que ingrese una dirección
// Verificamos si se ingresó una dirección
// Obtenemos el primer carácter de la dirección
// Obtenemos el carácter del medio de la dirección
// Obtenemos el último carácter de la dirección
// Mostramos la dirección y los caracteres obtenidos

const read = require('prompt-sync')();
const write = console.log

function Ejercicio14() {

let direccion = read("Ingrese una dirección:");

if (direccion) {
    let primerCaracter = direccion[0];
    let caracterDelMedio = direccion[Math.floor(direccion.length / 2)];
    let ultimoCaracter = direccion[direccion.length - 1];

    write("Dirección:", direccion);
    write("Primer carácter:", primerCaracter);
    write("Carácter del medio:", caracterDelMedio);
    write("Último carácter:", ultimoCaracter);
} else {
    write("No se ha ingresado ninguna dirección.");
}

}
Ejercicio14()