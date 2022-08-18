// Case pesqueiro. Cada pessoa custa 20 reais e tem direito a um peixe. 
// Se levar mais que um, será cobrado 12 R$ por peixe extra
const prompt = require("prompt-sync")()

const pessoas = Number(prompt("Nº de Pessoas: "))
const peixes = Number(prompt("Nº Peixes: "))
let pagar
if (peixes <= pessoas) {
    pagar = pessoas*20
} else {
    pagar = (pessoas*20) + ((peixes - pessoas)*12)
}
console.log(`Pagar R$: ${pagar.toFixed(2)}`)