import { DatePipe } from '@angular/common';
import { Router } from '@angular/router';
import { Juego } from './../classes/juego';
import { DetallePedido } from './../classes/detallepedido';
import { Pedido } from './../classes/pedido';
import { Component, OnInit } from '@angular/core';
import { BackDataService } from '../services/back-data.service';


@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css']
})
export class CarritoComponent implements OnInit {
  carrito: Pedido = new Pedido("", new Date(), this._backdata.iduser);

  detallesPedido: Array<DetallePedido> = [];
  arrayjeugos: Array<Juego> = [];
  idultimopedido: number = 0;

  constructor(private router: Router, private _backdata: BackDataService, public datepipe: DatePipe) {



  }

  ngOnInit(): void {


    console.log(this._backdata.iduser)
    setTimeout(() => {
      this._backdata.ultimoPedido();

      this.idultimopedido = this._backdata.idultimopedido


      this._backdata.detallesPedido();
      this.arrayjeugos = [];
      setTimeout(() => {
        this.detallesPedido = this._backdata.detallespedido;
        console.log(this.detallesPedido)
        this._backdata.obtenerJuegos().subscribe(data => {
          for (let i = 0; i < this.detallesPedido.length; i++) {
            for (let y = 0; y < data.length; y++) {
              if (data[y]['id'] == this.detallesPedido[i].id_producto) {
                this.arrayjeugos.push(new Juego(data[y]['id'], data[y]['nombre'], data[y]['descripcion'], data[y]['precio'], data[y]['stock'], data[y]['imagen'], data[y]['id_categoria']))
              }

            }

          }
        })
      }, 500);
    }, 500);


  }
  reloadComponent() {
    let currentUrl = this.router.url;
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    this.router.onSameUrlNavigation = 'reload';
    this.router.navigate([currentUrl]);
  }

  eliminarJuego(p: any, j: any) {
    j.stock = j.stock + p.cantidad;
    this._backdata.actualizarJuego(j, j.id).subscribe(data => { console.log(data) })
    this._backdata.eliminarCarritoDetalles(p).subscribe(data => console.log("eliminacion"));
    setTimeout(() => {
      this.ngOnInit();

    }, 500);


  }

  comprar() {
    this._backdata.obtenerCarrito().subscribe(data => {
      for (let i = 0; i < data.length; i++) {
        if (data[i]['id'] == this._backdata.idultimopedido) {
          const pedidoact = { comprado: "s", fecha: this.datepipe.transform(new Date(), 'yyyy-MM-dd'), id_usuario: this._backdata.iduser }
          this._backdata.actualizarPedido(pedidoact, this._backdata.idultimopedido).subscribe(data=>{console.log(data)});
          alert('Pedido realizado correctamente, revise su email');
          this._backdata.enviarEmail(this.idultimopedido, this._backdata.iduser).subscribe(data => { console.log(data) })
          const pedidonuevo = { comprado: "n", fecha: this.datepipe.transform(new Date(), 'yyyy-MM-dd'), id_usuario: this._backdata.iduser }
          this._backdata.crearPedido(pedidonuevo).subscribe(data=>{console.log(data)})
          break;
        }

      }
    })


  }

}
