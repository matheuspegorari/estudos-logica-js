const frm = document.querySelector("form")
const resp1 = document.querySelector("#outResp1")
const resp2 = document.querySelector("#outResp2")

// Inicializa
let resposta = ""
let numContas = 0
let valTotal = 0

frm.addEventListener("submit", (e) => {
    e.preventDefault()

    const descricao = frm.inDescricao.value
    const valor = Number(frm.inValor.value)
    numContas++

    valTotal += valor
    resposta = resposta + descricao + " - R$ " + valor.toFixed(2) + "\n"
    resp1.innerText = `${resposta} -------------------------------------`
    resp2.innerText = `${numContas} Conta(s) - Total R$: ${valTotal.toFixed(2)} \n  Valor que Matheus paga: R$ ${(valTotal / 3).toFixed(2)}`

    frm.inDescricao.value = ""
    frm.inValor.value = ""
    frm.inDescricao.focus()



})