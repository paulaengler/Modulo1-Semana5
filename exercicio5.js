/* Crie um novo array chamado numerosOrdenados contendo os mesmos números do array numeros. 
Em seguida, ordene esse novo array em ordem crescente e imprima-o no console. */

const prompt = require("prompt-sync")();

numeros = [];
numerosOrdenados = [];

for (let i = 0; i < 5; i++) {
    let numero = prompt(`Digite o ${i+1}º número: `);
    numeros.push(parseInt(numero));
}

numerosOrdenados = Array.from(numeros);

numerosOrdenados.sort((a,b) => a - b);

console.log("Os números do array original são:");

console.log(numeros);

console.log("Os números do array ordenados são:");

console.log(numerosOrdenados);