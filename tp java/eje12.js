let frase = prompt("Ingresa una frase:");
frase = frase.toLowerCase();
let contadorVocales = {
    a: 0,
    e: 0,
    i: 0,
    o: 0,
    u: 0
};
for (let i = 0; i < frase.length; i++) {
    const caracter = frase[i];
    if ("aeiou".includes(caracter)) {
        contadorVocales[caracter]++;
    }
}
console.log("Cantidad de veces que aparecen las vocales:");
console.log("a: " + contadorVocales.a);
console.log("e: " + contadorVocales.e);
console.log("i: " + contadorVocales.i);
console.log("o: " + contadorVocales.o);
console.log("u: " + contadorVocales.u);
