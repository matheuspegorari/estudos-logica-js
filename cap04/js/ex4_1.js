const frm = document.querySelector("form")
const resp1 = document.querySelector("h3")
const resp2 = document.querySelector("h4")

//cria o ouvinte de evento, no submit

frm.addEventListener("submit",(e) =>{
    e.preventDefault()                // evita o envio do form (refresh da página)
    const nome = frm.inNome.value     // obtém valores do form
    const nota1 = Number(frm.inNota1.value)
    const nota2 = Number(frm.inNota2.value)
    const media = (nota1 + nota2)/2   // calcula a média
    resp1.innerText = `Média das Notas ${media.toFixed(2)}`
    
    //condição
    if(media >= 7) {
        resp2.innerText = `Parabéns ${nome}! Foi aprovado(a)!`
        resp2.style.color = "blue"
    } else if (media >= 4) {
        resp2.innerText =  `Atenção ${nome}. Você está em exame.`
        resp2.style.color = "green"
    } else {
        resp2.innerText =  `Ops ${nome}... Você foi reprovado(a).`
        resp2.style.color = "red"
    }
})