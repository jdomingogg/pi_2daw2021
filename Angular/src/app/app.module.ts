import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { BusquedaComponent } from './busqueda/busqueda.component';
import { CategoriaComponent } from './categoria/categoria.component';
import { JuegoComponent } from './juego/juego.component';
import { ValoradosComponent } from './valorados/valorados.component';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { DatePipe } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { PerfilComponent } from './perfil/perfil.component';
import { AdminComponent } from './admin/admin.component';
import { CarritoComponent } from './carrito/carrito.component';
import { ListadeseosComponent } from './listadeseos/listadeseos.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BusquedaComponent,
    CategoriaComponent,
    JuegoComponent,

    ValoradosComponent,

    HeaderComponent,
    PerfilComponent,
    AdminComponent,
    CarritoComponent,
    ListadeseosComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,

  ],
  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
