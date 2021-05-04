<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Categoria extends Model
{
    use HasFactory;
    protected $table = 'categoria';
    protected $fillable = [
        'id',
        'nombre_cat',
        'descripcion_cat'
    ];

    public function productos(){
        return $this->hasMany(Producto::class,'id_categoria','id');
    }
}
