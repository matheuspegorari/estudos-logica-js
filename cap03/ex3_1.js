// soma básica
const prompt = require("prompt-sync")()      // adiciona pacote de entrada de dados
const num1 = Number(prompt("1º número: "))   // lê os numeros
const num2 = Number(prompt("2º número: "))

const soma = num1+num2                       // processa os dados
console.log(`Soma é ${soma}`)                // exibe o resultado
