import { ThisReceiver, ThrowStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bucles',
  templateUrl: './bucles.component.html',
  styleUrls: ['./bucles.component.css']
})
export class BuclesComponent implements OnInit {

personas: any[];

resaltatexto: any;

  constructor() {
    this.resaltatexto = {
          color: 'blue',
          fontSize: '15px'
    }

    this.personas=
     [
      { nombre: 'René', apellidos: 'Quintanilla', edad: 49, calle:'23 ave 15 y 42 calle', telefono:'84650393' },
      { nombre: 'Patricia', apellidos: 'Estrada', edad: 51, calle:'18 entre 9na y 11va.', telefono:'84765571' },
      { nombre: 'Kevin', apellidos: 'Quintanilla', edad: 25, calle:'Trinidad Boulevar 55', telefono:'87742895' },
      { nombre: 'Laura', apellidos: 'Mejía', edad: 26, calle:'Los Hérores. Ave 16', telefono:'88776655' },
      { nombre: 'Kendyr', apellidos: 'Quintanilla', edad: 24, calle:'San Andrés LC26', telefono:'78192925' },
     ];
   }

  ngOnInit(): void {
  }

onClick() {
  this.personas.push({
    nombre:'Juan', apellidos:'Guido', edad: 40, calle:'Los Maribios 12', telefono:'23430389'
  });
}


}
