/* Crie um array chamado numeros contendo cinco números inteiros. Utilize um loop for para imprimir cada número do array no console.

Desafio: utilize a biblioteca prompt-sync para receber cada um dos 5 números.*/

const prompt = require("prompt-sync")();

numeros = [];

for (let i = 0; i < 5; i++) {
    let numero = prompt(`Digite o ${i+1}º número: `);
    numeros.push(parseInt(numero));
}

console.log("Os números do array são:");

for (let j = 0; j < numeros.length; j++) {
    console.log(numeros[j]);
 }


