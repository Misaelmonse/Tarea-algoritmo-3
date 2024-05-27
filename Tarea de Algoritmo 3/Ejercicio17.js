//17.	Dada una cadena presentar el primer carácter siempre y cuando sea un digito

//Solicitamos al usuario que ingrese una cadena
// Verificamos si el primer carácter es un dígito
//Mostramos el resultado

const read = require('prompt-sync')();
const write = console.log

function Ejercicio17() {

let cadena = read("Ingrese una cadena:");

let primerCaracter = cadena.charAt(0);//charAt(0) para obtener el primer carácter de la cadena

if (!isNaN(primerCaracter)) {//determinar si un valor no es un número (NaN)
    write("El primer carácter es un dígito y es:", primerCaracter);
} else {
    write("El primer carácter no es un dígito.");
}


}
Ejercicio17()
