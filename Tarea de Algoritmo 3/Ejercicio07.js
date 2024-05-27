//7.	Algoritmo que pida dos números 
//y presenta el mayor de los dos siempre y cuando el primero sea par y el segundo impar

//Pedir al usuario dos numeros
// Leer los dos números del usuario
// Verificar si el primer número es par y el segundo número es impar
//Ver si cumple lo que pide el algoritmo
// Mostrar el resultado
// O mostrar un mensaje indicando que no se cumple la condición

const read = require('prompt-sync')();
const write = console.log

function Ejercicio07() {
    
    let num1 = parseFloat(read("Introduce el primer número: "));
    let num2 = parseFloat(read("Introduce el segundo número: "));

    if (num1 % 2 === 0 && num2 % 2 !== 0) {
        let mayor = (num1 > num2) ? num1 : num2;
        write("El mayor de los dos números es: " , mayor);
    } else {
        write("El primer número no es par o el segundo número no es impar");
    }
}

Ejercicio07();
