const frm = document.querySelector("form")
const respNome = document.querySelector("span")
const respLista = document.querySelector("pre")

const pacientes = [] // declara o vetor global

frm.addEventListener("submit", (e) => {
    e.preventDefault()

    const nome = frm.inPaciente.value    //captura o nome
    pacientes.push(nome)                 //adiciona o paciente no final do vetor
    printaLista()
    frm.inPaciente.value = ""
    frm.inPaciente.focus()
})

// Litener no btUrgência
frm.btUrgencia.addEventListener("click", () => {
    // Verifica se as validações do form está ok, no caso "paciente = required"
    if (!frm.checkValidity()){
        alert("Informe o nome do paciente a ser atendido em caráter de Urgência")
        frm.inPaciente.focus()
        return
    }

    const nome = frm.inPaciente.value
    pacientes.unshift(nome)
    printaLista()
    frm.inPaciente.value = ""
    frm.inPaciente.focus()
})

frm.btAtender.addEventListener("click", () => {
    // se o vetor for 0
    if(pacientes.length == 0){
        alert("Não há pacientes para atender")
        frm.inPaciente.focus()
        return
    }
    const atender = pacientes.shift() // Remove do inicio da fila (e obtém o nome)
    respNome.innerText = atender 
    printaLista()

})

function printaLista(){
    let lista = ""
    pacientes.forEach((paciente, i) => (lista += `${i+1}. ${paciente}\n`))
    respLista.innerText = lista
}


