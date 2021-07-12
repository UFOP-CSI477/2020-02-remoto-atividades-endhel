<?php

    $nome = $_POST['nome'];
    $endereco = $_POST['endereco'];
    $idade = $_POST['idade'];

    echo "<h1>$nome</h1>";
    echo "<p>$endereco<p>";
    echo "<p>$idade<p>";

    echo '<a href="form.php">Voltar</a>';
