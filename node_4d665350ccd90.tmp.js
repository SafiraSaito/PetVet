var nome = "Lucas Silva"
var idade = "25"

console.log ("Seu nome é:" + nome + "e sua idade é:" + idade)

let bebida = "chá";
let valor;

switch (bebida) {
    case "café":
        valor = 3.00;
        console.log(Pedido de café realizado. Valor a pagar: R${valor});
        break;
    case "leite":
        valor = 2.50;
        console.log(Pedido de leite realizado. Valor a pagar: R${valor});
        break;
    case "chá":
        valor = 2.00;
        console.log(Pedido de chá realizado. Valor a pagar: R${valor});
        break;
    default:
        console.log("A bebida selecionada deve ser café, leite ou chá. Tente novamente.");
        break;
}