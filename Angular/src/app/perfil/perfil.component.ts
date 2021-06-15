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

  constructor(public _backdata: BackDataService) { }

  ngOnInit(): void {
  }

}
