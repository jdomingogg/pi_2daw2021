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
  public detallepedido=new DetallePedido(0,0,1,"");
  public carrito:Pedido = new Pedido('n',new Date(), 0);
  public idcarrito=0;
  id: number = 0;
  private sub: any;
  public categ: string = "";
  public valoraciones:Array<Valoracion>=[];
  public estrellas:Array<number>=[];
  public mediavaloracion:number=0;

  constructor(private route: ActivatedRoute, private _backdata: BackDataService) {
    this.mostrarJuego();
    this.generarValoraciones();



  }

  generarValoraciones(){
    this._backdata.obtenerValoraciones().subscribe(data =>{

      for (let i = 0; i < data.length; i++) {
        this.valoraciones.push(new Valoracion(data[i]['comentario'],data[i]['puntuacion'],data[i]['id_usuario'],data[i]['id_producto']));
        this.mediavaloracion=this.mediavaloracion+data[i]['puntuacion'];
      }
      this.mediavaloracion=this.mediavaloracion/data.length;
      console.log(this.mediavaloracion)
      for (let j = 0; j < this.mediavaloracion; j++) {
        this.estrellas.push(1);

      }


    })
  }

  conseguirIdPedido():number{
    var id1:number=0;
    this._backdata.obtenerCarrito().subscribe(data => {
      if (data.length == 0) {
        return 1;
      }else{
        for (let i = 0; i < data.length; i++) {
          id1 = data[i]['id'];

        }
        return id1;
      }
    })
    return -1;
  }

  botonAnnadir(){


      this.carrito['comprado']='n';
      this.carrito['fecha']=new Date();
      this.carrito['id_usuario']=this._backdata.iduser;
      console.log("Hola")

      this._backdata.crearPedido(this.carrito).subscribe(data => console.log(data));
      /*this.detallepedido.id_pedido=this.conseguirIdPedido();
      this.detallepedido.id_producto=this.juego.id;
      this.detallepedido.devuelto="n";
      const newdetalle = {id_pedido:this.detallepedido.id_pedido,id_producto:this.detallepedido.id_producto,cantidad:1,devuelto:'n'}
      this._backdata.anadirAlCarrito(newdetalle);*/


  }
  botonEliminar(){

    this._backdata.obtenerCarrito().subscribe(data=>{
      for (let i = 0; i < data.length; i++) {
        if (data[i]['id_usuario']==this._backdata.iduser) {
          this.idcarrito=data[i]['id'];
          console.log(this.idcarrito)
    this._backdata.eliminarPedido(this.idcarrito.toString()).subscribe(data => console.log(data));
          break;
        }

      }
    })

  }



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
          this.juego.categoria=data[i]['id_categoria'];
          this._backdata.obtenerCategorias().subscribe(datas =>{
            for (let i = 0; i < datas.length; i++) {
              if(datas[i]['id']==this.juego.categoria){
                this.categ=datas[i]['nombre_cat'];
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

}
