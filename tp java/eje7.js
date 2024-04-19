let numero1 = parseFloat(prompt("Ingresa el primer número:"));
let numero2 = parseFloat(prompt("Ingresa el segundo número:"));
let numero3 = parseFloat(prompt("Ingresa el tercer número:"));

if (numero1 > numero2 && numero1 > numero3) {
    console.log("El mayor número es: " + numero1);
} 
else if (numero2 > numero1 && numero2 > numero3) {
    console.log("El mayor número es: " + numero2);
} 
else if (numero3 > numero1 && numero3 > numero2) {
    console.log("El mayor número es: " + numero3);
} 
else {
    console.log("Los números son iguales.");
}
