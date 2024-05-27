//6.	Un empleado trabaja 40 horas en jornada normal en la semana a razón $5 la hora.
//Si trabaja más de 40 horas, estas serán considerados horas de sobretiempo que se pagan al doble de 
//la hora de la jornada normal. El porcentaje del seguro social(iess) es del 10% del ingreso total.
//Se desea saber cuál es el valor del sueldo, sobretiempo, ingreso total, seguro social y el neto a recibir.

//Pedir al usuario que ingrese las horas trabajadas
// Leer las horas trabajadas del usuario
// Calcular sueldo normal
// Calcular horas extra y sueldo extra
// Calcular ingreso total
// Calcular seguro social (10% del ingreso total)
// Calcular neto a recibir
// Mostrar los resultados

const read = require('prompt-sync')();
const write = console.log

function Ejercicio06() {
    
    let horasTrabajadas = parseFloat(read("Introduce las horas trabajadas en la semana: "));
    let tarifaNormal = 5;
    let tarifaExtra = tarifaNormal * 2;
    let horasNormales = 40;

    let sueldoNormal = Math.min(horasTrabajadas, horasNormales) * tarifaNormal; //Math.min: para asegurarnos de no exceder las 40 horas normales.
    let horasExtra = Math.max(0, horasTrabajadas - horasNormales); //Math.max: para asegurarse que las cantidades no sean negativas
    let sueldoExtra = horasExtra * tarifaExtra;

    let ingresoTotal = sueldoNormal + sueldoExtra;
    let seguroSocial = ingresoTotal * 0.10;
    let netoRecibir = ingresoTotal - seguroSocial;

    write("Horas extra: " , horasExtra);
    write("Sueldo extra: $" , sueldoExtra.toFixed(2));
    write("Ingreso total: $" , ingresoTotal.toFixed(2));
    write("Seguro social (10%): $" , seguroSocial.toFixed(2));
    write("Neto a recibir: $" , netoRecibir.toFixed(2));
}

Ejercicio06();
