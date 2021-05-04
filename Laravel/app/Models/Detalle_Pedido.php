<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Detalle_Pedido extends Model
{
    use HasFactory;
    protected $table = 'detallepedido';
    protected $fillable = [
        'id_pedido',
        'id_producto',
        'cantidad',
        'devuelto'
    ];
    public function pedido()
    {
        return $this->hasOne(Pedido::class, 'id', 'id_pedido');
    }
    public function producto()
    {
        return $this->hasOne(Producto::class, 'id', 'id_producto');
    }
}
