import { Component, OnInit } from '@angular/core';
import { Reserva } from '../reserva';
import { ReservaService } from '../reserva.service';
import { ActivatedRoute, Router } from '@angular/router';
import swal from 'sweetalert2';

@Component({
  selector: 'app-actualizar-reserva',
  templateUrl: './actualizar-reserva.component.html',
  styleUrls: ['./actualizar-reserva.component.css']
})
export class ActualizarReservaComponent implements OnInit {
  
  id:number;
  reserva : Reserva = new Reserva();
  constructor(private reservaServicio:ReservaService, private router:Router, private route:ActivatedRoute){}

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.reservaServicio.obtenerReservaPorId(this.id).subscribe(dato =>{
      this.reserva = dato;
    },error => console.log(error));
  }
  irAListadeReservas(){
    this.router.navigate(['/reserva']);
    swal('Reserva actualizada',`La Reserva ${this.reserva.id} ha sido actualizada con exito`,`success`);
  }

  onSubmit(){
    this.reservaServicio.actualizarReserva(this.id,this.reserva).subscribe(dato => {
      this.irAListadeReservas();
    },error => console.log(error));
  }

}
