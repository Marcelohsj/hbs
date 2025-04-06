import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-interpolazione',
  imports: [FormsModule],
  templateUrl: './interpolazione.component.html',
  styleUrl: './interpolazione.component.css'
})
export class InterpolazioneComponent {

  inputed:boolean = false;

  foro:number = 0;
  fresa:number = 0;
  profondita:number = 0;

  y:number = 0;
  j:number = 0;
  u:number = 0;

  errorMessage:string = "";

 

  genera(){

    this.inputed = true;

    this.u = Math.abs(this.profondita * 2);
    this.y = Math.abs((this.foro - this.fresa) / 2);
    this.j = Math.abs(this.y);
  }

}
