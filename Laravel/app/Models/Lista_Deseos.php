<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Lista_Deseos extends Model
{
    use HasFactory;
    protected $table = 'listadeseos';
    protected $fillable = [
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
