import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  propiedadesParrafo: any;

  constructor() {
    this.propiedadesParrafo = { 
      color: 'red', 
      fontSize: '24px' 
    }
  }
}
