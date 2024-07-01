const leia = require("readline-sync");

let numeros
let media = 0
let cont = 0

do{
    numeros = leia.questionInt("Informe um numero: ", {limitMessage: "Numero invalido, insira um numero inteiro."});
    if(numeros % 3 === 0){
        media += numeros
        cont++
    }
}while(numeros != 0)

console.log(`A media de todos os numeros multiplos de 3 e: ${(media/cont).toFixed(2)}`)
console.log(media);
console.log(cont);