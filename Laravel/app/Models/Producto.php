<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Producto extends Model
{
    use HasFactory;
    protected $table = 'producto';
    protected $fillable = [
        'id',
        'nombre',
        'descripcion',
        'precio',
        'stock',
        'imagen',
        'id_categoria'
    ];
    public function valoraciones()
    {
        return $this->hasMany(Valoracion::class, 'id_producto', 'id');
    }
    public function listaDeDeseos()
    {
        return $this->hasMany(Lista_Deseos::class, 'id_producto', 'id');
    }
    public function detalles()
    {
        return $this->hasMany(Detalle_Pedido::class, 'id_producto', 'id');
    }

    public function categoria(){
        return $this->hasOne(Categoria::class,'id','id_categoria');
    }


}
