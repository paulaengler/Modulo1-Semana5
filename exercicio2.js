const prompt = require("prompt-sync")();

let arrayFrutas = [];

for (let i = 0; i < 3; i++) {
    let index = i+1;
    let fruta = prompt(`Digite a ${index}ª fruta: `);
    arrayFrutas.push(fruta)
}

console.log(`A segunda fruta é: ${arrayFrutas[1]}`); 

let novaFruta;

novaFruta = prompt(`Digite o nome da nova fruta: `); 

arrayFrutas.push(novaFruta);

arrayFrutas.shift();

console.log(arrayFrutas);