const leia = require("readline-sync");

let idade = leia.questionInt("Informe uma idade: ", {limitMessage: "Idade invalida, insira um valor inteiro."});
let contMenorDeVinteEUm = 0;
let contMaiorDeCinquenta = 0;

while(idade >= 0){
    if(idade < 21){
        contMenorDeVinteEUm++
    }else if(idade > 50){
        contMaiorDeCinquenta++
    }
    idade = leia.questionInt("Informe uma idade: ", {limitMessage: "Idade invalida, insira um valor inteiro."});
}

console.log(`\nTotal de pessoas menores de 21 anos: ${contMenorDeVinteEUm}`);
console.log(`Total de pessoas maiores de 50 anos: ${contMaiorDeCinquenta}`);