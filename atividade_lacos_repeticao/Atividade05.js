const leia = require("readline-sync");

let numeros 
let soma = 0

do{
    numeros = leia.questionInt("Informe um numero: ", {limitMessage: "Numero invalido, insira um numero inteiro."});
    if(numeros > 0){
        soma += numeros
    }
}while(numeros != 0)

console.log(`A soma dos numeros positivos e: ${soma}`)