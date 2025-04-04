import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-filetti',
  imports: [FormsModule, NgIf],
  templateUrl: './filetti.component.html',
  styleUrl: './filetti.component.css'
})
export class FilettiComponent {

  inputed:boolean = false;
  tipo:string = "";
  tampone:number = 0;
  fresa:number = 0;
  passo:number = 0;

  j:number = 0;
  w:number = 0;
  v:number = 0;
  u:number = 0;



  genera(){
    this.inputed = true;

    this.j = (this.tampone/2);
    this.w = Math.abs(this.j - (this.passo/2) - 0.5);
    this.v = Math.abs(this.j - this.w);
    this.u = (this.passo*2);


  }

}
