import { Component, OnInit } from '@angular/core';
import { Boleto } from '../boleto';
import { BoletoService } from '../boleto.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lista-boletos',
  templateUrl: './lista-boletos.component.html',
  styleUrls: ['./lista-boletos.component.css']
})
export class ListaBoletosComponent implements OnInit {
  
  boletos:Boleto[];
  constructor(private vueloServicio:BoletoService, private router: Router){ }

  ngOnInit(): void {
    this.obtenerBoleto();
  
  }

  actualizarBoleto(id:number){
    this.router.navigate(['actualizar-boletos',id]);
  }

  private obtenerBoleto(){
    this.vueloServicio.obtenerListaDeBoletos().subscribe(dato => {
      this.boletos = dato;
    });

}
eliminarBoleto(id:number){
  this.vueloServicio.eliminarBoleto(id).subscribe(dato => {
    console.log(dato);
    this.obtenerBoleto();
  })
}
}
