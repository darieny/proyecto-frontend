import { Component, OnInit } from '@angular/core';
import { Vuelo } from '../vuelo';
import { VueloService } from '../vuelo.service';
import { Router } from '@angular/router';
import swal from 'sweetalert2';

@Component({
  selector: 'app-ingresar-vuelo',
  templateUrl: './ingresar-vuelo.component.html',
  styleUrls: ['./ingresar-vuelo.component.css']
})
export class IngresarVueloComponent implements OnInit {

  vuelo : Vuelo = new Vuelo();
  constructor(private vueloServicio:VueloService, private router:Router){}

  ngOnInit(): void {
  }

  guardarVuelo(){
    this.vueloServicio.IngresarVuelo(this.vuelo).subscribe(dato =>{
      console.log(dato);
      this.irAListadeVuelos();
    },error => console.log(error));
      
  }

  irAListadeVuelos(){
    this.router.navigate(['/vuelo']);
    swal('Vuelo registrado',`El vuelo ${this.vuelo.id} ha sido registrado con exito`,`success`);
  }
  onSubmit(){
    this.guardarVuelo();
  }
}
