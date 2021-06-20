import { BusquedaComponent } from './../busqueda/busqueda.component';
import { Usuario } from './../classes/usuario';
import { Component, OnInit, ViewChild } from '@angular/core';
import { BackDataService } from '../services/back-data.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  buscar:string="";
  nuevoUser: Usuario = new Usuario("", "", "", "", "", "n");
  @ViewChild('logear') closebutton: any;
  constructor(public _backdata: BackDataService) { }

  ngOnInit(): void {
  }


  public onSave() {
    this.closebutton.nativeElement.click();
  }

  registrarUsusario(){

      console.log("Usuario Registrado")

    this._backdata.obtenerUsuarios().subscribe(data=>{
      var b=false;
      for (let i = 0; i < data.length; i++) {
        console.log(this.nuevoUser.email)
        if (data[i]['email']==this.nuevoUser.email) {
          alert("Este email ya está en uso");
          b=true;
        }

      }

      if(!b){
        this._backdata.crearUsuario(this.nuevoUser).subscribe(data => console.log(data));
        this._backdata.obtenerUsuarios().subscribe(data=>{
          for (let i = 0; i < data.length; i++) {
            if (data[i]['email']==this.nuevoUser.email) {
              this._backdata.iduser=data[i]['id'];
              break;
            }

          }
        })
        this._backdata.mostrarAtributoUsuario();
        alert("Usuario registrado con éxito")
      }
    })

  }
}
