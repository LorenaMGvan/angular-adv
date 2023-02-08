import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';

@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html',
  styles: [
  ]
})
export class IncrementadorComponent implements OnInit{
  ngOnInit(): void {
    this.btnClass = `btn ${this.btnClass}`; // solo se ejecuta una vez en el onInit
  }
  @Input() btnClass: string = 'btn-primary';
  
  // @Outpu() valorSalida EventEmitter;
  @Output() valorSalida: EventEmitter<any> = new EventEmitter<any>();
  @Input('valor') progreso: number = 50;
  // *********** Para renombrar el argumento progreso , y cambiarla por el nombre "valor"
  // @Input('valor') progreso: number = 50;
  // ************

  // con el Input , puede recibir una propiedad desde el padre , llamada progreso  
  // get getPorcentaje() {
  //   return `${ this.progreso}%`;
  // }

  cambiarValor( valor: number) {

    if ( this.progreso >=100 && valor >= 0 ) {
      this.valorSalida.emit(100);
      return this.progreso = 100;
    }
    
    if ( this.progreso <=0 && valor < 0 ) {
      this.valorSalida.emit(100);
      return this.progreso  = 0;
    }
    
    
    this.valorSalida.emit(this.progreso);
    return this.progreso = this.progreso + valor
  }

  onChange( nuevoValor: number ) {
    if( nuevoValor >= 100 ) {
      this.progreso = 100;
    } else if ( nuevoValor <= 0) {
      this.progreso = 0;
    } else {
      this.progreso = nuevoValor;
    }

    this.valorSalida.emit(this.progreso);
  }
}
