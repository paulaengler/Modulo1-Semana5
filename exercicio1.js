/*Crie um array chamado frutas contendo três frutas diferentes. Em seguida, imprima no console a segunda fruta do array.

Desafio: utilize a biblioteca prompt-sync para receber cada uma das 3 frutas.*/ 


const prompt = require("prompt-sync")();

let arrayFrutas = [];

for (let i = 0; i < 3; i++) {
    let index = i+1;
    let fruta = prompt(`Digite a ${index}ª fruta: `);
    arrayFrutas.push(fruta)
}

console.log(`A segunda fruta é: ${arrayFrutas[1]}`); 