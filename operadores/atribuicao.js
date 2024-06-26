/*                                                  ENTRADA E SAIDA DE DADOS
const leia = require('readline-sync')

let quantidade;
let altura;

quantidade = leia.questionInt("Digite um valor do tipo inteiro: ");

console.log(" O valor inteiro digitado foi: " + quantidade);

altura = leia.questionFloat("\nDigite um valor do tipo Float: ", {limitMessage: 'Digite um numero float'});//limiteMessage responsavel pela tratativa de erro

console.log("O valor float digitado foi: " + altura);
*/

//                                                        OPERADORES

let x = 6;
let y = 2;
let z = 1;
let resul;

// x = y;
// console.log("Atribuição simples: " + x);

// resul = x + y;
// x +=y;
// console.log("\nAtribuição com soma (x = x + y): " + x + (x + resul) + "teste");


// x -= z;
// console.log("\nAtribuição com subtração (x = x -z): " + x);

x %= y;
console.log("\nAtribuição com o Módulo (x = x % y): " + x);