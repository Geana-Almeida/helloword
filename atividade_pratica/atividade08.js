const leia = require("readline-sync");

let saldo, saque, Deposito, opcaoServico

saldo = 1000.00

console.log("1 -- Saldo");
console.log("2 -- Saque");
console.log("3 -- Deposito");

opcaoServico = leia.questionInt("Qual o servico que deseja de 1-3: ", {limitMessage: "Informacao invalida, por favor insira um numero de 1-3"});


switch(opcaoServico){
    case 1:
        console.log("Operacao - Saldo");
        console.log(`Saldo: R$ ${saldo}`);
        break;
    case 2: 
        console.log("Operacao - Saque");
        saque = leia.questionFloat("Quanto deseja sacar:  ", {limitMessage: "Informacao invalida, por favor insira um valor real."});
        if(saque > saldo || saque <= 0){
            console.log("Saldo Insuficiente ou valor do saque negativo.");
        }
        else{
            saldo = saldo - saque
            console.log(`Novo saldo: ${saldo}`)
        }
        break;

    case 3:
        console.log("Operacao - Deposito");
        Deposito = leia.questionFloat("Informe o valor que deseja depositar: ", {limitMessage: "Valor invalido, por favor inserir um valor real"})
        if(Deposito <= 0){
            console.log("Valor invalido.")
            break
        }
        saldo = saldo + Deposito
        console.log(`Novo saldo: ${saldo}`)
        break

    default:
        console.log("Operação Invalida!")
}