const prompt = require("prompt-sync")()

const valorMoeda = Number(prompt("Valor R$ : "))
let valorTroco

if (valorMoeda >= 3){    
    valorTroco = valorMoeda - 3
    console.log(`Tempo 120 min /  Troco R$ ${valorTroco.toFixed(2)}`)
} else if(valorMoeda >= 1.75){
    valorTroco = valorMoeda - 1.75
    console.log(`Tempo 60 min /  Troco R$ ${valorTroco.toFixed(2)}`)
} else {
    valorTroco = valorMoeda - 1
    console.log(`Tempo 30 min /  Troco R$ ${valorTroco.toFixed(2)}`)
}   