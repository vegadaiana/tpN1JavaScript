var numero1 = parseFloat(prompt("Ingresa el primer número"));
var numero2= parseFloat(prompt("Ingresa el segundo número"));

if (numero1 > numero2) {
    console.log("El número mayor es: " + numero1);
} 
else if (numero2 > numero1) {
    console.log("El número mayor es: " + numero2);
} 
else {
    console.log("Los números son iguales.");
}
