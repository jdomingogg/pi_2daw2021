import { Juego } from './../classes/juego';
import { Pedido } from './../classes/pedido';
import { DetallePedido } from './../classes/detallepedido';

import { FormsModule } from '@angular/forms';
import { Usuario } from './../classes/usuario';
import { BackDataService } from './../services/back-data.service';

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {
  editar: boolean = false;
  usuarioeditado: Usuario = new Usuario(this._backdata.usuario.email, this._backdata.usuario.password, this._backdata.usuario.nombre, this._backdata.usuario.apellidos, this._backdata.usuario.direccion, "n");

  public listadetalles: Array<DetallePedido> = new Array<DetallePedido>();
  public listajuegos:Array<Juego>=[];
  public listapedidos:Array<Pedido>=[];

  public fechahoy:Date=new Date();
  constructor(public _backdata: BackDataService) { }

  ngOnInit(): void {


    setTimeout(() => {
      this._backdata.obtenerCarrito().subscribe(data=>{

        for (let i = 0; i < data.length; i++) {
          if (data[i]['id_usuario']==this._backdata.iduser) {
            if (data[i]['comprado']=='s') {
              this.listapedidos.push(data[i]);


              setTimeout(() => {

                this._backdata.obtenerCarritoDetalles().subscribe(detalle=>{

                  for (let j = 0; j < detalle.length; j++) {
                    if (detalle[j]['id_pedido']==data[i]['id']) {
                      this.listadetalles.push(detalle[j]);
                      this._backdata.obtenerJuegos().subscribe(juego=>{

                        for (let k = 0; k < juego.length; k++) {
                          if (juego[k]['id']==detalle[j]['id_producto']) {
                            this.listajuegos.push(juego[k])
                          }

                        }
                      })
                    }

                  }
                })
              }, 200);


            }
          }

        }
        for (let q = 0; q < this.listapedidos.length; q++) {
          console.log("pedido" + 1)
          this.listapedidos[q].fecha=new Date(this.listapedidos[q].fecha)

        }
      })
    }, 500);


    console.log(this.listadetalles)
    console.log(this.listajuegos)

  }

  botonEditar() {
    this.usuarioeditado = new Usuario(this._backdata.usuario.email, this._backdata.usuario.password, this._backdata.usuario.nombre, this._backdata.usuario.apellidos, this._backdata.usuario.direccion, "n");
    this.editar = true;
  }

  editarUsuario() {


    this._backdata.actualizarUsuario(this.usuarioeditado, this._backdata.iduser).subscribe(data => console.log(data));
    setTimeout(() => {
      this._backdata.mostrarAtributoUsuario();
    }, 500);

    this.editar = false;


  }

  devolverJuego(detalle:any){

    this._backdata.obtenerCarrito().subscribe(data=>{
      var fecha;
      for (let i = 0; i < data.length; i++) {
        if (data[i]['id']==detalle.id_pedido) {
          fecha= new Date(data[i]['fecha'])
          if (this.fechahoy.getTime() > (fecha.getTime()+172800000)) {
            const devuelto ={id_pedido:detalle.id_pedido,id_producto:detalle.id_producto,cantidad:detalle.cantidad,devuelto:'s' }
            alert("Entregue el juego en la oficina de envios más cercanos.")
            this._backdata.actualizarCarritoDetalles(devuelto,detalle.id_pedido,detalle.id_producto).subscribe(data=>{console.log(data)});
            setTimeout(() => {
              this.ngOnInit();
            }, 500);
          }
          else{
            alert("Tu juego no ha sido entregado todavía, no puedes devolverlo")
          }
        }

      }
    })

  }



}
