const numeros = [10,13,20,8,15]
//acumulador = acumulador
//num = elementos do array
//=> soma cada elemento (num) no acumulador
//0 é o valor inicial do acumulador
const soma = numeros.reduce((acumulador, num) => acumulador + num,0)


console.log(`Soma = ${soma}`)