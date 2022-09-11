const frm = document.querySelector("form")
const resp = document.querySelector("pre")

frm.addEventListener("submit", (e) => {
    e.preventDefault()

    const numero =  Number(frm.inNumero.value)
    let resposta = "" // variavel string pra concatenar resposta

    //laço de 1 até 10
    for(let i = 1; i <= 10; i++){
        resposta = `${resposta} ${numero} x ${i} = ${numero*i}\n`
    }

    resp.innerText = resposta

})