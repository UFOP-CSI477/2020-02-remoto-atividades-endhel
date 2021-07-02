function digitar(valor) {
    document.getElementById("resultado").value += valor
}

function resolver() {
    let num1 = document.getElementById("resultado").value
    let num2 = eval(num1)
    document.getElementById("resultado").value = num2
}

function limpar() {
    document.getElementById("resultado").value = ""
}
