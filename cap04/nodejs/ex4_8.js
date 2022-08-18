const prompt = require("prompt-sync")()

const valor = Number(prompt("Valor da Compra R$: "))
const aux = Math.floor(valor/20) // variavel auxiliar para calcular o numero de parcelas sem condições
const parcelas = aux == 0 ? 1 : aux > 6 ? 6 : aux
/* Operador ternário em IF ELSE
let parcelas
if (aux == 0){
    parcelas = 1
} else if (aux > 6) {
    parcelas = 6
} else {
    parcelas = aux
}
*/
const valorParcela = valor / parcelas

console.log(`Pode pagar em ${parcelas} de R$ ${valorParcela.toFixed(2)}`)
