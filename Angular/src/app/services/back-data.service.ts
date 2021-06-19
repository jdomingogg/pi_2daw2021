import { HeaderComponent } from './../header/header.component';
import { Usuario } from './../classes/usuario';
import { DetallePedido } from './../classes/detallepedido';
import { Pedido } from './../classes/pedido';

import { Router } from '@angular/router';
import { Injectable, ViewChild } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { DatePipe, DOCUMENT } from '@angular/common';


@Injectable({
  providedIn: 'root'
})
export class BackDataService {


  public urljuegos: string = "";
  public urlcategorias: string = "";
  public urlusuarios: string = "";
  public urlvaloraciones: string = "";
  public urlcarrito: string = "";
  public urlcarritodetalle: string = "";
  public urllista: string = "";
  public iduser: number = -1;
  public haycarrito: boolean = false;
  public username: string = "";
  public userpsw: string = "";
  public usuario: Usuario = new Usuario("", "", "", "", "", "");
  HeaderComponent: any;
  public idret: number = 0;
  public detallespedido: Array<DetallePedido> = [];
  public idultimopedido=0;


  constructor(private route: Router, private http: HttpClient, public datepipe: DatePipe) {



  }

  httpHeader = {
    headers: new HttpHeaders({ 'Content-type': 'application/json' })
  }

  ultimoPedido(){
    this.obtenerCarrito().subscribe(data=>{
      for (let i = 0; i < data.length; i++) {

        if (data[i]['id_usuario']==this.iduser) {
          if (data[i]['comprado']=='n') {

            this.idultimopedido=data[i]['id'];
            break;
          }
        }


      }
    })
  }

  detallesPedido(){

    this.obtenerCarritoDetalles().subscribe(data => {
      this.detallespedido=[];
      console.log(this.idultimopedido)
      for (let i = 0; i < data.length; i++) {
        if (data[i]['id_pedido']==this.idultimopedido) {
          this.detallespedido.push(new DetallePedido(this.idultimopedido,data[i]['id_producto'],data[i]['cantidad'],data[i]['devuelto']));

        }

      }

    })
  }

enviarEmail(){
  return this.http.get("http://54.235.247.212/sendemail")
}

  hayCarrito(b: boolean) {
    this.haycarrito = b;
  }

  obtenerJuegos(): Observable<any> {
    this.urljuegos = "http://54.235.247.212/producto";
    return this.http.get(this.urljuegos);
  }

  crearJuego(p: any) {

    return this.http.post("http://54.235.247.212/api/producto", JSON.stringify(p), this.httpHeader);

  }

  actualizarJuego(p: any, id: any) {
    return this.http.post("http://54.235.247.212/api/producto/update/" + id, p, this.httpHeader);
  }



  obtenerCategorias(): Observable<any> {
    this.urljuegos = "http://54.235.247.212/categoria";
    return this.http.get(this.urljuegos);
  }

  crearCategoria(p: any) {

    return this.http.post("http://54.235.247.212/api/categoria", JSON.stringify(p), this.httpHeader);

  }

  actualizarCategoria(p: any, id: any) {
    return this.http.post("http://54.235.247.212/api/categoria/update/" + id, p, this.httpHeader);
  }





  obtenerValoraciones(): Observable<any> {
    this.urljuegos = "http://54.235.247.212/valoracion";
    return this.http.get(this.urljuegos);
  }

  crearValoracion(p: any) {

    return this.http.post("http://54.235.247.212/api/valoracion", JSON.stringify(p), this.httpHeader);

  }

  eliminarValoracion(p: any) {

    return this.http.post("http://54.235.247.212/api/valoracion/destroy/" + p, this.httpHeader);

  }


  obtenerCarrito(): Observable<any> {
    this.urljuegos = "http://54.235.247.212/pedido";
    return this.http.get(this.urljuegos);
  }

  crearPedido(pedido: any) {
    pedido['fecha'] = this.datepipe.transform(pedido['fecha'], 'yyyy-MM-dd');
    return this.http.post("http://54.235.247.212/api/pedido", JSON.stringify(pedido), this.httpHeader);

  }

  eliminarPedido(pedido: any) {

    return this.http.post("http://54.235.247.212/api/pedido/destroy/" + pedido, this.httpHeader);

  }

  actualizarPedido(p: any, id: any) {
    return this.http.post("http://54.235.247.212/api/pedido/update/" + id, p, this.httpHeader);
  }

  anadirAlCarrito(det: any): Observable<any> {
    return this.http.post<any>('http://localhost:8000/detalle-pedido/store', det);
  }



  obtenerCarritoDetalles(): Observable<any> {
    this.urljuegos = "http://54.235.247.212/detalle-pedido";
    return this.http.get(this.urljuegos);
  }

  crearCarritoDetalles(p: any) {

    return this.http.post("http://54.235.247.212/api/detallepedido", JSON.stringify(p), this.httpHeader);

  }

  actualizarCarritoDetalles(p: any, id_pedido: any, id_producto: any) {
    return this.http.post("http://54.235.247.212/api/detallepedido/update/" + id_pedido + "/" + id_producto, p, this.httpHeader);
  }

  eliminarCarritoDetalles(p: any) {

    return this.http.post("http://54.235.247.212/api/detallepedido/destroy/" + p.id_pedido+"/" + p.id_producto, this.httpHeader);

  }



  obtenerListaDeDeseos(): Observable<any> {
    this.urljuegos = "http://54.235.247.212/lista-deseos";
    return this.http.get(this.urljuegos);
  }

  crearListaDeseos(p: any) {

    return this.http.post("http://54.235.247.212/api/listadeseos", JSON.stringify(p), this.httpHeader);

  }

  eliminarListaDeseos(p: any) {

    return this.http.post("http://54.235.247.212/api/listadeseos/destroy/" + p, this.httpHeader);

  }





  obtenerUsuarios(): Observable<any> {
    this.urljuegos = "http://54.235.247.212/usuario";
    return this.http.get(this.urljuegos);
  }

  eliminarUsuario(p: any) {

    return this.http.post("http://54.235.247.212/api/usuario/destroy/" + p, this.httpHeader);

  }

  crearUsuario(usuario: any) {

    return this.http.post("http://54.235.247.212/api/usuario", JSON.stringify(usuario), this.httpHeader);

  }

  actualizarUsuario(usuario: any, id: any) {
    return this.http.post("http://54.235.247.212/api/usuario/update/" + id, usuario, this.httpHeader);
  }

  mostrarAtributoUsuario() {


    this.obtenerUsuarios().subscribe(data => {
      for (let i = 0; i < data.length; i++) {
        if (data[i]['id'] == this.iduser) {
          this.usuario.admin = data[i]['admin'];
          this.usuario.nombre = data[i]['nombre'];
          this.usuario.apellidos = data[i]['apellidos'];
          this.usuario.email = data[i]['email'];
          this.usuario.password = data[i]['password'];
          this.usuario.direccion = data[i]['direccion'];
          break;
        }

      }
    })
  }

  login() {
    this.obtenerUsuarios().subscribe(data => {

      var b = false;
      for (let i = 0; i < data.length; i++) {
        console.log(this.username)
        if ((this.username == data[i]['email']) && (this.userpsw == data[i]['password'])) {
          this.iduser = data[i]['id'];
          b = true;
          this.mostrarAtributoUsuario();
          break;


        }

      }
      if (!b) {
        window.alert('Email o contraseña incorrectos, vuelvalo a intentar');
      }
    })
  }

  logout() {

    var r = confirm("¿Seguro que quieres cerrar sesión?")
    if (r) {
      this.iduser = -1;
    }
    console.log(this.iduser)
  }

  obtenerId(us: Usuario): number {


    this.obtenerUsuarios().subscribe(data => {
      var id2 = 0;
      for (let i = 0; i < data.length; i++) {
        if (us.email == data[i]['email']) {
          id2 = data[i]['id'];
          break;
        }


      }
      this.idret = id2;
    })

    return this.idret;

  }



}
