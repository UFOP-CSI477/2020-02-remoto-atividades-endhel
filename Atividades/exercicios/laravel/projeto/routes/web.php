<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

use App\Models\Produto;

Route::get('/produtos/todos', function () {
    $estados = Produto::all();

    return view('lista', [ 'dados' => $estados ]);
});

Route::get('/produtos/{id}', function ($id) {
    $estado = Produto::find($id);

    if($estado == null){
        return 'ID inválido!';
    }

    return view('lista', [ 'dados' => $estado ]);
    
});

Route::get('/', function () {
    return view('welcome');
});


