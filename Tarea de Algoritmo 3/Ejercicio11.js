//11.	Dado un día en numero, presentar el nombre de ese día. Para la solución utilice arreglos.

//Hacemos un rreglo con los nombres de los días de la semana
// Solicitamos al usuario que ingrese un número de día
// Verificamos si el valor ingresado es un número válido
//Mostrar el resultado

const read = require('prompt-sync')();
const write = console.log

function Ejercicio11() {

let diasSemana = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado", "Domingo"];
let numeroDia = parseInt(read("Ingrese un número de día (0 para lunes, 1 martes y asi sucesivamente):"));

if (!isNaN(numeroDia) && numeroDia >= 0 && numeroDia <= 6) {
    write("El día correspondiente al número", numeroDia, "es:", diasSemana[numeroDia]);
} else {
    write("Por favor, ingrese un número válido para el día (0-6).");
}

}
Ejercicio11()