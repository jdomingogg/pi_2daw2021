
import { Router } from '@angular/router';
import { Juego } from './../classes/juego';
import { Usuario } from './../classes/usuario';
import { BackDataService } from './../services/back-data.service';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  usuario: boolean = false;
  categoria: boolean = false;
  juego: boolean = false;
  juegocategoria: string = "";
  arrayUsuarios: Array<Usuario> = [];
  arrayJuegos: Array<Juego> = [];
  nombrebuscado: string = "";
  juegobuscado: string = "";
  nuevoUser: Usuario = new Usuario("", "", "", "", "", "n");
  nuevojeugo: Juego = new Juego(0, "", "", -1, -1, "", -1);
  arrayCategorias: Array<String> = [];
  categoriaseleccionada:string="aaaaaaaa";
  categoriaseleccionada2:string="aaaaaaaa";
  editarjeugo:boolean=false;
  editarusuario:boolean=false;
  juegoeditado:Juego=new Juego(0, "", "", -1, -1, "", -1);
  usuarioeditado: Usuario = new Usuario("", "", "", "", "", "n");
  idusuario=0;



  constructor(public router: Router, public _backdata: BackDataService) { }

  ngOnInit(): void {

    this._backdata.obtenerUsuarios().subscribe(data => {
      for (let i = 0; i < data.length; i++) {
        this.arrayUsuarios.push(data[i]);
      }
    })




    this._backdata.obtenerCategorias().subscribe(data=>{
      for (let i = 0; i < data.length; i++) {
        this.arrayCategorias.push(data[i]['nombre_cat']);
      }
    })



  }

  buscarNombreUsuario() {
    this.arrayUsuarios = []
    this._backdata.obtenerUsuarios().subscribe(data => {

      if (this.nombrebuscado == "") {
        for (let i = 0; i < data.length; i++) {
          this.arrayUsuarios.push(data[i]);

        }
      } else {
        var expresion = new RegExp(this.nombrebuscado, "gi",);
        console.log(expresion)
        for (let i = 0; i < data.length; i++) {
          if (expresion.test(data[i]['nombre'])) {
            this.arrayUsuarios.push(data[i]);
          }
        }
      }
    })
    this.usuario = true;
  }

  buscarNombreJuego() {
    console.log("actualizacion")
    this.arrayJuegos = []
    this._backdata.obtenerJuegos().subscribe(data => {



      if (this.juegobuscado == "") {
        for (let i = 0; i < data.length; i++) {
          console.log(i)
          this.arrayJuegos.push(data[i]);

        }
      } else {
        var expresion = new RegExp(this.juegobuscado, "gi",);
        console.log(expresion)
        for (let i = 0; i < data.length; i++) {
          if (expresion.test(data[i]['nombre'])) {
            this.arrayJuegos.push(data[i]);
          }
        }
      }
    })
    this.juego=true;

  }


  accederJuegoEditado(idjuego:any){

    this._backdata.obtenerJuegos().subscribe(data=>{
      for (let i = 0; i < data.length; i++) {
        if (idjuego==data[i]['id']) {
          this.juegoeditado.nombre=data[i]['nombre'];
          this.juegoeditado.id=data[i]['id'];
          this.juegoeditado.descripcion=data[i]['descripcion'];
          this.juegoeditado.id_categoria=data[i]['id_categoria'];
          this.juegoeditado.imagen=data[i]['imagen'];
          this.juegoeditado.precio=data[i]['precio'];
          this.juegoeditado.stock=data[i]['stock'];
          console.log(this.juegoeditado)
        }

      }
    })

    this._backdata.obtenerCategorias().subscribe(data=>{
      console.log(this.categoriaseleccionada2)
      for (let i = 0; i < data.length; i++) {
        if (this.juegoeditado.id_categoria==data[i]['id']) {
          console.log(data[i]['id'])
          this.categoriaseleccionada2=data[i]['nombre_cat']
          break;
        }

      }
    })
  }

  accederUsuarioEditado(email:any){
    this._backdata.obtenerUsuarios().subscribe(data=>{
      for (let i = 0; i < data.length; i++) {
        if (email==data[i]['email']) {
          this.usuarioeditado.admin=data[i]['admin'];
          this.usuarioeditado.apellidos=data[i]['apellidos'];
          this.usuarioeditado.direccion=data[i]['direccion'];
          this.usuarioeditado.email=data[i]['email'];
          this.usuarioeditado.nombre=data[i]['nombre'];
          this.usuarioeditado.password=data[i]['password'];


        }

      }
    })
    console.log(this.usuarioeditado)
  }


  hacerAdmin(user: any) {

    var idus = this._backdata.obtenerId(user);
    if (user.admin == "n") {
      user.admin = "s";
      console.log(user.id)
      this._backdata.actualizarUsuario(user, user.id).subscribe(data => console.log(data));
    }
    else {
      user.admin = "n";
      this._backdata.actualizarUsuario(user, user.id).subscribe(data => console.log(data));
    }
  }


  registrarUsusario() {
    var b = true;
    this._backdata.obtenerUsuarios().subscribe(data => {
      for (let i = 0; i < data.length; i++) {
        if (this.nuevoUser.email == data[i]['email']) {
          console.log(this.nuevoUser.email)
          alert('Este email ya está registrado')
          b = false;
          break;
        }

      }
      if (b) {
        console.log("Usuario Registrado")
        this._backdata.crearUsuario(this.nuevoUser).subscribe(data => console.log(data));
        alert("Usuario registrado con éxito")
      }

    })


  }

  editarUsuario(){

    this._backdata.obtenerUsuarios().subscribe(data=>{
      for (let i = 0; i < data.length; i++) {
        if (this.usuarioeditado.email==data[i]['email']) {
          this.idusuario=data[i]['id']
          this._backdata.actualizarUsuario(this.usuarioeditado,this.idusuario).subscribe(data => console.log(data));
          break;
        }
      }
    })

this.usuario=false;

  }

  eliminarUsuario(p: any) {
    this._backdata.eliminarUsuario(p.id.toString()).subscribe(data => console.log("eliminacion"));
    this.usuario = false;

  }


  registrarJuego(){
    this._backdata.obtenerCategorias().subscribe(data=>{
      console.log(this.categoriaseleccionada)
      for (let i = 0; i < data.length; i++) {
        if (this.categoriaseleccionada==data[i]['nombre_cat']) {
          console.log(data[i]['id'])
          this.nuevojeugo.id_categoria=data[i]['id'];
          break;
        }

      }
    })
    this._backdata.crearJuego(this.nuevojeugo).subscribe(data => console.log(data));
    alert("Juego registrado con éxito")

  }

  editarJuego(id:any){
    this._backdata.obtenerCategorias().subscribe(data=>{
      console.log(this.categoriaseleccionada)
      for (let i = 0; i < data.length; i++) {
        if (this.categoriaseleccionada2==data[i]['nombre_cat']) {
          console.log(data[i]['id'])
          this.juegoeditado.id_categoria=data[i]['id'];
          break;
        }

      }
    })

    this._backdata.actualizarJuego(this.juegoeditado,id).subscribe(data => console.log(data));
    this.juego=false;
  }







}
