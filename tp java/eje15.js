// Bloque de entrada de datos e inicialización de variables
let num1 = Number.parseInt(prompt("Introduce el primer número"));
let num2 = Number.parseInt(prompt("Introduce el segundo número"));

// Función para encontrar los divisores de un número
function encontrarDivisores(numero) {
    let divisores = [];
    for (let i = 1; i <= numero; i++) {
        if (numero % i === 0) {
            divisores.push(i);
        }
    }
    return divisores;
}

// Encontrar los divisores de ambos números
const divisoresNum1 = encontrarDivisores(num1);
const divisoresNum2 = encontrarDivisores(num2);

// Encontrar los divisores comunes
const divisoresComunes = divisoresNum1.filter(divisor => divisoresNum2.includes(divisor));

// Mostrar los divisores comunes en pantalla
if (divisoresComunes.length > 0) {
    console.log(`Los divisores comunes de ${num1} y ${num2} son: ${divisoresComunes.join(", ")}`);
} else {
    console.log(`No hay divisores comunes entre ${num1} y ${num2}.`);
}


