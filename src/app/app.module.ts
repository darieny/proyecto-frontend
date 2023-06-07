import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListaPasajeroComponent } from './lista-pasajero/lista-pasajero.component';
import { HttpClientModule } from '@angular/common/http';
import { IngresarPasajeroComponent } from './ingresar-pasajero/ingresar-pasajero.component';
import { FormsModule } from '@angular/forms';
import { ActualizarPasajeroComponent } from './actualizar-pasajero/actualizar-pasajero.component';
import { ListaReservaComponent } from './lista-reserva/lista-reserva.component';
import { IngresarReservaComponent } from './ingresar-reserva/ingresar-reserva.component';
import { ActualizarReservaComponent } from './actualizar-reserva/actualizar-reserva.component';
import { ListaVuelosComponent } from './lista-vuelos/lista-vuelos.component';
import { IngresarVueloComponent } from './ingresar-vuelo/ingresar-vuelo.component';
import { ActualizarVueloComponent } from './actualizar-vuelo/actualizar-vuelo.component';
import { ListaBoletosComponent } from './lista-boletos/lista-boletos.component';
import { IngresarBoletosComponent } from './ingresar-boletos/ingresar-boletos.component';
import { ActualizarBoletosComponent } from './actualizar-boletos/actualizar-boletos.component';

@NgModule({
  declarations: [
    AppComponent,
    ListaPasajeroComponent,
    IngresarPasajeroComponent,
    ActualizarPasajeroComponent,
    ListaReservaComponent,
    IngresarReservaComponent,
    ActualizarReservaComponent,
    ListaVuelosComponent,
    IngresarVueloComponent,
    ActualizarVueloComponent,
    ListaBoletosComponent,
    IngresarBoletosComponent,
    ActualizarBoletosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
