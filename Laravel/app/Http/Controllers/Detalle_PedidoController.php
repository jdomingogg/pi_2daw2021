<?php

namespace App\Http\Controllers;

use App\Models\Detalle_Pedido;
use Illuminate\Http\Request;

class Detalle_PedidoController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $ar = Detalle_Pedido::all();
        $ar1 = $ar->toArray();
        return response()->json($ar);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $detalle = new Detalle_Pedido;
        $detalle->id_pedido = $request->id_pedido;
        $detalle->id_producto = $request->id_producto;
        $detalle->cantidad = $request->cantidad;
        $detalle->devuelto = $request->devuelto;
        $detalle->save();

        return redirect()->away('https://www.google.com');
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Detalle_Pedido  $detalle_Pedido
     * @return \Illuminate\Http\Response
     */
    public function show(Detalle_Pedido $detalle_Pedido)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Detalle_Pedido  $detalle_Pedido
     * @return \Illuminate\Http\Response
     */
    public function edit(Detalle_Pedido $detalle_Pedido)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Detalle_Pedido  $detalle_Pedido
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id_pedido,$id_producto)
    {
        $p=Detalle_Pedido::where('id_producto', '=', $id_producto)
        ->where('id_pedido', '=', $id_pedido);
        if ($p!=null) {
            $p->update($request->all());
            return response()->json($p,200);
        }
        else{
            return response()->json("No existe");
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Detalle_Pedido  $detalle_Pedido
     * @return \Illuminate\Http\Response
     */
    public function destroy($id_pedido, $id_producto)
    {
        $eliminar = Detalle_Pedido::where('id_producto', '=', $id_producto)
            ->where('id_pedido', '=', $id_pedido);


        $eliminar->delete();
        return redirect('/');
    }
}
