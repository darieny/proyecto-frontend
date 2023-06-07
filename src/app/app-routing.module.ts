import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaPasajeroComponent } from './lista-pasajero/lista-pasajero.component';
import { IngresarPasajeroComponent } from './ingresar-pasajero/ingresar-pasajero.component';
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

const routes: Routes = [
  {path : 'Sistema/pasajero', component:ListaPasajeroComponent},
  {path : '', redirectTo:'pasajero',pathMatch:'full'},
  {path :'Sistema/pasajero/ingresar-pasajero',component: IngresarPasajeroComponent},
  {path : 'actualizar-pasajero/:id',component : ActualizarPasajeroComponent},

  //Reserva
  {path : 'Sistema/reserva',component : ListaReservaComponent},
  {path : '', redirectTo:'reserva',pathMatch:'full'},
  {path :'Sistema/reserva/ingresar-reserva',component: IngresarReservaComponent},
  {path : 'actualizar-reserva/:id',component : ActualizarReservaComponent},

  //Vuelos
  {path : 'Sistema/vuelo', component:ListaVuelosComponent},
  {path : '', redirectTo:'vuelo',pathMatch:'full'},
  {path :'Sistema/vuelo/ingresar-vuelo',component: IngresarVueloComponent},
  {path : 'actualizar-vuelo/:id',component : ActualizarVueloComponent},

  //Boleto
  {path : 'Sistema/boleto',component : ListaBoletosComponent},
  {path : '', redirectTo:'boleto',pathMatch:'full'},
  {path :'Sistema/boleto/ingresar-boletos',component: IngresarBoletosComponent},
  {path : 'actualizar-boletos/:id',component : ActualizarBoletosComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
