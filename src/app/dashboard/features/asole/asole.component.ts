import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-asole',
  imports: [FormsModule, NgFor],
  templateUrl: './asole.component.html',
  styleUrl: './asole.component.css'
})
export class AsoleComponent {

    inputed:boolean = false;
  
    larghezza:number = 0;
    lunghezza:number = 0;
    fresa:number = 0;
    profondita:number = 0;
    passate:number = 0;
  
    v:number = 0;
    u:number = 0;
    w:number = 0;
    r:number = 0;
    
  
    errorMessage:string = "";
  

    genera(){
  
      this.inputed = true;
      this.u = Math.abs(this.profondita * 2) / this.passate;
      this.v = Math.abs((this.larghezza- this.fresa) / 2);
      this.w = (this.lunghezza / 2) - (this.fresa /2)
     
    }

}
