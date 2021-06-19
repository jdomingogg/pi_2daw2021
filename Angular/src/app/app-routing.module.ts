import { CarritoComponent } from './carrito/carrito.component';
import { AdminComponent } from './admin/admin.component';
import { PerfilComponent } from './perfil/perfil.component';
import { CategoriaComponent } from './categoria/categoria.component';
import { NovedadesComponent } from './novedades/novedades.component';
import { ValoradosComponent } from './valorados/valorados.component';
import { JuegoComponent } from './juego/juego.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'juego/:id', component: JuegoComponent },
  { path: 'valorados', component: ValoradosComponent },
  { path: 'novedades', component: NovedadesComponent },
  { path: 'categoria', component: CategoriaComponent },
  { path: 'perfil', component: PerfilComponent },
  { path: 'admin', component: AdminComponent },
  { path: 'carrito', component: CarritoComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
