/* Utilizando o array numeros do exercício anterior, calcule e imprima a soma de todos os elementos do array. 
Utilize o reduce para realizar a soma.*/

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

 let soma = numeros.reduce (function (soma, valorAtual) {
    return soma + valorAtual
    },0);
    
    console.log(soma);
