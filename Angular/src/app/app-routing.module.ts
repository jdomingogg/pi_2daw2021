import { BusquedaComponent } from './busqueda/busqueda.component';
import { ListadeseosComponent } from './listadeseos/listadeseos.component';
import { CarritoComponent } from './carrito/carrito.component';
import { AdminComponent } from './admin/admin.component';
import { PerfilComponent } from './perfil/perfil.component';
import { CategoriaComponent } from './categoria/categoria.component';

import { JuegoComponent } from './juego/juego.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'juego/:id', component: JuegoComponent },
  { path: 'categoria', component: CategoriaComponent },
  { path: 'perfil', component: PerfilComponent },
  { path: 'admin', component: AdminComponent },
  { path: 'carrito', component: CarritoComponent },
  { path: 'listadeseos', component: ListadeseosComponent },
  { path: 'buscar/:buscar', component: BusquedaComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
