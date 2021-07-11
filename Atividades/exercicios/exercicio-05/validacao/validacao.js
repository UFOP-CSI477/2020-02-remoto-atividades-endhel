function validar() {
    nome = document.dados.nome.value
    endereco = document.dados.endereco.value
    idade = document.dados.idade.value
    if (nome == "" || endereco == "" || cpf == "") {
        window.alert('Verifique se há algum campo vazio!')
    }
}