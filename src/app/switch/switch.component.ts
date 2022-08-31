import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-switch',
  templateUrl: './switch.component.html',
  styleUrls: ['./switch.component.css']
})
export class SwitchComponent implements OnInit {

  opcionNumero: number;
  opcionString: string;

  constructor() {
    this.opcionNumero=8;
    this.opcionString='tres';
   }

  ngOnInit(): void {
  }

}
