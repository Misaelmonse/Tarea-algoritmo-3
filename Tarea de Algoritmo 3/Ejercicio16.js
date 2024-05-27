//16.	Dado un arreglo vacío, añadir 3 nombres y 
//presentar el primer y el ultimo carácter de cada nombre desde el arreglo.

//Creamos un arreglo vacío para almacenar los nombres
//Solicitamos al usuario que ingrese 3 nombres y los agregamos al arreglo
//Para cada nombre, presentamos el primer y el último carácter


const read = require('prompt-sync')();
const write = console.log

function Ejercicio16() {

let nombres = [];

for (let i = 0; i < 3; i++) {
    let nombre = read("Ingrese un nombre:");
    nombres.push(nombre);
}

for (let i = 0; i < nombres.length; i++) {
    let nombre = nombres[i];
    let primerCaracter = nombre.charAt(0);
    let ultimoCaracter = nombre.charAt(nombre.length - 1);
    write("Nombre:", nombre, "- Primer carácter:", primerCaracter, "- Último carácter:", ultimoCaracter);
}


}
Ejercicio16()