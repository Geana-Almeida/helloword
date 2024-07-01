const leia = require("readline-sync");

let matrizNotas = new Array(4);
let mediaAlunos = []
let media;
let soma;

for(let i = 0; i < 10; i++){
    matrizNotas[i] = Array(4); 
}

// console.log(matrizNotas[0].length)

for(let i = 0; i < matrizNotas.length; i++){
    media = 0;
    soma = 0;
    for(let y = 0; y < matrizNotas[0].length; y++){
        matrizNotas[i][y] = leia.questionFloat(`Informe a nota do ${i+1} aluno : `, {limitMessage: "Nota invalida, insira um valor real."})

        soma += matrizNotas[i][y];
    }
    media = soma / matrizNotas[i].length;
    mediaAlunos[i] = media.toFixed(1);
}

console.log(`Medias dos alunos ${mediaAlunos}`)