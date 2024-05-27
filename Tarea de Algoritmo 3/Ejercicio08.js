//8.	Leer un carácter y deducir si está o no comprendido entre las letras a y z ambas inclusive 
//y sino verificar si es un signo de puntuacion ", . ; :"

//Pedir al usuario un caracter
// Leer el carácter del usuario
// Verificar si se ha introducido solo un carácter
// Verificar si el carácter está comprendido entre 'a' y 'z'
// Verificar si el carácter es un signo de puntuación ", . ; :"
//Mostrar el resultado

const read = require('prompt-sync')();
const write = console.log

function Ejercicio08() {

    let caracter = read("Introduce un carácter: ");

    if (caracter.length === 1) {
        if (caracter >= 'a' && caracter <= 'z') {
            write("El carácter está comprendido entre las letras 'a' y 'z'.");
        } 
        else if (",.;:".includes(caracter)) {
            read("El carácter es un signo de puntuación (',', '.', ';', ':').");
        } 
        else {
            write("El carácter no está comprendido entre las letras 'a' y 'z' ni es un signo de puntuación.");
        }
    } 
    else {
        write("Has ingresado mas de un caracter");
    }
}

Ejercicio08();

