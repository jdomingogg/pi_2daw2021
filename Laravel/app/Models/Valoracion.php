<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Valoracion extends Model
{
    use HasFactory;
    protected $table = 'valoracion';
    protected $fillable = [
        'id',
        'comentario',
        'puntuacion',
        'id_usuario',
        'id_producto'
    ];
    public function usuario()
    {
        return $this->hasOne(Usuario::class, 'id', 'id_usuario');
    }
    public function producto()
    {
        return $this->hasOne(Producto::class, 'id', 'id_producto');
    }
}
