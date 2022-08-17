const frm = document.querySelector("form")
const resp = document.querySelector("h3")

frm.addEventListener("submit", (e) =>{
    e.preventDefault()

    const numero = Number(frm.inNumero.value)
    const sqrt = Math.sqrt(numero)

    if (Number.isInteger(sqrt)){
        resp.innerText = `A raiz quadrada é: ${sqrt}`
    } else {
        resp.innerText = `Não há raiz exata para ${numero}`
    }

})