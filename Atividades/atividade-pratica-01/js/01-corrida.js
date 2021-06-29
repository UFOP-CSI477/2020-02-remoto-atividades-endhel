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

class Competidor {
    constructor(largada, nome, tempo) {
        this.largada = largada
        this.nome = nome
        this.tempo = tempo
    }
}

function ordenar_competidores(tb) {

    const lista_competidores = []
    table = tb

    for (i = 1; i < table.rows.length; i++) {

        const competidor = new Competidor(table.rows[i].cells[0].innerHTML,
            table.rows[i].cells[1].innerHTML,
            table.rows[i].cells[2].innerHTML)

        if (lista_competidores.length == 0) {
            lista_competidores.push(competidor)
        }
        else {
            const tam = lista_competidores.length

            for (j = 0; j < tam; j++) {
                if (lista_competidores[j].tempo > table.rows[i].cells[2].innerHTML) {
                    lista_competidores.splice(j, 0, competidor)
                    break
                }
            }

            if (lista_competidores.length == tam) {
                lista_competidores.push(competidor)
            }
        }
    }

    return lista_competidores
}

function classificacaoFinal() {

    var tb = document.getElementById('competidores')
    var classificacao = document.getElementById('classificacao')

    competidores_ord = ordenar_competidores(tb)

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