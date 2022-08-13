const prompt = require("prompt-sync")()
// Calcula gasto de ração

const pesoKg = prompt("Peso da ração (kg): ")
const pesoGr = pesoKg * 1000
const consumo = prompt("Consumo diário (gr): ")
const dias = prompt("Duração (dias): ")

const gastoTotal = consumo * dias

const sobra = pesoGr - gastoTotal 

console.log(`Sobra ${sobra}gr`)

