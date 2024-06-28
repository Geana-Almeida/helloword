const leia = require("readline-sync");

let nomeColaborador, salario, codigoCargo

console.log("1 -- Gerente --> 10%");
console.log("2 -- Vendedor --> 7%");
console.log("3 -- Supevisor --> 9%");
console.log("4 -- Motorista --> 6%");
console.log("5 -- Estoquista --> 5%");
console.log("6 -- Tecnico de TI --> 8%");

nomeColaborador = leia.question("Nome do colaborador: ");
codigoCargo = leia.questionInt("Informe o codigo do cargo: ", {limitMessage: "Informe um número inteiro de 1-6"});
salario = leia.questionFloat("Informe o salario do colaborador: ", {limitMessage: "Informe o salario com valores reais."});



switch(codigoCargo){
    case 1:
        salario = salario + (0.10 * salario)
        console.log(`Nome do colaborador: ${nomeColaborador}`);
        console.log(`Cargo: Gerente`);
        console.log(`Salario: R$ ${salario.toFixed(2)}`)
        break;

    case 2:
        salario = salario + (0.07 * salario)
        console.log(`Nome do colaborador: ${nomeColaborador}`);
        console.log(`Cargo: Vendedor`);
        console.log(`Salario: R$ ${salario.toFixed(2)}`)
        break;

    case 3:
        salario = salario + (0.09 * salario)
        console.log(`Nome do colaborador: ${nomeColaborador}`);
        console.log(`Cargo: Supervisor`);
        console.log(`Salario: R$ ${salario.toFixed(2)}`)
        break;

    case 4:
        salario = salario + (0.06 * salario)
        console.log(`Nome do colaborador: ${nomeColaborador}`);
        console.log(`Cargo: Motorista`);
        console.log(`Salario: R$ ${salario.toFixed(2)}`)
        break;

    case 5:
        salario = salario + (0.05 * salario)
        console.log(`Nome do colaborador: ${nomeColaborador}`);
        console.log(`Cargo: Estoquista`);
        console.log(`Salario: R$ ${salario.toFixed(2)}`)
        break;

    case 6:
        salario = salario + (0.08 * salario)
        console.log(`Nome do colaborador: ${nomeColaborador}`);
        console.log(`Cargo: Tecnico de TI`);
        console.log(`Salario: R$ ${salario.toFixed(2)}`)
        break;

    default:
        console.log("Opcao invalida.")
}