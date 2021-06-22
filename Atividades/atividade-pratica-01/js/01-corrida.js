function validar(nome, tempo) {

    competidor = nome.value
    tempo_competidor = tempo.value

    if (competidor == "" || isNaN(parseInt(tempo_competidor))) {
        window.alert('Por favor, preencha os campos corretamente!')
        nome.focus()
        return false
    }

    nome.value = ""
    tempo.value = ""

    return true

}

function carregarDados() {

    if (validar(document.dados.nome, document.dados.tempo)) {
        window.alert('teste')
    }

}