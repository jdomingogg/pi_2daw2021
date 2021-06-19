<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Pedido extends Model
{
    use HasFactory;
    protected $table = 'pedido';
    protected $fillable = [
        'id',
        'comprado',
        'fecha',
        'id_usuario'
    ];

    public function detalles()
    {
        return $this->hasMany(Detalle_Pedido::class, 'id_pedido', 'id');
    }
    public function usuario()
    {
        return $this->belongsTo(Usuario::class, 'id_usuario', 'id');
    }
}
