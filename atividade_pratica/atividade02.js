const leia = require("readline-sync");

let numero = leia.questionInt("Digite um numero: ", {limitMessage: "O numero precisa ser real."});

if(numero % 2 == 0){
    if(numero >= 0){
        console.log(`O numero ${numero} e par e positivo!`);
    }
    else{
        console.log(`O numero ${numero} e par e negativo!`)
    }
}else{
    if(numero >= 0){
        console.log(`O numero ${numero} e impar e positivo!`);
    }
    else{
        console.log(`O numero ${numero} e impar e negativo!`)
    }
}