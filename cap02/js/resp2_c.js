const frm = document.querySelector("form")
const resp1 = document.querySelector("#resp1")
const resp2 = document.querySelector("#resp2")

frm.addEventListener("submit",(e) => {
    const prod = frm.inProd.value
    const preco = frm.inPreco.value
    const precoMetade = preco/2
    const calc = (preco * 3) - precoMetade

    resp1.innerText = `${prod} - Promoção Leve 3 pague R$ ${calc.toFixed(2)}`
    resp2.innerText = `O 3º produto sai por apenas R$ ${precoMetade.toFixed(2)}`

    e.preventDefault()    
})

