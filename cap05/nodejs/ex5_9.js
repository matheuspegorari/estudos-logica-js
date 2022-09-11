const prompt = require("prompt-sync")()
const produto = prompt("Produto: ")
const num = Number(prompt("Nº de Etiquetas: "))

// Laço de repetição que faz num/2. Pois cada linha terá 2 etiquetas.

for (let i = 1; i <= num/2; i++){
    console.log(`${produto.padEnd(30,".")} ${produto.padEnd(30,".")} ${i}`)
}

// se a quantidade de etiquetas for impar, imprime mais uma etiqueta
if (num % 2 == 1) {
    console.log(produto)
}