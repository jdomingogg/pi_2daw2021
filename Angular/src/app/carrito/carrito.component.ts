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

  constructor(private router:Router, private _backdata: BackDataService) {



  }

  ngOnInit(): void {
    console.log(this._backdata.iduser)

    this._backdata.ultimoPedido();
    this._backdata.detallesPedido();
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





  }
  reloadComponent() {
    let currentUrl = this.router.url;
        this.router.routeReuseStrategy.shouldReuseRoute = () => false;
        this.router.onSameUrlNavigation = 'reload';
        this.router.navigate([currentUrl]);
    }

  eliminarJuego(p: any) {
    this._backdata.eliminarCarritoDetalles(p).subscribe(data => console.log("eliminacion"));
    setTimeout(() => {
      this.reloadComponent()

    }, 500);


  }

}
