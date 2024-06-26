const leia = require('readline-sync');

let salario = leia.questionFloat('Qual é o seu salario?', {limitMessage: "Salario invalido, informe um valor real"});

let abono = leia.questionFloat('Qual o valor do seu abono?', {limitMessage: "Abono invalido, informe um valor real"});

let novoSalario = salario + abono;

console.log("O novo salario é: " + novoSalario);