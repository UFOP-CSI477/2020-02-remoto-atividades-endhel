<?php

namespace App\Models;

class Cidade implements ModelInterface {

    private $id, $nome;

    public function __construct($id, $nome) {

        $this->id = $id;
        $this->nome = $nome;

    }

    public function getAll() {

    }

    public function get($id) {
        
    }

}