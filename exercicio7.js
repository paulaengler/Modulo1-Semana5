/* Utilizando o array numeros utilizado nos exercícios anteriores, crie um novo array chamado quadrados que contenha o quadrado de cada número do array numeros. 
Imprima o array quadrados no console. Use o método map para realizar a criação de um novo array.*/

const prompt = require("prompt-sync")();

numeros = [];

for (let i = 0; i < 5; i++) {
    let numero = prompt(`Digite o ${i+1}º número: `);
    numeros.push(parseInt(numero));
}

let quadrados = numeros.map (numeroAtual => Math.pow(numeroAtual,2));

console.log("Os números do array original são:");

console.log(numeros);

console.log("Os números ao quadrado do novo array são:");

console.log(quadrados);