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

  onClick(pColor: string){
    switch(pColor) {
      case 'V': 
        this.propiedadesParrafo.color = "green";
        break;
      case 'R': 
        this.propiedadesParrafo.color = "red";
        break;  
      case 'A': 
        this.propiedadesParrafo.color = "yellow";
        break;  
    
    }
  }

  onChange($event: any){
    this.propiedadesParrafo.fontSize = `${$event.target.value}px`;
  }

}
