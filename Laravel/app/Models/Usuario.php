<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Usuario extends Model
{
    use HasFactory;
    protected $table = 'usuario';
    protected $fillable = [
        'id',
        'email',
        'password',
        'nombre',
        'apellidos',
        'direccion',
        'admin'
    ];

    public function pedidos()
    {
        return $this->hasMany(Pedido::class, 'id_usuario', 'id');
    }

    public function listasDeDeseos()
    {
        return $this->hasMany(Lista_Deseos::class, 'id_usuario', 'id');
    }

    public function valoraciones()
    {
        return $this->hasMany(Valoracion::class, 'id_usuario', 'id');
    }
}
