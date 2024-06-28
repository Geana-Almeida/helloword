const leia = require("readline-sync");

let valorTotal, quantidadeProduto, codigoPedido

console.log("1 -- Cachorro Quente --> R$10.00");
console.log("2 -- X-Salada --> R$ 15.00");
console.log("3 -- X-Bacon --> R$ 18.00");
console.log("4 -- Bauru --> R$ 12.00");
console.log("5 -- Refrigerante --> R$ 8.00");
console.log("6 -- Suco de laranja --> R$ 13.00");

codigoPedido = leia.questionInt("Informe o codigo do pedido: ")
quantidadeProduto = leia.questionInt("Informe a quantidade do pedido: ")

switch (codigoPedido) {
    case 1:
        console.log("Produto: Cachorro Quente");
        valorTotal = quantidadeProduto * 10;
        console.log(`Valor total: R$ ${valorTotal.toFixed(2)}`);
        break

    case 2:
        console.log("Produto: X-Salada");
        valorTotal = quantidadeProduto * 15;
        console.log(`Valor total: R$ ${valorTotal.toFixed(2)}`);
        break

    case 3:
        console.log("Produto: X-Bacon");
        valorTotal = quantidadeProduto * 18;
        console.log(`Valor total: R$ ${valorTotal.toFixed(2)}`);
        break

    case 4:
        console.log("Produto: Bauru");
        valorTotal = quantidadeProduto * 12;
        console.log(`Valor total: R$ ${valorTotal.toFixed(2)}`);
        break

    case 5:
        console.log("Produto: Refrigerante");
        valorTotal = quantidadeProduto * 8;
        console.log(`Valor total: R$ ${valorTotal.toFixed(2)}`);
        break

    case 6:
        console.log("Produto: Suco de laranja");
        valorTotal = quantidadeProduto * 13;
        console.log(`Valor total: R$ ${valorTotal.toFixed(2)}`);
        break

    default:
        console.log("Opção invalida");
}
