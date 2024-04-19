let frase = prompt("Ingresa una frase:");
frase = frase.toLowerCase();
let contadorVocales = 0;
for (let i = 0; i < frase.length; i++) {
    const caracter = frase[i];
    if ("aeiou".includes(caracter)) {
        contadorVocales++;
    }
}
console.log("En la frase ingresada, hay " + contadorVocales + " vocales.");
