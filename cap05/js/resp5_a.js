const frm = document.querySelector("form")
const resp = document.querySelector("h3")

frm.addEventListener("submit",(e) => {
    e.preventDefault()

    const fruta = frm.inFruta.value
    const num = Number(frm.inNumber.value)
    let resposta = ""
    for (let i = 1; i < num; i++){
        resposta += `${fruta} * `              
    }
    resposta += `${fruta}` 

    resp.innerText = resposta
})