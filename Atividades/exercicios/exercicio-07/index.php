<?php

    require_once 'connection.php';

    $stmt = $connection->prepare("CREATE TABLE IF NOT EXISTS produtos (id INTEGER PRIMARY KEY AUTOINCREMENT, 
        nome TEXT NOT NULL, um VARCHAR(3) NOT NULL)");

    $stmt->execute();

    // Controller -> Model
    $produtos = $connection->query("SELECT * FROM produtos");

    // View
    require 'produtosView.php';