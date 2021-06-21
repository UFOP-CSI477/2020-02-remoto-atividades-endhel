function limparSelect(campo) {
    while (campo.lenght > 1) {
        campo.remove(1)
    }
}

function preencherSelectPaises(data) {
    let dados = document.getElementById("dados")
    limparSelect(dados)

    for (let index in data) {
        const { id, nome, localizacao, linguas } = data[index]

        let option = document.createElement("option")
        option.value = id
        option.innerHTML = `${nome.abreviado}-${localizacao.regiao.nome}-${linguas[0].nome}`

        dados.appendChild(option)

    }
}

function carregarDados() {
    fetch("https://servicodados.ibge.gov.br/api/v1/paises/{paises}")
        .then(response => response.json())
        .then(data => preencherSelectPaises(data))
        .catch(error => console.error(error))
}