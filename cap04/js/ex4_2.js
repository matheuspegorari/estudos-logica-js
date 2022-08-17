const frm = document.querySelector("form")
const resp = document.querySelector("h3")

//ouvinte do submit
frm.addEventListener("submit",(e) => {
    e.preventDefault()

    const nome = frm.inNome.value
    const masculino = frm.inMasculino.checked // retorna true ou false
    const altura = Number(frm.inAltura.value)

    const peso = masculino ? 22 * Math.pow(altura,2) : 21 * Math.pow(altura,2) // operador ternário
    //           condição         bloco                    else
    resp.innerText = `${nome}: Seu peso ideal é ${peso.toFixed(2)} kg`
})

frm.addEventListener("reset",() =>{
    resp.innerText = ""
})