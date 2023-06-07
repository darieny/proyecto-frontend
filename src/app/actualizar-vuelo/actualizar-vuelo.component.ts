import { Component, OnInit } from '@angular/core';
import { Vuelo } from '../vuelo';
import { VueloService } from '../vuelo.service';
import { ActivatedRoute, Router } from '@angular/router';
import swal from 'sweetalert2';

@Component({
  selector: 'app-actualizar-vuelo',
  templateUrl: './actualizar-vuelo.component.html',
  styleUrls: ['./actualizar-vuelo.component.css']
})
export class ActualizarVueloComponent implements OnInit {
  
  id:number;
  vuelo : Vuelo = new Vuelo();
  constructor(private reservaServicio:VueloService, private router:Router, private route:ActivatedRoute){}

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.reservaServicio.obtenerVueloPorId(this.id).subscribe(dato =>{
      this.vuelo = dato;
    },error => console.log(error));
  }
  irAListadeVuelos(){
    this.router.navigate(['/vuelo']);
    swal('Vuelo actualizado',`El vuelo ${this.vuelo.id} ha sido actualizado con exito`,`success`);
  }

  onSubmit(){
    this.reservaServicio.actualizarVuelo(this.id,this.vuelo).subscribe(dato => {
      this.irAListadeVuelos();
    },error => console.log(error));
  }
}
