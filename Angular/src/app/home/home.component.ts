import { FormsModule } from '@angular/forms';
import { Usuario } from './../classes/usuario';
import { BackDataService } from './../services/back-data.service';
import { Juego } from './../classes/juego';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public juegos: Array<Juego> = [];


  constructor(public _backdata: BackDataService) {
    this.mostrarJuegos();
    console.log(this.juegos);
  }



  mostrarJuegos() {
    this._backdata.obtenerJuegos().subscribe(data => {
      for (let i = 0; i < data.length; i++) {
        this.juegos.push(new Juego(data[i]['id'], data[i]['nombre'], data[i]['descripcion'], data[i]['precio'], data[i]['stock'], data[i]['imagen'], data[i]['categoria']));
      }
      this.juegos=this.juegos.reverse().slice(0,12);
    }

    )
  }


  ngOnInit(): void {
    this._backdata.mostrarAtributoUsuario();
  }

}

