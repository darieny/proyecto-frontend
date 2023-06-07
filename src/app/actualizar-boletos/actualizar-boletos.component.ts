import { Component, OnInit } from '@angular/core';
import { Boleto } from '../boleto';
import { BoletoService } from '../boleto.service';
import { ActivatedRoute, Router } from '@angular/router';
import swal from 'sweetalert2';

@Component({
  selector: 'app-actualizar-boletos',
  templateUrl: './actualizar-boletos.component.html',
  styleUrls: ['./actualizar-boletos.component.css']
})
export class ActualizarBoletosComponent implements OnInit {
  
  id:number;
  boleto : Boleto = new Boleto();
  constructor(private boletoServicio:BoletoService, private router:Router, private route:ActivatedRoute){}

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.boletoServicio.obtenerBoletoPorId(this.id).subscribe(dato =>{
      this.boleto = dato;
    },error => console.log(error));
  }
  irAListadeBoletos(){
    this.router.navigate(['/boleto']);
    swal('Boleto actualizado',`El boleto ${this.boleto.id} ha sido actualizado con exito`,`success`);
  }

  onSubmit(){
    this.boletoServicio.actualizarBoleto(this.id,this.boleto).subscribe(dato => {
      this.irAListadeBoletos();
    },error => console.log(error));
  }
}
