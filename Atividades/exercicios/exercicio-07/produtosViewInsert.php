<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Inserir produtos</title>

    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-+0n0xVW2eSR5OomGNYDnhzAbDsOXxcvSN1TPprVMTNDbiYZCxYbOOl7+AMvyTG2x" crossorigin="anonymous">
</head>
<body>
    
    <div class="d-flex justify-content-center">
        <form action="produtosControllerInsert.php" method="post">

            <div class="form-group p-2">
                <input type="text" name="nome" id="nome" placeholder="Digite o nome do produto" class="form-control">
            </div>

            <div class="form-group p-2">
                <input type="text" name="um" id="um" placeholder="Digite a unidade de medida" class="form-control">
            </div>

            <div class="d-flex justify-content-center p-2">
                <input type="submit" value="Cadastrar" class="btn btn-primary">
            </div>

        </form>
    </div>
</body>
</html>