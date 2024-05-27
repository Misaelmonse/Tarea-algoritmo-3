const read = require("prompt-sync")();
const write = console.log;

const menu = [
  `Menu de ejercicios`,
  `1) Transformar grados Celsius a Fahrenheit.`,
  `2) Algoritmo que lea un numero entero, obtenga y presente el doble y el triple del número.`,
  `3) Diseñar un Algoritmo que lea 4 variables y calcule e imprima su producto, su suma y su media aritmética.`,
  `4) Diseñar un algoritmo que lea el peso de un hombre en libras y nos devuelva su peso en kilogramos y gramos.`,
  `5) Resolver la siguiente expresión x=((sen(a)+cos(b))*(trunc(a) mod 2))+(raiz(a^3)/(a*b+c)).`,
  `6) Un empleado trabaja 40 horas en jornada normal en la semana a razón $5 la hora. Si trabaja más de 40 horas, estas serán considerados horas de sobretiempo que se pagan al doble de la hora de la jornada normal. El porcentaje del seguro social(iess) es del 10% del ingreso total. Se desea saber cuál es el valor del sueldo, sobretiempo, ingreso total, seguro social y el neto a recibir.`,
  `7) Algoritmo que pida dos números y presenta el mayor de los dos siempre y cando el primero sea par y el segundo impar.`,
  `8) Leer un carácter y deducir si está o no comprendido entre las letras a y z ambas inclusive y sino verificar si es un signo de puntuacion ", . ; :"
  y si no presentar solo el carácter.`,
  `9) Determinar cuánto se debe pagar por x cantidad de colas, considerando que si son menos de 12 colas, el costo por unidad es de $0,25 caso contrario el precio será 10% menos.`,
  `10) El almacén “AlgoritmoX” tiene una promoción: a todos los trajes que tienen un precio superior a 200, se les aplicará un descuento del 10% y al resto tendrán un descuento de solo $10 dólares. Presentar el valor de cada traje con su respectivo valor, descuento y pago considerando el iva del 15%.`,
  `11) Dado un día en numero, presentar el nombre de ese día. Para la solución utilice arreglos.`,
  `12) Dado un mes en número, presentar el nombre de ese mes.`,
  `13) Dado 5 nombres almacenarlo en un arreglo y luego presentar cada nombre del arreglo desde el ultimo al primero.`,
  `14) Dado una dirección cualquiera presentar la dirección, el primer carácter, el del medio y el ultimo de dicha dirección.`,
  `15) Almacenar 5 valores aleatorios en un arreglo e imprimir el primero valor si es par positivo y el ultimo si es impar negativo.`,
  `16) Dado un arreglo vacío, añadir 3 nombres y presentar el primer y el ultimo carácter de cada nombre desde el arreglo.`,
  `17) Dada una cadena presentar el primer carácter siempre y cuando sea un digito.`,
  `18) Dada una cadena presentar el ultimo carácter siempre y cuando sea una letra.`,
  `19) Dada una cadena presentar el primer carácter siempre y cuando sea una vocal.`,
  `20) Dada una cadena presentar el carácter de en medio, siempre y cuando sea un carácter de puntuación: “;” | “:” | “.” | “,”.`,
  `21) Dado dos caracteres indicar si son iguales o si el primero es menor que el segundo o mayor que el segundo.`,
  `22) Dado dos nombres indicar si son iguales o si el primero es menor que el segundo o mayor que el segundo.`,
  `23) Dada una cadena indicar cuantos elementos tiene.`,
  `24) Dado un arreglo indicar cuantos elementos tiene.`,
];

write(menu.join("\n")); // Concatena cada opción del menú con un salto de línea
const numeroEjercicio = read("Elija el ejercicio: ");
const numero = parseInt(numeroEjercicio); // Convierte a número

// Validar entrada
if (numero > 0 && numero <= 24) {
  const ejercicioStr = numero.toString().padStart(2, '0'); // Convierte a cadena y rellena con ceros
  write(menu[numero]);
  try {
    const ejercicio = require(`./Ejercicio${ejercicioStr}`);
    ejercicio(); // Ejecuta el ejercicio
  } catch (error) {
    write(`Error al ejecutar el ejercicio ${numero}: ${error.message}`);
  }
} else {
  write("Solo se permite números del 1 al 24");
}
