function validar() {
    nome = document.dados.nome.value
    endereco = document.dados.endereco.value
    cpf = document.dados.cpf.value
    rg = document.dados.rg.value
    dtnasc = document.dados.dtnasc.value
    natural = document.dados.naturalidade.value
    email = document.dados.email.value
    tell = document.dados.tell.value
    if (nome == "" || endereco == "" || cpf == "" || rg == ""
        || dtnasc == "" || natural == "" || email == "" || tell == "") {
        window.alert('Verifique se há algum campo vazio!')
    }
}