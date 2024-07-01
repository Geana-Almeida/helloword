const leia = require("readline-sync");

let numeros = []
let contadorPar = 0;
let contadorImpar = 0

for(let i = 0; i < 10; i++){
    numeros[i] = leia.questionInt(`Digite o ${i+1} numero: `, {limitMessage: "Numero invalido, informe um numero inteiro."});

    if(numeros[i] % 2 === 0){
        ++contadorPar
    }

    else{
        ++contadorImpar
    }
}

console.log(`\nTotal de numeros pares: ${contadorPar}`);
console.log(`Total de numeros impares: ${contadorImpar}`);