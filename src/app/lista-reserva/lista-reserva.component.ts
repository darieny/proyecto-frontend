import { Component, OnInit } from '@angular/core';
import { Reserva } from '../reserva';
import { ReservaService } from '../reserva.service';
import { Router } from '@angular/router';
import swal from 'sweetalert2';

@Component({
  selector: 'app-lista-reserva',
  templateUrl: './lista-reserva.component.html',
  styleUrls: ['./lista-reserva.component.css']
})
export class ListaReservaComponent implements OnInit {
  
  reservas:Reserva[];
  constructor(private reservaServicio:ReservaService, private router: Router){ }

  ngOnInit(): void {
    this.obtenerReserva();
  
  }

  actualizarReserva(id:number){
    this.router.navigate(['actualizar-reserva',id]);
  }

  private obtenerReserva(){
    this.reservaServicio.obtenerListaDeReservas().subscribe(dato => {
      this.reservas = dato;
    });
  }
  
  eliminarReserva(id:number){
    this.reservaServicio.eliminarReserva(id).subscribe(dato => {
      console.log(dato);
      this.obtenerReserva();
      swal('Pasajero eliminado','El pasajero ha sido eliminado con exito','success');
    })
  }
}
