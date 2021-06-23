function competidor(nome, tempo) {

    this.nome = nome
    this.tempo = tempo

}

function validar(nome, tempo) {

    competidor = nome.value
    tempo_competidor = tempo.value

    if (competidor == "" || isNaN(parseInt(tempo_competidor))) {

        window.alert('Por favor, preencha os campos corretamente!')
        nome.focus()
        return false
    }

    return true

}

function carregarDados(nome, tempo) {

    if (validar(nome, tempo)) {

        var qntLinhas = document.getElementById('competidores').rows.length

        if (qntLinhas <= 6) {

            var tb = document.getElementById('competidores')
            var linha = tb.insertRow(qntLinhas)

            var cellLargada = linha.insertCell(0)
            var cellNome = linha.insertCell(1)
            var cellTempo = linha.insertCell(2)

            cellLargada.innerHTML = qntLinhas
            cellNome.innerHTML = nome.value
            cellTempo.innerHTML = tempo.value

            nome.value = ""
            tempo.value = ""

        } else {

            window.alert('O número máximo de competidores foi excedido!')


        }


    }

}