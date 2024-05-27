//9.	Determinar cuánto se  debe pagar por x  cantidad de colas, considerando que si  son menos de 12 colas, 
//el costo por unidad es de $0,25 caso  contrario el precio será  10% menos.

//Solicitar cuantas colas se ha comprado
// Convertimos la entrada del usuario a un número entero
// Verificamos si la entrada es un número válido
// Definimos el precio por unidad
// Verificamos si la cantidad de colas es mayor o igual a 12
// Si la cantidad es mayor o igual a 12, aplicamos un descuento del 10%
// Multiplicamos por 0.9 para obtener el 90% del precio original
// Calculamos el costo total multiplicando la cantidad de colas por el precio por unidad
// Mostramos el resultado al usuario

const read = require('prompt-sync')();
const write = console.log

function Ejercicio09(){

let cantidadDeColas = read("Por favor, ingrese la cantidad de colas compradas:");

cantidadDeColas = parseInt(cantidadDeColas);

if (isNaN(cantidadDeColas) || cantidadDeColas <= 0) {
    write("Por favor, ingrese una cantidad válida de colas.");
} else {
    let precioPorUnidad = 0.25;

    if (cantidadDeColas >= 12) {
        precioPorUnidad *= 0.9; 
    }

    let costoTotal = cantidadDeColas * precioPorUnidad;

    write("El costo total de", cantidadDeColas, "colas es de $" , costoTotal.toFixed(2));
}

}
Ejercicio09();