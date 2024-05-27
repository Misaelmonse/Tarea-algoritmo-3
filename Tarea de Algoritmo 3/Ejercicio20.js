//20.	Dada una cadena presentar el carácter de en medio, 
//siempre y cuando sea un caracte de puntuación: “;” | “:” | “.” | “,”

///Solicitamos al usuario que ingrese una cadena.
//Obtenemos la longitud de la cadena.
//Verificamos si la longitud de la cadena es impar
//Si la longitud es impar, calculamos el índice del carácter del medio 
//Obtenemos el carácter del medio
//Verificamos si el carácter del medio es uno de los caracteres de puntuación especificados (;, :, ., ,). 
//Si lo es, lo mostramos. 
//De lo contrario, mostramos un mensaje indicando que el carácter de en medio no es un carácter de puntuación.

const read = require('prompt-sync')();
const write = console.log

function Ejercicio20() {

let cadena = read("Ingrese una cadena:");
let longitud = cadena.length;

if (longitud % 2 !== 0) {
    let indiceMedio = Math.floor(longitud / 2);//Math.floor(longitud / 2):calculamos el índice del carácter del medio 
    let caracterMedio = cadena.charAt(indiceMedio);//charAt(indiceMedio): Con esto obtenemos el caracter del medio
    
    if (caracterMedio === ";" || caracterMedio === ":" || caracterMedio === "." || caracterMedio === ",") {
        write("El carácter de en medio es un carácter de puntuación y es:", caracterMedio);
    } else {
        write("El carácter de en medio no es un carácter de puntuación.");
    }
} else {
    write("La cadena no tiene un carácter de en medio, ya que su longitud es par.");
}

}
Ejercicio20()