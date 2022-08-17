const frm = document.querySelector("form")
const resp = document.querySelector("h3")

// ouvinte do submit
frm.addEventListener("submit",(e) => {
    e.preventDefault()

    const horaBrasil = Number(frm.inHoraBrasil.value)
    let horaFranca = horaBrasil + 5
    if (horaFranca > 24) { // Se passar de 24 horas ele subtrai 24
        horaFranca -= 24
    }

    resp.innerText = `Hora na França: ${horaFranca.toFixed(2)}`



})