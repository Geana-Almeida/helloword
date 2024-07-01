const leia = require("readline-sync");

let matrizInteiros = new Array(3);
let diagonalPrincipal = [];
let diagonalSecundaria = [];
let somaDiagonalPrincipal = 0
let somaDiagonalSecundario = 0

for (let indiceLinha = 0; indiceLinha < matrizInteiros.length; indiceLinha++){
    matrizInteiros[indiceLinha] = Array(3);
}


for (let indiceLinha = 0; indiceLinha < matrizInteiros.length; indiceLinha++){
  
    for (let indiceColuna = 0; indiceColuna < matrizInteiros.length; indiceColuna++){
      
      matrizInteiros[indiceLinha][indiceColuna] = leia.questionInt(`Digite o numero do elemento [${indiceLinha}][${indiceColuna}]: `);
  
      if(indiceColuna === indiceLinha){
        diagonalPrincipal[indiceLinha] = matrizInteiros[indiceLinha][indiceColuna]
        somaDiagonalPrincipal += matrizInteiros[indiceLinha][indiceColuna]
      }

      if(indiceLinha + indiceColuna === matrizInteiros.length - 1){
        diagonalSecundaria[indiceLinha] = matrizInteiros[indiceLinha][indiceColuna];
        somaDiagonalSecundario += matrizInteiros[indiceLinha][indiceColuna]
      }
    }
    
}


console.table(matrizInteiros);
console.log(`Elementos da Diagonal Principal: ${diagonalPrincipal}`);
console.log(`Elementos da Diagonal Secundaria: ${diagonalSecundaria}`)
console.log(`Soma dos elementos da Diagonal Principal: ${somaDiagonalPrincipal}`);
console.log(`Soma dos elementos da Diagonal Secundaria: ${somaDiagonalSecundario}`);  
