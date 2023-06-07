import { Component, OnInit } from '@angular/core';
import { Boleto } from '../boleto';
import { BoletoService } from '../boleto.service';
import { Router } from '@angular/router';
import swal from 'sweetalert2';

@Component({
  selector: 'app-ingresar-boletos',
  templateUrl: './ingresar-boletos.component.html',
  styleUrls: ['./ingresar-boletos.component.css']
})
export class IngresarBoletosComponent implements OnInit {

  boleto : Boleto = new Boleto();
  constructor(private boletoServicio:BoletoService, private router:Router){}

  ngOnInit(): void {
  }

  guardarBoleto(){
    this.boletoServicio.IngresarBoleto(this.boleto).subscribe(dato =>{
      console.log(dato);
      this.irAListadeBoletos();
    },error => console.log(error));
      
  }

  irAListadeBoletos(){
    this.router.navigate(['/boleto']);
    swal('Boleto registrado',`El Boleto ${this.boleto.id} ha sido registrado con exito`,`success`);
  }
  onSubmit(){
    this.guardarBoleto();
  }
}
