const prompt = require("prompt-sync")();

numeros = [];

for (let i = 0; i < 5; i++) {
    let numero = prompt(`Digite o ${i+1}º número: `);
    numeros.push(parseInt(numero));
}

let pares = numeros.filter (numeroAtual => numeroAtual % 2 === 0);

console.log("Os números do array original são:");

console.log(numeros);

console.log("Os números pares do novo array são:");

console.log(pares);



