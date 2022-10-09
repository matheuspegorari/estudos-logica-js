const frm = document.querySelector("form")
const respErros = document.querySelector("#outErros")
const respChances = document.querySelector("#outChances")
const respDica = document.querySelector("#outDica")

const erros = []
const sorteado = Math.floor(Math.random() * 100) + 1
const CHANCES = 6

frm.addEventListener("submit", (e) =>{
    e.preventDefault()

    const numero = Number(frm.inNumero.value)

    if (numero == sorteado) { // Primeiramente verifica se foi o numero sorteado
        respDica.innerText = `Parabéns!! Número sorteado: ${sorteado}`
        frm.btSubmit.disabled = true
        frm.btNovo.className = "exibe"
    } else { // Não começa-se os elses. - Verifica se o numero já foi jogado
        if (erros.includes(numero)) {
            alert(`Você já apostou neste numero ${numero}. Tente outro...`)
        } else { // Se não entra nos erros.
            erros.push(numero)
            const numErros = erros.length
            const numChances = CHANCES - numErros
            // exibe nro de erros, conteudo e nro de chances
            respErros.innerText = `${numErros} (${erros.join(" - ")})`
            respChances.innerText = numChances
            if (numChances == 0){ // se as chances acabam
                alert(`Suas chances acabaram ...O número sorteado era ${sorteado}`)
                frm.btSubmit.disabled = true
                frm.btNovo.className = "exibe"
                respDica.innerText = `Game over!! O número sorteado era ${sorteado}`
            } else {
                //utilizando ternario pra dar a dica
                const dica = numero < sorteado ? "maior" : "menor"
                respDica.innerText = `Dica: Tente um número ${dica} que ${numero}`
            }
        }
    }
    frm.inNumero.value = ""
    frm.inNumero.focus()
})

frm.btNovo.addEventListener("click", () =>{
    location.reload()
})