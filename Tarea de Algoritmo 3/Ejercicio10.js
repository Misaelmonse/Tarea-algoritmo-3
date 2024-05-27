//10.	El almacén “AlgoritmoX” tiene una promoción: a todos los trajes que tienen un precio superior a 200, 
//se les aplicará un descuento del 10% y al resto tendrán un descuento de solo $10 dólares. 
//Presentar el valor de cada traje con su respectivo valor, descuento y pago considerando el iva del 15%.

// Verificamos si el precio es mayor a 200
// Aplicamos un descuento del 10%
// Aplicamos un descuento fijo de $10
// Calculamos el IVA (15%) por cada traje
// Calculamos el total del IVA multiplicando el IVA por traje por la cantidad de trajes
// Calculamos el total de descuento multiplicando el descuento por la cantidad de trajes
// Calculamos el total a pagar (precio con descuento y IVA) por la cantidad de trajes
// Solicitamos al usuario el precio y la cantidad de trajes
// Verificamos si los valores ingresados son números válidos
// Calculamos descuentos y total para la cantidad de trajes ingresada

const read = require('prompt-sync')();
const write = console.log

function Ejercicio10() {
    let descuento = 0;
    let precioConDescuento = precio;

    if (precio > 200) {
        descuento = precio * 0.1;
        precioConDescuento = precio - descuento;
    } else {
        descuento = 10;
        precioConDescuento = precio - descuento;
    }

    let ivaPorTraje = precioConDescuento * 0.15;
    let ivaTotal = ivaPorTraje * cantidad;
    let descuentoTotal = descuento * cantidad;
    let totalPagar = (precioConDescuento + ivaPorTraje) * cantidad;

    return {
        precio: precio,
        descuento: descuentoTotal,
        iva: ivaTotal,
        total: totalPagar.toFixed(2)
    };
}

let precioTraje = parseFloat(read("Ingrese el precio del traje:"));
let cantidadTrajes = parseInt(read("Ingrese la cantidad de trajes:"));

if (isNaN(precioTraje) || precioTraje <= 0 || isNaN(cantidadTrajes) || cantidadTrajes <= 0) {
    write("Por favor, ingrese valores válidos para el precio y la cantidad de trajes.");
} else {
    let resultado = calcularDescuentoYTotal(precioTraje, cantidadTrajes);
    read("Precio unitario del traje: $" + resultado.precio.toFixed(2));
    raed("Descuento total aplicado: $" + resultado.descuento.toFixed(2));
    read("IVA total a pagar: $" + resultado.iva.toFixed(2));
    read("Total a pagar por", cantidadTrajes, "trajes (incluyendo IVA): $" + resultado.total);
}
Ejercicio10()