function carregarAgencias() {

    fetch("https://brasilapi.com.br/api/banks/v1")

        .then(response => response.json())
        .then(dados => inserirAgencias(dados))
        .catch(error => console.error(error))

}

function inserirAgencias(dados) {

    let agencia = document.getElementById("agencia")

    for (i in dados) {
        const { name, code } = dados[i]

        let opcao = document.createElement('option')

        opcao.value = `${name}`
        opcao.innerHTML = `${name}`

        agencia.appendChild(opcao)
    }

}

function validar(valor) {

    if (valor.value.length > 0) {
        return true
    } else {
        return false
    }

}

function addPix() {

    var tipo_chave = document.getElementById('tipo_chave')
    var chave = document.getElementById('chave')
    var agencia = document.getElementById('agencia')
    var op = document.getElementById('op')
    var valor = document.getElementById('valor')
    var data = document.getElementById('data')

    if (validar(data) && validar(tipo_chave) && validar(chave) && validar(op)
        && validar(agencia) && validar(valor)) {

        var linha = document.createElement('tr')
        linha.insertCell(0).innerHTML = data.value
        linha.insertCell(1).innerHTML = tipo_chave.value
        linha.insertCell(2).innerHTML = chave.value
        linha.insertCell(3).innerHTML = op.value
        linha.insertCell(4).innerHTML = agencia.value
        linha.insertCell(5).innerHTML = parseInt(valor.value)

        document.getElementById('tabela').appendChild(linha)
        document.getElementById('finalizar').disabled = false

        tipo_chave.value = ""
        chave.value = ""
        agencia.value = ""
        op.value = ""
        valor.value = ""
        data.value = ""

    }

}