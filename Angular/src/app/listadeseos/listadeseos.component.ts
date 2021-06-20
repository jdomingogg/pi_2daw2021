import { Juego } from './../classes/juego';
import { ListaDeseos } from './../classes/listadeseos';
import { Component, OnInit } from '@angular/core';
import { BackDataService } from '../services/back-data.service';

@Component({
  selector: 'app-listadeseos',
  templateUrl: './listadeseos.component.html',
  styleUrls: ['./listadeseos.component.css']
})
export class ListadeseosComponent implements OnInit {
  public arraylista: Array<ListaDeseos> = []
  public arrayjuegos: Array<Juego> = []
  constructor(public _backdata: BackDataService) { }

  ngOnInit(): void {

    this._backdata.obtenerListaDeDeseos().subscribe(data => {
      this.arraylista=[]
      this.arrayjuegos=[]
      for (let i = 0; i < data.length; i++) {
        if (data[i]['id_usuario'] == this._backdata.iduser) {
          this.arraylista.push(new ListaDeseos(data[i]['id_producto'], data[i]['id_usuario']))
          this._backdata.obtenerJuegos().subscribe(juego=>{

            for (let k = 0; k < juego.length; k++) {
             if (juego[k]['id']==data[i]['id_producto']) {
               this.arrayjuegos.push(new Juego(juego[k]['id'],juego[k]['nombre'],juego[k]['descripcion'],juego[k]['precio'],juego[k]['stock'],juego[k]['imagen'],juego[k]['categoria']))
             }

            }
          })
        }


      }
    })
  }


  eliminar(iduser:any,idprod:any){
    this._backdata.eliminarListaDeseos(iduser,idprod).subscribe(data=>{console.log(data)})
    setTimeout(() => {
      this.ngOnInit();
    }, 500);
  }

}
