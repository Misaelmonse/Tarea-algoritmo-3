//12.	Dado un mes en número, presentar el nombre de ese mes. Para la solución utilice arreglos.

// Solicitamos al usuario que ingrese un número de mes
// Verificamos si el valor ingresado es un número válido
// Mostramos el nombre del mes correspondiente al número ingresado

const read = require('prompt-sync')();
const write = console.log

function Ejercicio12() {

let mesesDelAño = [
    "Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio",
    "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"
];
let numeroMes = parseInt(read("Ingrese un número de mes (1 para Enero, 2 para Febrero, etc.):"));

if (!isNaN(numeroMes) && numeroMes >= 1 && numeroMes <= 12) {
    write("El mes correspondiente al número", numeroMes, "es:", mesesDelAño[numeroMes - 1]);
} else {
    write("Por favor, ingrese un número válido para el mes (1-12).");
}

}
Ejercicio12()