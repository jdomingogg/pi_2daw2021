import { HeaderComponent } from './../header/header.component';
import { Usuario } from './../classes/usuario';
import { DetallePedido } from './../classes/detallepedido';
import { Pedido } from './../classes/pedido';

import { Router} from '@angular/router';
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
  public usuario: Usuario = new Usuario( "", "", "", "", "", "");
  HeaderComponent: any;


  constructor( private route: Router,private http: HttpClient, public datepipe: DatePipe) { }

  httpHeader = {
    headers: new HttpHeaders({ 'Content-type': 'application/json' })
  }



  hayCarrito(b: boolean) {
    this.haycarrito = b;
  }

  obtenerJuegos(): Observable<any> {
    this.urljuegos = "http://54.235.247.212/producto";
    return this.http.get(this.urljuegos);
  }
  obtenerCategorias(): Observable<any> {
    this.urljuegos = "http://54.235.247.212/categoria";
    return this.http.get(this.urljuegos);
  }
  obtenerUsuarios(): Observable<any> {
    this.urljuegos = "http://54.235.247.212/usuario";
    return this.http.get(this.urljuegos);
  }
  obtenerValoraciones(): Observable<any> {
    this.urljuegos = "http://54.235.247.212/valoracion";
    return this.http.get(this.urljuegos);
  }
  obtenerCarrito(): Observable<any> {
    this.urljuegos = "http://54.235.247.212/pedido";
    return this.http.get(this.urljuegos);
  }
  obtenerCarritoDetalles(): Observable<any> {
    this.urljuegos = "http://54.235.247.212/detalle-pedido";
    return this.http.get(this.urljuegos);
  }
  obtenerListaDeDeseos(): Observable<any> {
    this.urljuegos = "http://54.235.247.212/lista-deseos";
    return this.http.get(this.urljuegos);
  }

  crearPedido(pedido: any) {
    pedido['fecha'] = this.datepipe.transform(pedido['fecha'], 'yyyy-MM-dd');
    return this.http.post("http://54.235.247.212/api/pedido", JSON.stringify(pedido), this.httpHeader);

  }

  eliminarPedido(pedido: any) {

    return this.http.post("http://54.235.247.212/api/pedido/destroy/" + pedido, this.httpHeader);

  }
  anadirAlCarrito(det: any): Observable<any> {
    return this.http.post<any>('http://localhost:8000/detalle-pedido/store', det);
  }


  crearUsuario(usuario: any) {

    return this.http.post("http://54.235.247.212/api/usuario", JSON.stringify(usuario), this.httpHeader);

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

  logout(){

    var r = confirm("¿Seguro que quieres cerrar sesión?")
    if (r) {
      this.iduser=-1;
    }
    console.log(this.iduser)
  }



}
