<?php


use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});




//Rutas Pedido
Route::post('/pedido', 'App\Http\Controllers\PedidoController@store');
Route::post('/pedido/destroy/{id}', 'App\Http\Controllers\PedidoController@destroy');
Route::post('/pedido/update/{id}','App\Http\Controllers\PedidoController@update');

Route::post('/categoria', 'App\Http\Controllers\CategoriaController@store');
Route::post('/categoria/destroy/{id}', 'App\Http\Controllers\CategoriaController@destroy');
Route::post('/categoria/update/{id}','App\Http\Controllers\CategoriaController@update');

Route::post('/detallepedido', 'App\Http\Controllers\Detalle_PedidoController@store');
Route::post('/detallepedido/destroy/{id_pedido}/{id_producto}', 'App\Http\Controllers\Detalle_PedidoController@destroy');
Route::post('/detallepedido/update/{id_pedido}/{id_producto}','App\Http\Controllers\Detalle_PedidoController@update');

Route::post('/listadeseos', 'App\Http\Controllers\Lista_DeseosController@store');
Route::post('/listadeseos/destroy/{id_user}/{id_producto}', 'App\Http\Controllers\Lista_DeseosController@destroy');
Route::post('/listadeseos/update/{id_user}/{id_producto}','App\Http\Controllers\Lista_DeseosController@update');

Route::post('/producto', 'App\Http\Controllers\ProductoController@store');
Route::post('/producto/destroy/{id}', 'App\Http\Controllers\ProductoController@destroy');
Route::post('/producto/update/{id}','App\Http\Controllers\ProductoController@update');

Route::post('/usuario', 'App\Http\Controllers\UsuarioController@store');
Route::post('/usuario/destroy/{id}', 'App\Http\Controllers\UsuarioController@destroy');
Route::post('/usuario/update/{id}','App\Http\Controllers\UsuarioController@update');

Route::post('/valoracion', 'App\Http\Controllers\ValoracionController@store');
Route::post('/valoracion/destroy/{id}', 'App\Http\Controllers\ValoracionController@destroy');
Route::post('/valoracion/update/{id}','App\Http\Controllers\ValoracionController@update');
