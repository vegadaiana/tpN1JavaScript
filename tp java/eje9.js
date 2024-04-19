let frase = prompt("Ingresa una frase:");
frase = frase.toLowerCase();
let contadorA = 0;

for (let i = 0; i < frase.length; i++) {
    
    if (frase[i] === "a") {
        contadorA++;
    }
}
console.log("La letra 'a' aparece " + contadorA + " veces en la frase.");
