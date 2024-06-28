const leia = require('readline-sync');

let a = leia.questionInt("Digite o numero A: ", {limitMessage: "O numero precisa ser um valor inteiro."});
let b = leia.questionInt("Digite o numero B: ", {limitMessage: "O numero precisa ser um valor inteiro."});
let c = leia.questionInt("Digite o numero C: ", {limitMessage: "O numero precisa ser um valor inteiro."});

if(a + b > c){
    console.log(`${a} + ${b} = ${a + b} > ${c}`)
    console.log("A Soma de A + B e Maior do que C");
}else if(a + b < c){
    console.log(`${a} + ${b} = ${a + b} < ${c}`)
    console.log("A soma de A + B e Menor do que C");
}else{
    console.log(`${a} + ${b} = ${a + b} = ${c}`)
    console.log("A soma de A + B e Igual a C");
}