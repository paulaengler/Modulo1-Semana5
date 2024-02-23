/* Crie um array chamado pares que contenha apenas os números pares do array numeros criado nos exercícios anteriores. 
Em seguida, imprima esse novo array no console. Utilize o método filter para realizar a operação de filtragem.*/

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



