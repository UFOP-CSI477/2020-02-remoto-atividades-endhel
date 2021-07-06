let lista_competidores = []

class Competidor {

    constructor(largada, nome, tempo) {

        this.largada = largada
        this.nome = nome
        this.tempo = tempo

    }

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

        const competidor = new Competidor(qntLinhas, nome.value, tempo.value)

        lista_competidores.push(competidor)

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

function ordenar_competidores() {

    lista_competidores.sort(

        function (competidor_1, competidor_2) {

            if (competidor_1.tempo < competidor_2.tempo) {

                return -1

            } else if (competidor_1.tempo > competidor_2.tempo) {

                return 1

            } else {

                return 0

            }

        }

    );

}

function classificacaoFinal() {

    var tb = document.getElementById('competidores')
    var classificacao = document.getElementById('classificacao')

    enabledButtons()

    ordenar_competidores()

    for (i = 0; i < competidores_ord.length; i++) {

        var linha = classificacao.insertRow(i + 1)

        var cellPosicao = linha.insertCell(0)
        var cellLargada = linha.insertCell(1)
        var cellNome = linha.insertCell(2)
        var cellTempo = linha.insertCell(3)
        var cellResultado = linha.insertCell(4)

        cellPosicao.innerHTML = i + 1
        cellLargada.innerHTML = competidores_ord[i].largada
        cellNome.innerHTML = competidores_ord[i].nome
        cellTempo.innerHTML = competidores_ord[i].tempo

        if (i <= 1) {

            cellResultado.innerHTML = 'Vencedor(a)!'

        }

        else {

            cellResultado.innerHTML = '-'

        }

    }

}

function disabledButtons() {

    const bt_resultado = document.getElementById('resultados')
    bt_resultado.disabled = false

    const bt_inserir = document.getElementById('inserir')
    bt_inserir.disabled = false

}

function enabledButtons() {

    const bt_resultado = document.getElementById('resultados')
    bt_resultado.disabled = true

    const bt_inserir = document.getElementById('inserir')
    bt_inserir.disabled = true

}

function resetTables() {

    var tb = document.getElementById('competidores')
    var classificacao = document.getElementById('classificacao')

    tam = tb.rows.length

    for (i = 1; i < tam; i++) {

        tb.deleteRow(1)
        classificacao.deleteRow(1)

    }

    disabledButtons()

}