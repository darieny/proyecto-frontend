import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Vuelo } from './vuelo';

@Injectable({
  providedIn: 'root'
})
export class VueloService {

  private baseURL = "http://localhost:8080/Vuelo";

  constructor(private httpClient : HttpClient) { }

  //Este metodo sirve para obtener los clientes
  obtenerListaDeVuelos():Observable<Vuelo[]>{
    return this.httpClient.get<Vuelo[]>(`${this.baseURL}/ListarVuelos`);
  }

  //Metodo para registrar un cliente
  IngresarVuelo(vuelo:Vuelo) : Observable<Object>{
    return this.httpClient.post(`${this.baseURL}/IngresarVuelos`,vuelo);
  }

  //Metodo para actualizar un cliente
  actualizarVuelo(id:number,vuelo:Vuelo): Observable<object>{
    return this.httpClient.put(`${this.baseURL}/ActualizarVuelos/${id}`,vuelo);
  }
  //Metodo para eliminar un cliente
  eliminarVuelo(id:number): Observable<Object>{
    return this.httpClient.delete(`${this.baseURL}/EliminarVuelo/${id}`);
  }
  //Metodo para obtener o buscar un empleado
  obtenerVueloPorId(id:number):Observable<Vuelo>{
    return this.httpClient.get<Vuelo>(`${this.baseURL}/${id}`);
  }
}
