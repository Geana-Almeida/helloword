const leia = require("readline-sync");

let nomeAluno = leia.question("Digite seu nome: ", {limitMessage: "Nome invalido"});

let nota1 = leia.questionFloat("\nPrimeira nota: ", {limitMessage: "A nota tem que ser um numero real"});

let nota2 = leia.questionFloat("\nSegunda nota: ", {limitMessage: "A nota tem que ser um numero real"});

let nota3 = leia.questionFloat("\nTerceira nota: ", {limitMessage: "A nota tem que ser um numero real"});

let nota4 = leia.questionFloat("\nQuarta nota: ", {limitMessage: "A nota tem que ser um numero real"});

let media = (nota1 + nota2 + nota3 + nota4) / 4;

console.log("\nA nota do/a aluno/a " + nomeAluno + " é: " + media.toFixed(1));