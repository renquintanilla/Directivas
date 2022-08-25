import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-semaforo',
  templateUrl: './semaforo.component.html',
  styleUrls: ['./semaforo.component.css']
})
export class SemaforoComponent implements OnInit {

  cadenaClases: string;
  arrayClases: string[];
  colorSeleccionado: string;

  constructor() {
    this.cadenaClases = 'semaforo rojo redondo';
    this.arrayClases = ['semaforo'];
    this.arrayClases.push('rojo');
    this.arrayClases.push('redondo');

    this.colorSeleccionado = 'v';
   }

  ngOnInit(): void {
setInternval(() => {},1000)

  }

}
