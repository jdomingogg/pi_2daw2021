import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { BusquedaComponent } from './busqueda/busqueda.component';
import { CategoriaComponent } from './categoria/categoria.component';
import { JuegoComponent } from './juego/juego.component';
import { InicioSesionComponent } from './inicio-sesion/inicio-sesion.component';
import { ValoradosComponent } from './valorados/valorados.component';
import { NuevoUsuarioComponent } from './nuevo-usuario/nuevo-usuario.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BusquedaComponent,
    CategoriaComponent,
    JuegoComponent,
    InicioSesionComponent,
    ValoradosComponent,
    NuevoUsuarioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
