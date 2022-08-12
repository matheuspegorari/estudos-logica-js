const frm = document.querySelector("form")
const resp = document.querySelector("h3")

frm.addEventListener("submit",(e) =>{
    const valor = frm.inValor.value
    const tempo = frm.inTempo.value
    const calc = Math.ceil(tempo / 15) * valor

    resp.innerText = `Valor a Pagar R$ ${calc.toFixed(2)}`

    e.preventDefault()
})