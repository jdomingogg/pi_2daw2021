<?php

use App\Http\Controllers\CategoriaController;
use App\Http\Controllers\Detalle_PedidoController;
use App\Http\Controllers\Lista_DeseosController;
use App\Http\Controllers\PedidoController;
use App\Http\Controllers\ProductoController;
use App\Http\Controllers\UsuarioController;
use App\Http\Controllers\ValoracionController;
use App\Mail\CompraMailable;
use App\Models\Usuario;
use Illuminate\Support\Facades\Mail;
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

Route::get('/', function () {
    return view('welcome');
});

Route::resource('categoria', CategoriaController::class);
Route::resource('detalle-pedido', Detalle_PedidoController::class);
Route::resource('lista-deseos', Lista_DeseosController::class);
Route::resource('pedido', PedidoController::class);
Route::resource('producto', ProductoController::class);
Route::resource('usuario', UsuarioController::class);
Route::resource('valoracion', ValoracionController::class);


Route::get('sendemail/',function($id_pedido,$id_usuario){
    $correo = new CompraMailable($id_pedido);

    $user = Usuario::where('id',$id_usuario);


    Mail::to($user['email'])->send($correo);
});
