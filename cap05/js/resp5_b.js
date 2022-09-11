const frm = document.querySelector("form")
const resp = document.querySelector("h3")

frm.addEventListener("submit", (e) => {
    e.preventDefault()

    const inicial = Number(frm.inInicial.value)
    if (inicial < 2){
        alert("Não é possível começar com menos de 2(casal)");
    } else {
        let chinchilas = inicial
        const anos = Number(frm.inAnos.value)
        let resposta = ""

        resposta += `Ano 1: ${inicial} \n`
        for (let i = 1; i < anos; i++){
            chinchilas *= 3
            resposta += `Ano ${i+1}: ${chinchilas} \n`
        }   
        resp.innerText = resposta 
    }
    
    


})