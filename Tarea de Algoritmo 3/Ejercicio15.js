//15.	Almacenar 5 valores aleatorios en un arreglo e imprimir 
//el primero valor si es par positivo y el ultimo si es impar negativo.


//Generar un valor aleatorio
//ver si el primer valor par positivo y el último valor impar negativo
// Si es el último valor impar negativo, lo almacenamos
// Si es el último valor impar negativo, lo almacenamos
// Mostramos los resultados

const read = require('prompt-sync')();
const write = console.log

function Ejercicio15() {

let valores = [];
for (let i = 0; i < 5; i++) {
    let valorAleatorio = Math.floor(Math.random() * 201)- 100;
    valores.push(valorAleatorio);
}

let primerParPositivo;
let ultimoImparNegativo;

for (let i = 0; i < valores.length; i++) {
    if (valores[i] % 2 === 0 && valores[i] > 0 && !primerParPositivo) {
        primerParPositivo = valores[i];
    }

    if (valores[i] % 2 !== 0 && valores[i] < 0) {
        ultimoImparNegativo = valores[i];
    }
}

write("Valores generados:", valores);
if (primerParPositivo !== undefined) {
    write("El primer valor par positivo es:", primerParPositivo);
} else {
    write("No se encontró ningún valor par positivo.");
}
if (ultimoImparNegativo !== undefined) {
    write("El último valor impar negativo es:", ultimoImparNegativo);
} else {
    write("No se encontró ningún valor impar negativo.");
}

}
Ejercicio15()