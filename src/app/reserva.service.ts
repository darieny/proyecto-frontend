import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Reserva } from './reserva';

@Injectable({
  providedIn: 'root'
})
export class ReservaService {


  private baseURL = "http://localhost:8080/Reserva";

  constructor(private httpClient : HttpClient) { }

  //Este metodo sirve para obtener los clientes
  obtenerListaDeReservas():Observable<Reserva[]>{
    return this.httpClient.get<Reserva[]>(`${this.baseURL}/ListarReservas`);
  }

  //Metodo para registrar un cliente
  IngresarReserva(reserva:Reserva) : Observable<Object>{
    return this.httpClient.post(`${this.baseURL}/IngresarReserva`,reserva);
  }

  //Metodo para actualizar un cliente
  actualizarReserva(id:number,reserva:Reserva): Observable<object>{
    return this.httpClient.put(`${this.baseURL}/ActualizarReserva/${id}`,reserva);
  }
  //Metodo para eliminar un cliente
  eliminarReserva(id:number): Observable<Object>{
    return this.httpClient.delete(`${this.baseURL}/EliminarReserva/${id}`);
  }
  //Metodo para obtener o buscar un empleado
  obtenerReservaPorId(id:number):Observable<Reserva>{
    return this.httpClient.get<Reserva>(`${this.baseURL}/${id}`);
  }
}
