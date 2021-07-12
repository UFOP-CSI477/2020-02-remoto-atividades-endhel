<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Lista de tabelas</title>

    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" 
    integrity="sha384-JcKb8q3iqJ61gNV9KGb8thSsNjpSL0n8PARn9HuZOnIxN0hoP+VmmDGMN5t9UJ0Z" crossorigin="anonymous">
</head>
<body>
    <table id="estados" class="table table-bordered table-hover table-sm table-striped border-dark bg-white rounded">
        <thead class>
            <tr>
                <th>ID</th>
                <th>Nome</th>
                <th>Sigla</th>
            </tr>
        </thead>
            
        <?php 
            while($e = $estados->fetch()) {
                echo "<tr><td>" .$e["id"] . "</td>";
                echo "<td>" .$e["nome"] . "</td>";
                echo "<td>" .$e['sigla'] . "</td> </tr>";
            }
        ?>
    </table>

    <table id="cidades" class="table table-bordered table-hover table-sm table-striped border-dark bg-white rounded">
        <thead class>
            <tr>
                <th>ID</th>
                <th>Nome</th>
            </tr>
        </thead>
            
        <?php 
            while($e = $cidades->fetch()) {
                echo "<tr><td>" .$e["id"] . "</td>";
                echo "<td>" .$e["nome"] . "</td>";
            }
        ?>
    </table>

    <table id="produtos" class="table table-bordered table-hover table-sm table-striped border-dark bg-white rounded">
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