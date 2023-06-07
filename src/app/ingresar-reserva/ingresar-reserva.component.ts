import { Component, OnInit } from '@angular/core';
import { Reserva } from '../reserva';
import { ReservaService } from '../reserva.service';
import { Router } from '@angular/router';
import swal from 'sweetalert2';

@Component({
  selector: 'app-ingresar-reserva',
  templateUrl: './ingresar-reserva.component.html',
  styleUrls: ['./ingresar-reserva.component.css']
})
export class IngresarReservaComponent implements OnInit {

  reserva : Reserva = new Reserva();
  constructor(private reservaServicio:ReservaService, private router:Router){}

  ngOnInit(): void {
  }

  guardarReserva(){
    this.reservaServicio.IngresarReserva(this.reserva).subscribe(dato =>{
      console.log(dato);
      this.irAListadeReservas();
    },error => console.log(error));
      
  }

  irAListadeReservas(){
    this.router.navigate(['/reserva']);
    swal('Reserva registrada',`La reserva ${this.reserva.id} ha sido registrada con exito`,`success`);
  }
  onSubmit(){
    this.guardarReserva();
  }
}
