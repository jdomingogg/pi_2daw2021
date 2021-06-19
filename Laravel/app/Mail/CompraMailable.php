<?php

namespace App\Mail;

use App\Models\Pedido;
use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;

class CompraMailable extends Mailable
{
    use Queueable, SerializesModels;


    public $subject = "Compra en GUEIM.ES";
    public $pedido = "";
    /**
     * Create a new message instance.
     *
     * @return void
     */
    public function __construct($id_pedido)
    {
        $this->pedido= $id_pedido;
    }

    /**
     * Build the message.
     *
     * @return $this
     */
    public function build()
    {

        $p=Pedido::where('id',$this->pedido);
        return $this->view('email',['p'=>$p]);
    }
}
