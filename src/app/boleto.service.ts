import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Boleto } from './boleto';

@Injectable({
  providedIn: 'root'
})
export class BoletoService {

  //Esta URL obtiene el listado de todos los clientes en el backend
  private baseURL = "http://localhost:8080/Boleto";
  
  constructor(private httpClient : HttpClient) { }

  //Este metodo sirve para obtener los clientes
  obtenerListaDeBoletos():Observable<Boleto[]>{
    return this.httpClient.get<Boleto[]>(`${this.baseURL}/ListarBoletos`);
  }

  //Metodo para registrar un cliente
  IngresarBoleto(boleto:Boleto) : Observable<Object>{
    return this.httpClient.post(`${this.baseURL}/IngresarBoleto`,boleto);
  }

  //Metodo para actualizar un cliente
  actualizarBoleto(id:number,boleto:Boleto): Observable<object>{
    return this.httpClient.put(`${this.baseURL}/ActualizarBoleto/${id}`,boleto);
  }
  //Metodo para eliminar un cliente
  eliminarBoleto(id:number): Observable<Object>{
    return this.httpClient.delete(`${this.baseURL}/EliminarBoleto/${id}`);
  }
  //Metodo para obtener o buscar un empleado
  obtenerBoletoPorId(id:number):Observable<Boleto>{
    return this.httpClient.get<Boleto>(`${this.baseURL}/${id}`);
  }
}
