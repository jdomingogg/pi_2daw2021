import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

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


  constructor(private http: HttpClient) { }

  obtenerJuegos(): Observable<any> {
    this.urljuegos = "http://localhost:8000/producto";
    return this.http.get(this.urljuegos);
  }
  obtenerCategorias(): Observable<any> {
    this.urljuegos = "http://localhost:8000/categoria";
    return this.http.get(this.urljuegos);
  }
  obtenerUsuarios(): Observable<any> {
    this.urljuegos = "http://localhost:8000/usuario";
    return this.http.get(this.urljuegos);
  }
  obtenerValoraciones(): Observable<any> {
    this.urljuegos = "http://localhost:8000/valoracion";
    return this.http.get(this.urljuegos);
  }
  obtenerCarrito(): Observable<any> {
    this.urljuegos = "http://localhost:8000/pedido";
    return this.http.get(this.urljuegos);
  }
  obtenerCarritoDetalles(): Observable<any> {
    this.urljuegos = "http://localhost:8000/detalle-pedido";
    return this.http.get(this.urljuegos);
  }
  obtenerListaDeDeseos(): Observable<any> {
    this.urljuegos = "http://localhost:8000/lista-deseos";
    return this.http.get(this.urljuegos);
  }
}
