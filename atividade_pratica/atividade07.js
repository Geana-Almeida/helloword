const leia = require("readline-sync");

let numero1, numero2, codigoOperacao

console.log("1 -- Soma");
console.log("2 -- Subtracao");
console.log("3 -- Multiplicacao");
console.log("4 -- Divisao");

numero1 = leia.questionFloat("Informe o primeiro numero: ", {limitMessage: "Numero invalido, por favor insira um numero real."});
numero2 = leia.questionFloat("Informe o primeiro numero: ", {limitMessage: "Numero invalido, por favor insira um numero real."})
codigoOperacao = leia.questionInt("Informe o codigo da operacao: ", {limitMessage: "O codigo tem que ser um numero inteiro de 1-6"});

switch(codigoOperacao){
    case 1:
        console.log(`${numero1.toFixed(1)} + ${numero2.toFixed(1)} = ${(numero1 + numero2).toFixed(1)}`);
        break;
    case 2:
        console.log(`${numero1.toFixed(1)} - ${numero2.toFixed(1)} = ${(numero1 - numero2).toFixed(1)}`);
        break;
    case 3:
        console.log(`${numero1.toFixed(1)} x ${numero2.toFixed(1)} = ${(numero1 * numero2).toFixed(1)}`);
        break;
    case 4:
        console.log(`${numero1.toFixed(1)} / ${numero2.toFixed(1)} = ${(numero1 / numero2).toFixed(1)}`);
        break;
    default:
        console.log("Informacao inválida.")
}

