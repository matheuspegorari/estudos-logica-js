const frm = document.querySelector("form")
const resp = document.querySelector("h3")

frm.addEventListener("submit",(e) => {
    e.preventDefault()

    num = Number(frm.inNumero.value)
    let acumuladorStr = `Divisores de ${num}: `
    let soma = 0 

    for (let i = 1; i < num; i++){
        if (num % i == 0){
            acumuladorStr += `${i}, `
            soma += i
        }
    }
    acumuladorStr += `Soma: ${soma}\n`
    if (soma == num){
        acumuladorStr += `${num} é um número perfeito!`
    } else {
        acumuladorStr += `${num} não é um número perfeito.`
    }
    resp.innerText = acumuladorStr
    console.log(soma)

})