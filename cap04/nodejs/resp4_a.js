const prompt = require("prompt-sync")()

const numero = Number(prompt("Insira um numero: "))
const resp = numero % 2 == 0 ? "par" : "impar"
console.log(`${numero} é ${resp}`)
