import { Component, OnInit } from '@angular/core';
import { Pasajero } from '../pasajero';
import { PasajeroService } from '../pasajero.service';
import { ActivatedRoute, Router } from '@angular/router';
import swal from 'sweetalert2';

@Component({
  selector: 'app-actualizar-pasajero',
  templateUrl: './actualizar-pasajero.component.html',
  styleUrls: ['./actualizar-pasajero.component.css']
})
export class ActualizarPasajeroComponent implements OnInit {
  
  id:number;
  pasajero : Pasajero = new Pasajero();
  constructor(private pasajeroServicio:PasajeroService, private router:Router, private route:ActivatedRoute){}

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.pasajeroServicio.obtenerPasajeroPorId(this.id).subscribe(dato =>{
      this.pasajero = dato;
    },error => console.log(error));
  }
  irAListadePasajeros(){
    this.router.navigate(['/pasajero']);
    swal('Pasajero actualizado',`El pasajero ${this.pasajero.nombrePasajero} ha sido actualizado con exito`,`success`);
  }

  onSubmit(){
    this.pasajeroServicio.actualizarPasajero(this.id,this.pasajero).subscribe(dato => {
      this.irAListadePasajeros();
    },error => console.log(error));
  }
  
}
