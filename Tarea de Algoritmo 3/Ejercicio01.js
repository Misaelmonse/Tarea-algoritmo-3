//1.	Algoritmo que transforme de grados Celsius a Fahrenheit

//Ingresar los grados celsius que quiere tansformar 
// Aplicar la fórmula para convertir a Fahrenheit
//Presentar el resultado


const read = require('prompt-sync')();
const write = console.log

function Ejercicio01(){
    let celsius = read ("Ingresa los grados celsius que quieres transformar ")
    let fahrenheit = celsius * 9 / 5 + 32;
    write(celsius , ' grados Celsius son ' , fahrenheit , ' grados Fahrenheit.');

}

Ejercicio01();
