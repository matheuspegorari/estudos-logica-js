// referencia ao in e out
const frm = document.querySelector("form")
const resp1 = document.querySelector("#resp1")
const resp2 = document.querySelector("#resp2")

// listener no submit

frm.addEventListener("submit", (e) => {
    const medicamento = frm.inMed.value
    const preco = frm.inPreco.value
    const valorPromocional = Math.floor(preco * 2).toFixed(2)
    resp1.innerText = `Promoção de ${medicamento}`
    resp2.innerText = `Leve 2 por apenas R$ ${valorPromocional}`

    e.preventDefault()
})


