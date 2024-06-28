const leia = require("readline-sync");

let nomeDoador = leia.question("Digite o Nome do doador: ", {limitMessage: "Informe seu nome corretamente."});
let idadeDoador = leia.questionInt("Digite a Idade do doador: ", {limitMessage: "Sua idade tem que ser um numero inteiro"});
let doacao = leia.question("Primeira doacao de sangue? (sim) (nao):", {limitMessage: "Informe a resposta sim ou nao."}).toUpperCase()

if(doacao === "SIM"){
    verificarDoacao = true;
}else{
    verificarDoacao = false;
}

if(idadeDoador >= 18 && idadeDoador <= 59){
    console.log(`${nomeDoador} esta apto/a para doar sangue`);
}

else if(idadeDoador >= 60 && idadeDoador <= 69 && verificarDoacao === false){
    console.log(`${nomeDoador} esta apto/a para doar sangue`);
}

else{
    console.log(`${nomeDoador} nao esta apto/a para doar sangue`);
}