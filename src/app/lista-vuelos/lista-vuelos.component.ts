import { Component, OnInit } from '@angular/core';
import { Vuelo } from '../vuelo';
import { VueloService } from '../vuelo.service';
import { Router } from '@angular/router';
import swal from 'sweetalert2';

@Component({
  selector: 'app-lista-vuelos',
  templateUrl: './lista-vuelos.component.html',
  styleUrls: ['./lista-vuelos.component.css']
})
export class ListaVuelosComponent implements OnInit {
  
  vuelos:Vuelo[];
  constructor(private vueloServicio:VueloService, private router: Router){ }

  ngOnInit(): void {
    this.obtenerVuelo();
  
  }

  actualizarVuelo(id:number){
    this.router.navigate(['actualizar-vuelo',id]);
  }

  private obtenerVuelo(){
    this.vueloServicio.obtenerListaDeVuelos().subscribe(dato => {
      this.vuelos = dato;
    });

}
eliminarVuelo(id:number){
  this.vueloServicio.eliminarVuelo(id).subscribe(dato => {
    console.log(dato);
    this.obtenerVuelo();
    swal('Vuelo eliminado',`El vuelo ha sido eliminado con exito`,`success`);
  })
}
}
