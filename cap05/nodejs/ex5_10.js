// Calcula parcelas, de modo que as primeiras 
// parcelas sejam numeros fixos e os centavos serão 
// calculados somente na última parcela
const prompt = require("prompt-sync")()
const valor = Number(prompt("Valor R$: "))
const num = Number(prompt("Nrº de Parcelas: "))
const valorParcelas = Math.floor(valor/num)
const valorFinal = valorParcelas + (valor % num)

for (let i = 1; i < num; i++){
    console.log(`${i}ª parcela: R$ ${valorParcelas.toFixed(2)}`)
}
console.log(`${num}ª parcela R$ ${valorFinal.toFixed(2)}`)