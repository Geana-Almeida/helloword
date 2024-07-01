const leia = require("readline-sync");

const vetorNumero = [2, 5, 1, 3, 4, 9, 7, 8, 10, 6];
let numeroDigitado = leia.questionFloat("Digite o numero que voce deseja encontrar: ", {limitMessage: "Numero invalido, insira um valor real."});
let verificarVetor = false;
let verificarIndice 

for(let i = 0; i < vetorNumero.length; i++){
    if( numeroDigitado === vetorNumero[i]){
        verificarVetor = true;
        verificarIndice = i
    }
}

if(verificarVetor === true){
    console.log(`O numero ${numeroDigitado} esta localizado na posicao: ${verificarIndice}`);
}

else{
    console.log(`O numero ${numeroDigitado} nao foi encontrado!`)
}
