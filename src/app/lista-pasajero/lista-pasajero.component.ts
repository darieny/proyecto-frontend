import { Component, OnInit} from '@angular/core';
import { Pasajero } from '../pasajero';
import { PasajeroService } from '../pasajero.service';
import { Router } from '@angular/router';
import swal from 'sweetalert2';

@Component({
  selector: 'app-lista-pasajero',
  templateUrl: './lista-pasajero.component.html',
  styleUrls: ['./lista-pasajero.component.css']
})
export class ListaPasajeroComponent implements OnInit {
  
  pasajeros:Pasajero[];
  constructor(private pasajeroServicio:PasajeroService, private router: Router){ }

  ngOnInit(): void {
    this.obtenerPasajeros();
  
  }

  actualizarPasajeros(id:number){
    this.router.navigate(['actualizar-pasajero',id]);
  }

  private obtenerPasajeros(){
    this.pasajeroServicio.obtenerListaDePasajeros().subscribe(dato => {
      this.pasajeros = dato;
    });
  }
  
  eliminarPasajero(id:number){
    this.pasajeroServicio.eliminarPasajero(id).subscribe(dato => {
      console.log(dato);
      this.obtenerPasajeros();
      swal('Pasajero eliminado','El pasajero ha sido eliminado con exito','success');
    })
  }
  
}
