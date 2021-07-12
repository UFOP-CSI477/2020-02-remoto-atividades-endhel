<?php

require '../vendor/autoload.php';

use App\Database\Connection;
use App\Database\AdapterSQLite;

$connection = new Connection(new AdapterSQLite());

$connection->getAdapter()->open();

$sql = "SELECT * FROM estados";
$estados = $connection->getAdapter()->get()->query($sql);

$sql = "SELECT * FROM cidades";
$cidades = $connection->getAdapter()->get()->query($sql);

$sql = "SELECT * FROM produtos";
$produtos = $connection->getAdapter()->get()->query($sql);

require_once '/../Views/Tabelas.php';

$connection->getAdapter()->close();