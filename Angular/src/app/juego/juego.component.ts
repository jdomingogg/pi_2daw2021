import { FormsModule } from '@angular/forms';

import { DetallePedido } from './../classes/detallepedido';
import { Pedido } from './../classes/pedido';
import { Valoracion } from './../classes/valoracion';
import { BackDataService } from './../services/back-data.service';
import { Juego } from './../classes/juego';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { i18nMetaToJSDoc } from '@angular/compiler/src/render3/view/i18n/meta';
@Component({
  selector: 'app-juego',
  templateUrl: './juego.component.html',
  styleUrls: ['./juego.component.css']
})
export class JuegoComponent implements OnInit {

  public juego: Juego = new Juego(-1, "", "", -1, -1, "", -1);
  public detallepedido = new DetallePedido(0, 0, 1, "");
  public carrito: Pedido = new Pedido('n', new Date(), 0);
  public idcarrito = 0;
  id: number = 0;
  private sub: any;
  public categ: string = "";
  public valoraciones: Array<Valoracion> = [];
  public estrellas: Array<number> = [];
  public mediavaloracion: number = 0;
  public nuevocomentario: string = "";
  public nuevapuntuacion: number = 0;

  constructor(private route: ActivatedRoute, private _backdata: BackDataService) {
    this.mostrarJuego();
    this.generarValoraciones();



  }

  comprobarCarrito(): boolean {
    var bcar = true;


    return bcar;
  }

  generarValoraciones() {
    this._backdata.obtenerValoraciones().subscribe(data => {

      for (let i = 0; i < data.length; i++) {
        console.log(this.id)
        console.log(data[i]['id_producto'])
        if (this.id == data[i]['id_producto']) {
          this._backdata.obtenerUsuarios().subscribe(usuarioses => {
            for (let y = 0; y < usuarioses.length; y++) {
              if (usuarioses[y]['id'] == data[i]['id_usuario']) {
                this.valoraciones.push(new Valoracion(data[i]['comentario'], data[i]['puntuacion'], data[i]['id_usuario'], data[i]['id_producto'], usuarioses[y]['nombre']));
                this.mediavaloracion = this.mediavaloracion + data[i]['puntuacion'];
                console.log(this.mediavaloracion + "aa")
              }

            }

            this.mediavaloracion = this.mediavaloracion / this.valoraciones.length;
            console.log(this.mediavaloracion)
            this.estrellas = []
            for (let j = 0; j < this.mediavaloracion; j++) {
              this.estrellas.push(1);

            }

          })

        }


      }



    })
  }



  botonAnnadir() {


    this._backdata.obtenerCarrito().subscribe(data => {
      var bcar = false;
      for (let i = 0; i < data.length; i++) {

        if (this._backdata.iduser == data[i]['id_usuario']) {
          if (data[i]['comprado'] == 'n') {
            bcar = true;
          }
        }


      }

      if (bcar) {
        this._backdata.obtenerCarrito().subscribe(data => {
          var id1 = 0;
          if (data.length == 0) {
            id1 = 1;
          } else {
            for (let i = 0; i < data.length; i++) {
              id1 = data[i]['id'];

            }

          }
          this.detallepedido.id_pedido = id1;
          this.detallepedido.id_producto = this.juego.id;
          this.detallepedido.devuelto = "n";
          const newdetalle = { id_pedido: this.detallepedido.id_pedido, id_producto: this.detallepedido.id_producto, cantidad: 1, devuelto: 'n' }
          this._backdata.crearCarritoDetalles(newdetalle).subscribe(data => console.log(data));


        })

      } else {
        this.carrito['comprado'] = 'n';
        this.carrito['fecha'] = new Date();
        this.carrito['id_usuario'] = this._backdata.iduser;
        console.log("Hola")

        this._backdata.crearPedido(this.carrito).subscribe(data => console.log(data));
        setTimeout(() => {
          this._backdata.obtenerCarrito().subscribe(data => {
            var id1 = 0;
            if (data.length == 0) {
              id1 = 1;
            } else {
              for (let i = 0; i < data.length; i++) {
                id1 = data[i]['id'];

              }

            }
            this.detallepedido.id_pedido = id1;
            this.detallepedido.id_producto = this.juego.id;
            this.detallepedido.devuelto = "n";
            const newdetalle = { id_pedido: this.detallepedido.id_pedido, id_producto: this.detallepedido.id_producto, cantidad: 1, devuelto: 'n' }
            this._backdata.crearCarritoDetalles(newdetalle).subscribe(data => console.log(data));


          })
        }, 1000);

      }

    })

  }
  /*
  botonEliminar() {

    this._backdata.obtenerCarrito().subscribe(data => {
      for (let i = 0; i < data.length; i++) {
        if (data[i]['id_usuario'] == this._backdata.iduser) {
          this.idcarrito = data[i]['id'];
          console.log(this.idcarrito)
          this._backdata.eliminarPedido(this.idcarrito.toString()).subscribe(data => console.log(data));
          break;
        }

      }
    })

  }
*/


  mostrarJuego() {

    this._backdata.obtenerJuegos().subscribe(data => {

      for (let i = 0; i < data.length; i++) {
        if (data[i]['id'] == this.id) {

          this.juego.id = data[i]['id'];
          this.juego.nombre = data[i]['nombre'];
          this.juego.descripcion = data[i]['descripcion'];
          this.juego.precio = data[i]['precio'];
          this.juego.stock = data[i]['stock'];
          this.juego.imagen = data[i]['imagen'];
          this.juego.id_categoria = data[i]['id_categoria'];
          this._backdata.obtenerCategorias().subscribe(datas => {
            for (let i = 0; i < datas.length; i++) {
              if (datas[i]['id'] == this.juego.id_categoria) {
                this.categ = datas[i]['nombre_cat'];
                console.log(this.categ)
              }

            }
          })
          break;

        }
      }
    })

  }



  ngOnInit(): void {
    this.sub = this.route.params.subscribe(params => {
      this.id = +params['id']; // (+) converts string 'id' to a number

      // In a real app: dispatch action to load the details here.
    });

  }


  comentar() {
    const nuevavaloracion = {  puntuacion: this.nuevapuntuacion,comentario: this.nuevocomentario, id_usuario: this._backdata.iduser, id_producto: this.id }
    var nuevavaloracion2 = new Valoracion(this.nuevocomentario,this.nuevapuntuacion,this._backdata.iduser,this.id.toString(),"")
    console.log(nuevavaloracion)
    this._backdata.crearValoracion(nuevavaloracion).subscribe(data => { console.log(data) })
  }

}
