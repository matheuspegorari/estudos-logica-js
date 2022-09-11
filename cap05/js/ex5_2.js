const frm = document.querySelector("form")
const resp = document.querySelector("h3")

frm.addEventListener("submit", (e) => {
    e.preventDefault()

    const num = Number(frm.inNumero.value)
    let resposta = `Entre ${num} e 1: \n`

    for (let i = num; i > 1; i = i-1){
        resposta = `${resposta}${i}, `
        
    }
    resposta = `${resposta}1`
    console.log(resposta)
    resp.innerText = resposta
})