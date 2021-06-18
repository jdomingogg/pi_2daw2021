import { FormsModule } from '@angular/forms';
import { Usuario } from './../classes/usuario';
import { BackDataService } from './../services/back-data.service';

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {
  editar:boolean=false;
  usuarioeditado:Usuario=new Usuario(this._backdata.usuario.email,this._backdata.usuario.password,this._backdata.usuario.nombre,this._backdata.usuario.apellidos,this._backdata.usuario.direccion,"n");

  constructor(public _backdata: BackDataService) { }

  ngOnInit(): void {
    console.log(this.usuarioeditado)
  }

  botonEditar(){
    this.usuarioeditado= new Usuario(this._backdata.usuario.email,this._backdata.usuario.password,this._backdata.usuario.nombre,this._backdata.usuario.apellidos,this._backdata.usuario.direccion,"n");
    this.editar=true;
  }

  editarUsuario(){


    this._backdata.actualizarUsuario(this.usuarioeditado,this._backdata.iduser).subscribe(data => console.log(data));
    this._backdata.mostrarAtributoUsuario();
    this.editar=false;


  }

}
