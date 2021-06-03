import { DetallePedido } from './../classes/detallepedido';
import { Pedido } from './../classes/pedido';


import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { DatePipe } from '@angular/common';


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
  public esadmin: boolean = false;
  public iduser: number = 1;
  public haycarrito: boolean = false;


  constructor(private http: HttpClient, public datepipe: DatePipe) { }

  httpHeader={
    headers: new HttpHeaders({'Content-type':'application/json'})
  }

  esAdmin(b: boolean) {
    this.esadmin = b;
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

  crearPedido(pedido:any){
    pedido['fecha']=this.datepipe.transform(pedido['fecha'], 'yyyy-MM-dd');
    return this.http.post("http://54.235.247.212/api/pedido",JSON.stringify(pedido),this.httpHeader);

  }
  anadirAlCarrito(det: any): Observable<any> {
    return this.http.post<any>('http://localhost:8000/detalle-pedido/store', det);
  }

}
