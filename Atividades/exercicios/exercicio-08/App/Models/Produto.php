<?php

namespace App\Models;

class Produto implements ModelInterface {

    private $id, $nome, $um;

    public function __construct($id, $nome, $sigla) {

        $this->id = $id;
        $this->nome = $nome;
        $this->um = $um;

    }

    public function getAll() {

    }

    public function get($id) {
        
    }

}