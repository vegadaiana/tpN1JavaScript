var numero = prompt("Escribe un número");
if (numero % 2 === 0 || numero % 3 === 0 || numero % 5 === 0 || numero % 7 === 0) {

    if (numero % 2 === 0) {
        console.log("Es divisible por 2.");
    }
    if (numero % 3 === 0) {
        console.log("Es divisible por 3.");
    }
    if (numero % 5 === 0) {
        console.log("Es divisible por 5.");
    }
    if (numero % 7 === 0) {
        console.log("Es divisible por 7.");
    }
} else {
    console.log("El número " + numero + " no es divisible por ninguno de los cuatro.");
}
