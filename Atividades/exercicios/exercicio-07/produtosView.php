<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Lista de produtos</title>

    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" 
    integrity="sha384-JcKb8q3iqJ61gNV9KGb8thSsNjpSL0n8PARn9HuZOnIxN0hoP+VmmDGMN5t9UJ0Z" crossorigin="anonymous">
</head>
<body>
    
    <a class="p-2" href="produtosViewInsert.php">Inserir</a>

    <table id="tabela" class="table table-bordered table-hover table-sm table-striped border-dark bg-white rounded">
        <thead class>
            <tr>
                <th>ID</th>
                <th>Nome</th>
                <th>Unidade de Medida</th>
            </tr>
        </thead>
            
        <?php 
            while($e = $produtos->fetch()) {
                echo "<tr><td>" .$e["id"] . "</td>";
                echo "<td>" .$e["nome"] . "</td>";
                echo "<td>" .$e['um'] . "</td> </tr>";
            }
        ?>
    </table>
    
</body>
</html>