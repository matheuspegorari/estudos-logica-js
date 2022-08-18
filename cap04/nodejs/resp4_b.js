const prompt = require("prompt-sync")()

const velPermitida = Number(prompt("Velocidade Permitida: "))
const velCondutor = Number(prompt("Velocidade Condutor: "))
resp = velCondutor >= velPermitida * 1.2 ? "grave" : velCondutor > velPermitida ? "Leve" : "N/A"
console.log(`Infração: ${resp} `)

// if(velCondutor >= velPermitida * 1.2){
//     console.log("Grave")
// } else if (velCondutor > velPermitida) {
//     console.log("Leve")
// } else {
//     console.log("Sem multa")
// }
