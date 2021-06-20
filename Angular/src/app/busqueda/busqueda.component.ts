import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { BackDataService } from '../services/back-data.service';
import { Juego } from '../classes/juego';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styleUrls: ['./busqueda.component.css']
})
export class BusquedaComponent implements OnInit {
  sub: any;
  buscar:string=""
  arrayjuegos:Array<Juego>=[]

  constructor(private route: ActivatedRoute,private _backdata: BackDataService) { }

  ngOnInit(): void {


    this.sub = this.route.params.subscribe(params => {
      this.arrayjuegos=[];
      this.buscar = params['buscar']; // (+) converts string 'id' to a number
      console.log(this.buscar)

      this._backdata.obtenerJuegos().subscribe(data=>{

          var expresion = new RegExp(this.buscar, "i",);

        for (let i = 0; i < data.length; i++) {
          console.log(data[i])
          if (expresion.test(data[i]['nombre'])) {

            this.arrayjuegos.push(data[i]);
          }
        }


      })
      // In a real app: dispatch action to load the details here.
    });
  }

}
