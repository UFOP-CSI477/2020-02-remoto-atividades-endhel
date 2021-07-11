<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1 shrink-to-fit=no">

    <title>Formulário</title>

    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-+0n0xVW2eSR5OomGNYDnhzAbDsOXxcvSN1TPprVMTNDbiYZCxYbOOl7+AMvyTG2x" crossorigin="anonymous">

    <script src="validacao.js"></script>

</head>

<body>
    <header>
        <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
            <a class="navbar-brand px-2" href="#">Sistema Web</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup"
                aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div class="navbar-nav">
                    <a class="nav-item nav-link" href="03-set-interval.html">Home</a>
                    <a class="nav-item nav-link" href="02-form.html">Perfil</a>
                    <a class="nav-item nav-link active" href="cadastro.html">Cadastro</a>
                    <a class="nav-item nav-link" href="relatorio.html">Relatório</a>
                </div>
            </div>
        </nav>
    </header>

    <h3 class="d-flex justify-content-center p-2">Cadastro de Pessoas</h3>

    <div class="d-flex justify-content-center">
        <form method="post" action="validar.php" name="dados" style="width: 50%;">

            <div class="form-group p-2">
                <input type="text" name="nome" placeholder="Digite o nome completo" class="form-control">
            </div>

            <div class="form-group p-2">
                <input type="text" name="endereco" placeholder="Digite o endereço" class="form-control">
            </div>

            <div class="form-group p-2">
                <input type="text" name="idade" placeholder="Digite a idade" class="form-control">
            </div>

            <div class="d-flex justify-content-center p-2">
                <input type="submit" value="Carregar" name="btnCarregar" onclick="validar()" class="btn btn-primary">
            </div>


        </form>
    </div>

</body>

</html>