transacoes = []

function Transacao(operacao, valor) {

    this.operacao = operacao
    this.valor = valor

}

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

        const transacao = new Transacao(op.value, valor.value)

        transacoes.push(transacao)

        var linha = document.createElement('tr')
        linha.insertCell(0).innerHTML = data.value
        linha.insertCell(1).innerHTML = tipo_chave.value
        linha.insertCell(2).innerHTML = chave.value
        linha.insertCell(3).innerHTML = op.value
        linha.insertCell(4).innerHTML = agencia.value
        linha.insertCell(5).innerHTML = parseInt(valor.value)

        document.getElementById('tabela').appendChild(linha)
        document.getElementById('fazer_pix').disabled = false

        tipo_chave.value = ""
        chave.value = ""
        agencia.value = ""
        op.value = ""
        valor.value = ""
        data.value = ""

    }

}

function finalizar() {

    let relatorioFinal = document.getElementById("relatorio_final")

    if (relatorio_final.childElementCount > 0) {

        limpar_relatorio(relatorioFinal)

    }

    let qnt_transacoes = transacoes.length
    let valor_transacoes_recebidas = 0
    let valor_transacoes_enviadas = 0

    for (let i = 0; i < qnt_transacoes; i++) {

        if (transacoes[i].operacao == "Enviar") {

            valor_transacoes_enviadas += parseFloat(transacoes[i].valor)

        }
        else {

            valor_transacoes_recebidas += parseFloat(transacoes[i].valor)

        }
    }

    const saldo_final = valor_transacoes_recebidas - valor_transacoes_enviadas

    let valor_recebidos = document.createElement("p")
    let valor_enviados = document.createElement("p")
    let saldoFinal = document.createElement("p")

    valor_recebidos.innerHTML = `Valor total das transações recebidas: R$${valor_transacoes_recebidas.toFixed(2)}`
    valor_enviados.innerHTML = `Valor total das transações enviadas: R$${valor_transacoes_enviadas.toFixed(2)}`
    saldoFinal.innerHTML = `Saldo Total : R$${saldo_final.toFixed(2)}`

    relatorioFinal.appendChild(valor_recebidos)
    relatorioFinal.appendChild(valor_enviados)
    relatorioFinal.appendChild(saldoFinal)
}

function limpar_relatorio(relatorio_final) {

    while (relatorio_final.lastElementChild) {

        relatorio_final.removeChild(relatorio_final.lastElementChild)

    }

}