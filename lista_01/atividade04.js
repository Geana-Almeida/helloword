const leia = require("readline-sync");

let n1 = leia.questionFloat("Informe o primeiro numero: ", {limitMessage: "Numero invalido, Digite um numero real."});
let n2 = leia.questionFloat("\nInforme o segundo numero: ", {limitMessage: "Numero invalido, Digite um numero real."});
let n3 = leia.questionFloat("\nInforme o terceiro numero: ", {limitMessage: "Numero invalido, Digite um numero real."});
let n4 = leia.questionFloat("\nInforme o quarto numero: ", {limitMessage: "Numero invalido, Digite um numero real."});

let diferenca = (n1 * n2) - (n3 * n4);

console.log("A diferenca é: " + diferenca)