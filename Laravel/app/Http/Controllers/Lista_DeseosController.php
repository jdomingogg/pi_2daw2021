<?php

namespace App\Http\Controllers;

use App\Models\Lista_Deseos;
use Illuminate\Http\Request;

class Lista_DeseosController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $ar = Lista_Deseos::all();
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
        Lista_Deseos::create($request->all());
        return redirect()->away('https://www.google.com');
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Lista_Deseos  $lista_Deseos
     * @return \Illuminate\Http\Response
     */
    public function show(Lista_Deseos $lista_Deseos)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Lista_Deseos  $lista_Deseos
     * @return \Illuminate\Http\Response
     */
    public function edit(Lista_Deseos $lista_Deseos)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Lista_Deseos  $lista_Deseos
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id_user, $id_producto)
    {
        $p=Lista_Deseos::where('id_producto', '=', $id_producto)
        ->where('id_pedido', '=', $id_user);
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
     * @param  \App\Models\Lista_Deseos  $lista_Deseos
     * @return \Illuminate\Http\Response
     */
    public function destroy( $id_user, $id_producto)
    {
        $eliminar = Lista_Deseos::where('id_producto', '=', $id_producto)
            ->where('id_usuario', '=', $id_user);


        $eliminar->delete();
        return redirect('/');
    }
}
