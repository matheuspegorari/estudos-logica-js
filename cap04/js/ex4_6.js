const frm = document.querySelector("form")
const resp100 = document.querySelector("#out100")
const resp50 = document.querySelector("#out50")
const resp10 = document.querySelector("#out10")

frm.addEventListener("submit",(e) => {
    e.preventDefault()

    const saque = Number(frm.inValor.value)
    if (saque % 10 != 0) {
        alert(`Valor inválido para notas disponíveis: (10, 50, 100)`)
        frm.inValor.focus
        return
    }

    const notasCem =  Math.floor(saque / 100) 
    let resto = saque % 100 
    const notasCinquenta =  Math.floor(resto / 50) 
    resto = resto % 50 
    const notasDez = Math.floor(resto / 10) 
    console.log(`resto: ${resto} notasDez = ${notasDez} `)
    
    if (notasCem > 0){
        resp100.innerText = `Notas de R$ 100: ${notasCem}`
    }
    if (notasCinquenta > 0){
        resp50.innerText = `Notas de R$ 50: ${notasCinquenta}`
    }
    if (notasDez > 0){
        resp10.innerText = `Notas de R$ 10: ${notasDez}`
    }
})

