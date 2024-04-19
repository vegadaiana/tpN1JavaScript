let frase = prompt("Ingresa una frase:");
frase = frase.toLowerCase();
let contadorVocales = 0;
let vocalesEncontradas = "";
for (let i = 0; i < frase.length; i++) {
    const caracter = frase[i];
    if ("aeiou".includes(caracter)) {
        contadorVocales++;
        vocalesEncontradas += caracter + " ";
    }
}
if (contadorVocales > 0) {
    console.log("Las vocales encontradas en la frase son: " + vocalesEncontradas);
} else {
    console.log("No se encontraron vocales en la frase.");
}
