const leia = require("readline-sync");

let salarioBruto = leia.questionFloat("Salario bruto: ", {limitMessage: "O valor do salario precisa ser um valor real"});
let adicionalNoturno = leia.questionFloat("\nAdicional noturno: ", {limitMessage: "O valor do adicional noturno precisa ser um valor real"});
let horasExtras = leia.questionFloat("\nHoras extras: ", {limitMessage: "A horas extras precisa ser um valor real"});
let descontos = leia.questionFloat("\nDesconto: ", {limitMessage: "O desconto precisa ser um valor real."})

let salarioLiquido = salarioBruto + adicionalNoturno + (horasExtras * 5) - descontos;

console.log("\nO salario liquido do funcionario é: " + salarioLiquido)