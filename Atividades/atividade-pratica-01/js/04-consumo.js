let veiculos = [];

function Veiculo(combustivel, quilometros, desempenho) {
    this.combustivel = combustivel
    this.quilometros = quilometros
    this.desempenho = desempenho
}

function validar(combustivel, quilometros) {

    if (isNaN(parseInt(combustivel)) || isNaN(parseInt(quilometros))) {

        window.alert('Por favor, preencha os campos corretamente!')
        return false
    }

    return true
}


function carregarVeiculos() {

    let combustivel = document.getElementById('combustivel').value
    let quilometros = document.getElementById('quilometros').value
    let desempenho = (parseFloat(quilometros) / parseFloat(combustivel)).toFixed(2)

    if (validar(combustivel, quilometros)) {

        const veiculo = new Veiculo(combustivel, quilometros, desempenho)

        veiculos.push(veiculo)

        qnt_veiculos = veiculos.length

        var veiculos_salvos = document.getElementById('tabela')

        var linha = veiculos_salvos.insertRow(qnt_veiculos)
        linha.insertCell(0).innerHTML = qnt_veiculos
        linha.insertCell(1).innerHTML = combustivel
        linha.insertCell(2).innerHTML = quilometros
        linha.insertCell(3).innerHTML = desempenho

    }

    document.getElementById("combustivel").value = ""
    document.getElementById("quilometros").value = ""

}

function finalizar() {

    const relatorio_final = document.getElementById("relatorio_final");

    if (relatorio_final.childElementCount == 0) {
        if (veiculos.length == 0) {
            window.alert('Não há nenhum veículo registrado na página!')
        } else {

            const qnt_veiculos = veiculos.length;

            let qnt_combustivel = 0
            let km_total = 0

            for (let i = 0; i < qnt_veiculos; i++) {
                qnt_combustivel += parseFloat(veiculos[i].combustivel);
                km_total += parseFloat(veiculos[i].quilometros);
            }

            media_combustivel = qnt_combustivel / qnt_veiculos;
            media_km = km_total / qnt_veiculos;
            media_desempenho = km_total / qnt_combustivel;


            let relatorioFinal = document.getElementById("relatorio_final");

            let qntCombustivel = document.createElement("p");
            let kmTotal = document.createElement("p");
            let mediaCombustivel = document.createElement("p");
            let mediaKm = document.createElement("p");
            let mediaDesempenho = document.createElement("p");

            qntCombustivel.innerHTML = `Quantidade total de combustível utilizada: ${qnt_combustivel.toFixed(1)}`;
            kmTotal.innerHTML = `Quantidade total de quilômetros rodados: ${km_total.toFixed(1)}`;
            mediaCombustivel.innerHTML = `Média de consumo de combustível: ${media_combustivel.toFixed(1)}`;
            mediaKm.innerHTML = `Média de quilômetros rodados: ${media_km.toFixed(1)}`;
            mediaDesempenho.innerHTML = `Média de desempenho em quilômetros por litro (km/l): ${media_desempenho.toFixed(2)}`;

            relatorioFinal.appendChild(qntCombustivel);
            relatorioFinal.appendChild(kmTotal);
            relatorioFinal.appendChild(mediaCombustivel);
            relatorioFinal.appendChild(mediaKm);
            relatorioFinal.appendChild(mediaDesempenho);

        }

    }

}

function limpar() {
    document.getElementById("combustivel").value = ""
    document.getElementById("quilometros").value = ""

    veiculos = [];

    const relatorio_final = document.getElementById("relatorio_final");

    if (relatorio_final.childElementCount > 0) {
        while (relatorio_final.lastElementChild) {
            relatorio_final.removeChild(relatorio_final.lastElementChild);
        }
    }

    var tb = document.getElementById('tabela')

    tam = tb.rows.length

    for (i = 1; i < tam; i++) {
        tb.deleteRow(1)
    }
}
