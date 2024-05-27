//5.	Diseñar un algoritmo que resuelva la siguiente expresión 
//matemática: x=((sen(a)+cos(b))*(trunc(a) mod 2))+(raiz(a^3)/(a*b+c))

//Pedir al usuario que ingrese valor a: a,b,c
// Leer los valores de a, b y c del usuario
// Calcular x según la expresión dada
// Mostrar el resultado

const read = require('prompt-sync')();
const write = console.log

function Ejercicio05() {
    
    let a = parseFloat(read("Introduce el valor de a:"));
    let b = parseFloat(read("Introduce el valor de b:"));
    let c = parseFloat(read("Introduce el valor de c:"));

    let x = ((Math.sin(a) + Math.cos(b)) * (Math.trunc(a) % 2)) + 
            (Math.sqrt(Math.pow(a, 3)) / (a * b + c));

    write("El resultado de la expresión es: " , x);
}

Ejercicio05();
