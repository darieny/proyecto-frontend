import { Component, OnInit } from '@angular/core';
import { Pasajero } from '../pasajero';
import { PasajeroService } from '../pasajero.service';
import { Router } from '@angular/router';
import swal from 'sweetalert2';

@Component({
  selector: 'app-ingresar-pasajero',
  templateUrl: './ingresar-pasajero.component.html',
  styleUrls: ['./ingresar-pasajero.component.css']
})
export class IngresarPasajeroComponent implements OnInit {

  pasajero : Pasajero = new Pasajero();
  constructor(private pasajeroServicio:PasajeroService, private router:Router){}

  ngOnInit(): void {
  }

  guardarPasajero(){
    this.pasajeroServicio.IngresarPasajero(this.pasajero).subscribe(dato =>{
      console.log(dato);
      this.irAListadePasajeros();
    },error => console.log(error));
      
  }

  irAListadePasajeros(){
    this.router.navigate(['/pasajero']);
    swal('Pasajero registrado',`El pasajero ${this.pasajero.nombrePasajero} ha sido registrado con exito`,`success`);
  }
  onSubmit(){
    this.guardarPasajero();
  }

}
