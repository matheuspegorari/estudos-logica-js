const numeros = [10,13,20,8,15]
//acumulador = acumulador
//num = elementos do array
//=> soma cada elemento (num) no acumulador
//0 é o valor inicial do acumulador
const soma = numeros.reduce((acumulador, num) => acumulador + num,0)
//mesmo sem o Valor Inicial ele funcionará. Mas boa prática colocar sempre
//pois se o vetor nao tiver dados ele irá dar erro.

console.log(`Soma = ${soma}`)

// outro exemplo

const amigos = [
    {nome: "Anya", idade: 20},
    {nome: "Bruno", idade: 17},
    {nome: "Cátia", idade: 25}
]

const somaAmigos = amigos.reduce((acum, amigo) => acum + amigo.idade, 0)
console.log(`A soma da idade dos amigos é ${somaAmigos}`)







