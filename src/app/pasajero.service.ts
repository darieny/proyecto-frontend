import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Pasajero } from './pasajero';

@Injectable({
  providedIn: 'root'
})
export class PasajeroService {

  //Esta URL obtiene el listado de todos los clientes en el backend
  private baseURL = "http://localhost:8080/Pasajero";
  
  constructor(private httpClient : HttpClient) { }

  //Este metodo sirve para obtener los clientes
  obtenerListaDePasajeros():Observable<Pasajero[]>{
    return this.httpClient.get<Pasajero[]>(`${this.baseURL}/ListarPasajeros`);
  }

  //Metodo para registrar un cliente
  IngresarPasajero(pasajero:Pasajero) : Observable<Object>{
    return this.httpClient.post(`${this.baseURL}/IngresarPasajero`,pasajero);
  }

  //Metodo para actualizar un cliente
  actualizarPasajero(id:number,pasajero:Pasajero): Observable<object>{
    return this.httpClient.put(`${this.baseURL}/ActualizarPasajero/${id}`,pasajero);
  }
  //Metodo para eliminar un cliente
  eliminarPasajero(id:number): Observable<Object>{
    return this.httpClient.delete(`${this.baseURL}/EliminarPasajero/${id}`);
  }
  //Metodo para obtener o buscar un empleado
  obtenerPasajeroPorId(id:number):Observable<Pasajero>{
    return this.httpClient.get<Pasajero>(`${this.baseURL}/${id}`);
  }
}