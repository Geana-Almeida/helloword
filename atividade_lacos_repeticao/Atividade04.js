const leia = require("readline-sync");


let devBackEnd = 0, mulherFront = 0, homemDevMobileMaiorDeQuarentaAnos = 0, naoBinarioFullStackMenorDeTrintaAnos = 0 , numeroTotal = 0, media = 0, soma = 0;
let tamanhoVetor = 0;
let idade = []; 
let genero = []; 
let pessoaDesenvolvedora = [];
let cont = 0;
let res = "S";

while(res === "S"){
    tamanhoVetor++
    idade[cont] = leia.questionInt("Informe a idade do/a colaborador/a: ", {limitMessage: "Idade invalida, insira um valor inteiro"});
    
    console.log("\nIdentidade de Genero(Numero Inteiro):");
    console.log("1 -- Mulher Cis");
    console.log("2 -- Homem Cis");
    console.log("3 -- Nao Binario");
    console.log("4 -- Mulher Trans");
    console.log("5 -- Outros");

    genero[cont] = leia.questionInt("Informa o genero atraves do codigo de identidade: ", {limitMessage: "Codigo inválido, por favor inserir um valor inteiro"});

    while(genero[cont] > 5 || genero[cont] < 1){
        console.log("Codigo inexistente, por favor insira novamente: ");
        genero[cont] = leia.questionInt("Informa o genero atraves do codigo de identidade: ", {limitMessage: "Codigo inválido, por favor inserir um valor inteiro"});
    }


    console.log("\nPessoa Desenvolvedora (Numero Inteiro):");
    console.log("1 -- BackEnd");
    console.log("2 -- FrontEnd");
    console.log("3 -- Mobile");
    console.log("4 -- FullStack");

    pessoaDesenvolvedora[cont] = leia.questionInt("Informa o cargo da pessoa atraves do codigo: ", {limitMessage: "Codigo inválido, por favor inserir um valor inteiro"});
    
    while(pessoaDesenvolvedora[cont] > 4 || pessoaDesenvolvedora[cont] < 1){
        console.log("Codigo inexistente, por favor insira novamente: ");
        pessoaDesenvolvedora[cont] = leia.questionInt("Informa o cargo da pessoa atraves do codigo: ", {limitMessage: "Codigo inválido, por favor inserir um valor inteiro"});
    }

    cont++
    res = leia.question("Deseja continuar adicionando colaboradores?[s/n]: ").toUpperCase();
}

for(let i = 0; i < idade.length; i++){
    if(pessoaDesenvolvedora[i] === 1){
        devBackEnd++;
    }

    if((genero[i] === 1 || genero[i] === 4) && pessoaDesenvolvedora[i] === 2){
        mulherFront++
    }

    if((genero[i] === 2 || genero[i] === 5) && pessoaDesenvolvedora[i] === 3 && idade > 40){
        homemDevMobileMaiorDeQuarentaAnos++
    }

    if((genero[i] === 3 && pessoaDesenvolvedora[i] === 4) && idade < 30){
        naoBinarioFullStackMenorDeTrintaAnos++
    }

    soma += idade[i]

}

media = soma / idade.length;
numeroTotal = idade.length;




console.log(`\nTotal de pessoas desenvolvedoras BackEnd: ${devBackEnd}`);
console.log(`Total de Mulheres Cis e Trans desenvolvedoras FrontEnd: ${mulherFront}`);
console.log(`Total de Homens Cis e Tras desenvolvedores Mobile maiores de 40 anos: ${homemDevMobileMaiorDeQuarentaAnos}`);
console.log(`Total de Pessoas Nao Binarias desenvolvedoras FullStack menores de 30 anos:  ${naoBinarioFullStackMenorDeTrintaAnos}`)
console.log("O numero total de pessoas que responderam a pesquisa: " + numeroTotal);
console.log("A media de idade das pessoas que responderam a pesquisa: " + media.toFixed(2));
