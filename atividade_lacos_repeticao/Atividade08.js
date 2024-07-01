const leia = require("readline-sync");

const vetNumeros = [];
const vetIndiceImpar = [];
const vetNumerosPar = [];

let contadorIndice = 0;
let contadorPar = 0
let soma = 0, media;

for(let i = 0; i < 10; i++){
    vetNumeros[i] = leia.questionInt('Informe um numero inteiro: ', {limitMessage: "Numero invalido, insira um valor inteiro."});
    
    if(i % 2 === 1){
        vetIndiceImpar[contadorIndice] = vetNumeros[i]
        contadorIndice++
    }

    if(vetNumeros[i] % 2 === 0){
        vetNumerosPar[contadorPar] = vetNumeros[i]
        contadorPar++
    }

    soma += vetNumeros[i];
}

media = soma / vetNumeros.length;

console.log(`Elementos nos indices impares: \n${vetIndiceImpar}`);
console.log(`Elementos nos indices impares: \n${vetNumerosPar}`);
console.log(`Soma: ${soma}`);
console.log(`Media: ${media.toFixed(2)}`);